# Dirección visual y movimiento

## Referencia
Archivo visual suministrado: `AI Voice Assistant — Landing Page.jpeg` (ubicado fuera de esta carpeta, junto a los adjuntos de la conversación). Es una referencia estética: landing oscura, gradiente azul inferior, navegación pequeña, tipografía centrada, esfera luminosa, CTA discreto, gran espacio negativo, contacto sobrio. No copiar marca Sandra AI, sus textos, logo, interfaz de voz ni geometría píxel a píxel.

## Concepto
`Inteligencia sobria`: confianza analítica, precisión y claridad. Evitar apariencia de cripto, gaming, neón excesivo o chatbot comercial terminado. El elemento visual central representa lectura de datos, no un asistente funcional.

## Tokens iniciales (propuestos, ajustables en planning)
- Background: `#050A19`; surface: `#0A1430`; surface raised: `#101D3B`.
- Text primary: `#F3F7FF`; text muted: `#A8B5D1`.
- Accent: `#3478FF`; accent light: `#6AC7FF`; borders: `rgba(164,193,255,.16)`.
- Glow: radial blue/cyan con opacidad baja; gradiente inferior restringido al hero o cierre.
- Tipografía: `Manrope` (fallback system-ui); pesos 400/500/600/700.
- Radius: 12px controles, 20–24px paneles; grid máximo 1120–1200px; espaciado de 8px.

## Composición
1. Header liviano con wordmark VYSIONEX, enlaces a anclas `Método` y `Contacto`, CTA opcional.
2. Hero de altura generosa: eyebrow, H1 de dos líneas, subtítulo breve, objeto abstracto y CTA.
3. Problema: texto editorial con tres beneficios sin tarjetas repetitivas.
4. Método: tres pasos con líneas finas, jerarquía clara.
5. Contacto + footer: un único cierre enfocado en conversión.

## Elemento abstracto
Preferir SVG/CSS o canvas liviano solo si justificado; esfera de líneas orbitales/ondas azules con centro vacío, sin micrófono. Mantener degradación elegante y estática cuando no haya movimiento; no depender de librerías 3D pesadas. No generar falsa visualización de datos de clientes.

## Motion
- Entrada hero: opacidad + translateY 8–16px, 450–700ms, easing suave.
- Esfera: oscilación/rotación muy lenta 18–30s, sin flashes ni saltos.
- Hover CTA: leve elevación y cambio de luminancia 150–220ms.
- Reveal por scroll: una sola vez y solo si IntersectionObserver disponible; el contenido debe seguir visible si JS falla.
- Respetar `prefers-reduced-motion: reduce`: eliminar movimiento no esencial.
- Evitar scroll hijacking, parallax agresivo, cursores personalizados y animaciones infinitas de alto consumo.

## Responsive y accesibilidad
Desktop 1440/1280, tablet 768, mobile 390/360. H1 con clamp; no scroll horizontal; tap targets ~44px; contraste WCAG AA para texto; foco visible, navegación por teclado, encabezados semánticos, labels en inputs. Probar Safari iOS y Chrome desktop. El fondo oscuro no justifica texto gris ilegible.
