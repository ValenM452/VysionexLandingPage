// Run against a production preview and an isolated Chrome with remote debugging.
// node scripts/responsive-qa.mjs [preview URL] [Chrome debugging URL]
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.argv[2] || 'http://127.0.0.1:4322';
const debug = process.argv[3] || 'http://127.0.0.1:9223';
const output = '/tmp/vysionex-block04-qa';
await mkdir(output, { recursive: true });
const tabs = await (await fetch(`${debug}/json/list`)).json();
const tab = tabs.find(t => t.type === 'page');
assert(tab, 'Chrome page target must exist');
const socket = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
let sequence = 0;
const pending = new Map();
const errors = [];
socket.onmessage = ({ data }) => {
  const message = JSON.parse(data);
  if (message.id) {
    const request = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) request.reject(new Error(JSON.stringify(message.error)));
    else request.resolve(message.result);
  }
  if (message.method === 'Runtime.exceptionThrown') errors.push(message.params.exceptionDetails.text);
  if (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error') errors.push(JSON.stringify(message.params.args));
};
function cdp(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++sequence;
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}
async function evaluate(expression) {
  const result = await cdp('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  assert(!result.exceptionDetails, JSON.stringify(result.exceptionDetails));
  return result.result.value;
}
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
try {
  await cdp('Page.enable');
  await cdp('Runtime.enable');
  await cdp('Page.bringToFront');
  await cdp('Emulation.setFocusEmulationEnabled', { enabled: true });
  await cdp('Emulation.setScriptExecutionDisabled', { value: false });
  await cdp('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] });
  const rows = [];
  for (const width of [320, 375, 768, 1024, 1440, 1920]) {
    await cdp('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: false });
    await cdp('Page.navigate', { url: base });
    await wait(1200);
    // Reveal each section through actual scrolling, then return to the top for capture.
    for (const selector of ['.problem', '.method', '#contacto', 'footer']) {
      await evaluate(`document.querySelector('${selector}').scrollIntoView({behavior:'instant'})`);
      await wait(800);
    }
    await evaluate('window.scrollTo({top:0,behavior:"instant"})');
    const result = await evaluate(`(() => {
      const bad = [...document.querySelectorAll('main *, footer *')].filter(el => {
        if (el.closest('svg') || !el.getClientRects().length) return false;
        const r = el.getBoundingClientRect();
        return r.left < -1 || r.right > innerWidth + 1;
      }).map(el => el.tagName + '.' + el.className);
      const anchors = [...document.querySelectorAll('a[href^="#"]')].every(a => document.getElementById(a.hash.slice(1)));
      return { width: innerWidth, clientWidth: document.documentElement.clientWidth, scrollWidth: document.documentElement.scrollWidth, bad, anchors,
        h1: document.querySelectorAll('h1').length,
        blocked: [...document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form button')].every(el => el.matches(':disabled')),
        hiddenCopy: [...document.querySelectorAll('[data-reveal]')].some(el => getComputedStyle(el).opacity !== '1') };
    })()`);
    assert.equal(result.scrollWidth, result.clientWidth, `Page overflow at ${width}`);
    assert.deepEqual(result.bad, [], `Element overflow at ${width}`);
    assert(result.anchors && result.h1 === 1 && result.blocked && !result.hiddenCopy, JSON.stringify(result));
    if (width < 768) {
      await evaluate('document.querySelector("summary").click()');
      await wait(100);
      assert.equal(await evaluate('document.querySelector("summary").getAttribute("aria-label")'), 'Cerrar navegación');
      assert(await evaluate('document.querySelector(".site-header__mobile-panel").getBoundingClientRect().right <= innerWidth'));
      // Exercise keyboard Escape with the focus inside the disclosure.
      await evaluate('document.querySelector("summary").focus()');
      await cdp('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
      assert.equal(await evaluate('document.querySelector("details").open'), false);
      await evaluate('document.querySelector("summary").click(); document.querySelector(".site-header__mobile-panel .action-link").click()');
      await wait(700);
      assert.equal(await evaluate('document.querySelector("details").open'), false);
      assert.equal(await evaluate('document.activeElement.id'), 'contacto');
    } else {
      await evaluate('document.querySelector(".hero__actions .action-link").click()');
      await wait(700);
      assert.equal(await evaluate('document.activeElement.id'), 'contacto');
    }
    await evaluate('window.scrollTo({top:0,behavior:"instant"})');
    await wait(500);
    assert(await evaluate('document.querySelector(".skip-link").getBoundingClientRect().bottom <= 0'), 'Skip link must be hidden without focus');
    await evaluate('document.querySelector(".skip-link").focus()');
    await wait(250);
    assert(await evaluate('document.querySelector(".skip-link").getBoundingClientRect().top >= 0'), 'Skip link must be visible on focus');
    await evaluate('document.activeElement.blur()');
    await wait(250);
    const layout = await cdp('Page.getLayoutMetrics');
    const shot = await cdp('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true,
      clip: { x: 0, y: 0, width, height: layout.cssContentSize.height, scale: 1 } });
    await writeFile(`${output}/${width}.png`, Buffer.from(shot.data, 'base64'));
    rows.push({ width, status: 'PASS', checks: 'overflow, anchors, headings, blocked contact, reveals, CTA focus, mobile menu where applicable' });
    console.log(JSON.stringify(rows.at(-1)));
  }
  await cdp('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  await cdp('Page.navigate', { url: base });
  await wait(700);
  assert.equal(await evaluate('getComputedStyle(document.querySelector(".orb__latitude")).animationName'), 'none');
  assert.equal(await evaluate('getComputedStyle(document.documentElement).scrollBehavior'), 'auto');
  await cdp('Emulation.setScriptExecutionDisabled', { value: true });
  await cdp('Page.navigate', { url: base });
  await wait(700);
  assert(await evaluate('[...document.querySelectorAll("[data-reveal]")].every(el => getComputedStyle(el).opacity === "1")'));
  await cdp('Emulation.setScriptExecutionDisabled', { value: false });
  assert.deepEqual(errors, [], 'JavaScript console/runtime errors');
  await writeFile(`${output}/report.json`, JSON.stringify({ rows, reducedMotion: 'PASS', noJavaScriptContent: 'PASS', runtimeErrors: errors }, null, 2));
  console.log(`Reduced motion and no-JS content: PASS. Evidence: ${output}`);
} finally {
  socket.close();
}
