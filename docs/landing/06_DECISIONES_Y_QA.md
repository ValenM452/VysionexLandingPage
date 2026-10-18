# Decisiones abiertas y QA

## Confirmado
- Landing simple y premium, referencia oscura azul con esfera, animaciones sutiles.
- Desarrollo en cuatro bloques con planning separado en Codex/VS Code.
- VYSIONEX está precomercial; objetivo inicial: validar demanda por diagnóstico.

## Pendiente de decisión (no inventar)
1. Nicho inicial (idealmente uno) y problema económico principal.
2. Dominio, nombre legal/razón social y datos de contacto.
3. Canal de conversión: formulario con proveedor seguro o contacto por email; destino concreto.
4. Si diagnóstico piloto es gratuito, pago o sujeto a evaluación; plazos y disponibilidad.
5. Política de privacidad, consentimiento, términos aplicables y revisión legal/fiscal.
6. Hosting, repositorio, stack existente y permisos de deploy.
7. Logo/wordmark y fuentes con licencia; imágenes OG.
8. Analítica y consentimiento de cookies si se requieren.

## Matriz de QA (registrar PASS/FAIL/NOT TESTED con evidencia)
- Build, lint, tests y consola sin errores.
- Navegación por anclas y CTA verificables.
- Mobile 360/390, tablet 768, desktop 1280/1440; sin overflow.
- Contraste, foco, teclado, labels, mensajes de error, reduced-motion.
- Movimiento sin degradación de rendimiento; contenido visible sin JS.
- Formulario: validación, envío real, errores de red, confirmación, antispam; o bloqueo declarado.
- SEO básico, metadatos, indexación, favicon y OG si aprobados.
- Privacidad y datos de contacto reales antes de publicar.
- Capturas visuales reales solo si hay navegador; no declarar PASS de interacción sin ejecutarla.

## Puerta de publicación
GO solo cuando contacto y privacidad estén resueltos, CTA sea real, copy sea veraz, responsive y pruebas críticas pasen. De lo contrario NO-GO y lista de correcciones. No publicar automáticamente.

## Bloque 04 — Implementación y responsive (18/10/2026)

Implementación autorizada en conversación, incluyendo adaptación integral responsive.

- Contacto y Footer integrados; todos los CTA a `#contacto` tienen destino real.
- Formulario visual no operativo: campos deshabilitados dentro de un `fieldset`, sin elemento `form`, endpoint, envío, persistencia ni confirmación ficticia. El aviso explica que no recibe ni envía datos. Límites y tipos HTML preparados, sin declarar validación de envío completada.
- Se conserva la metodología actual de cuatro pasos hasta resolver la discrepancia con los tres pasos documentados. No se altera su oferta ni copy.
- Footer con enlaces internos reales y año de build. No se inventaron contacto, redes ni enlaces legales.
- Metadatos de título, descripción y Open Graph textual; `noindex, nofollow` mientras esté prepublicación. Canonical, `og:url`, imagen OG, favicon y sitemap requieren dominio/assets aprobados. No se creó una política legal provisional.
- CSS fluido para Contacto, formulario y Footer; ajustes de tipografía móvil, espacio en Problema, objetivos táctiles de al menos 44 px en navegación/CTA, y menú con altura limitada para pantallas bajas.
- Menú cierra con Escape, clic externo y CTA; nombre accesible según estado; `aria-current="location"`; enfoque de anclas y reduced motion preservados.
- Corregido el posicionamiento del skip link dentro del header sticky para evitar que aparezca al volver arriba. QA adicional comprueba que esté oculto sin foco y visible al enfocarlo.
- Sin nuevas dependencias. `npm run qa:responsive` ejecuta el script de Chrome DevTools con Node 22 y WebSocket nativo.

### Evidencia ejecutada

- `npm run build`: PASS. Incluye `astro check`: 16 archivos, 0 errores, 0 warnings, 0 hints; salida estática generada.
- `node --check scripts/responsive-qa.mjs`: PASS.
- Chrome headless real sobre `astro preview` local, viewports de 320, 375, 768, 1024, 1440 y 1920 × 900 CSS px, escala 1: PASS en controles de overflow de página/elementos, anclas, H1 único, contenido revelado, foco del CTA y bloqueo del formulario. Menú móvil: apertura, Escape y cierre al activar CTA comprobados en 320/375.
- Reduced motion: PASS para orb sin animación y scroll no animado. Sin JavaScript: PASS para visibilidad de contenido de secciones.
- Sin excepciones JavaScript ni mensajes `console.error` durante la prueba. Esto no certifica todos los recursos o headers de red.
- Capturas de cada ancho y reporte JSON en `/tmp/vysionex-block04-qa/` (artefactos temporales, regenerables).
- No hay suite unitaria ni lint preexistentes. No se instalaron herramientas para simular un PASS.
- Safari/iOS, Firefox, dispositivos físicos, lectores de pantalla, zoom real 200/400%, auditoría WCAG completa, Lighthouse y LCP/CLS/INP: NOT TESTED.
- Envío real, errores remotos, antispam y consentimiento: BLOCKED por destino/proveedor/textos legales sin confirmar.

### Reproducir QA

1. `npm run build`
2. `npm run preview -- --host 127.0.0.1 --port 4322`
3. Iniciar Chrome aislado con depuración local en puerto 9223 (perfil temporal propio; no usar el perfil personal).
4. `npm run qa:responsive` (acepta URL de preview y URL de depuración como argumentos).

### Pendientes de habilitación y publicación

Estado: **NO-GO**. Confirmar responsable/domicilio/canal de derechos, receptor/proveedor, retención y privacidad revisada antes de implementar POST, consentimiento y estados de envío. Luego probar aceptación, consulta en panel y recepción en buzón, rechazo, timeout, reintento y antispam. Incorporar política real y enlaces; definir hosting/dominio/assets/headers, verificar SEO de producción y retirar `noindex` únicamente al aprobar publicación.

El directorio sigue sin repositorio Git; no se inicializó ni se tocó el proyecto vecino. npm instalado es 9.2.0, inferior al requisito >=9.6.5 y diferente de `packageManager: npm@10.9.2`; el build local pasó, pero debe normalizarse el entorno para instalaciones reproducibles. No se instalaron paquetes ni se cambió el lockfile. Manrope sigue pendiente de asset local aprobado; se conserva el fallback del sistema.
