# Prompts para Codex en VS Code

Copiar un prompt por vez. La aprobación de planning no está implícita. Los documentos deben estar en carpeta `docs/landing/` del repositorio (o ajustar rutas explícitamente si se guardan en otra carpeta). Referencia JPEG: colocar en `references/landing-reference.jpeg` solo si el usuario lo autoriza; si no está, usar la descripción visual del documento 02.

## Bloque 01 — PLANNING
```text
Actuá como tech lead frontend y auditor de repositorio. MODO PLANNING READ-ONLY: no edites archivos, no instales paquetes, no ejecutes comandos destructivos. Leé docs/landing/00_README.md, 01_PRODUCTO_Y_COPY.md, 02_DIRECCION_VISUAL.md, 03_ARQUITECTURA_Y_FUNCIONALIDAD.md, 04_PLAN_DE_BLOQUES.md y 06_DECISIONES_Y_QA.md. Inspeccioná estructura, package manager, scripts y estado git. Proponé el plan mínimo para BLOQUE 01: stack existente o elección fundamentada si repo vacío, archivos, tokens, riesgos, comandos de prueba y criterios de aceptación. Señalá supuestos y conflictos. No implementes. Esperá aprobación.
```
## Bloque 01 — IMPLEMENTACIÓN
```text
BLOQUE 01 APROBADO. Releé docs/landing/00_README.md, 02_DIRECCION_VISUAL.md, 03_ARQUITECTURA_Y_FUNCIONALIDAD.md, 04_PLAN_DE_BLOQUES.md y el plan aprobado en este chat. Implementá exclusivamente la base técnica acordada; preservá código existente y no toques otros proyectos. Ejecutá build/lint/tests disponibles y reportá archivos cambiados, resultados y pendientes. No publiques ni pases al bloque 02.
```

## Bloque 02 — PLANNING
```text
Actuá como director UI/UX y frontend senior. PLANNING READ-ONLY. Leé docs/landing/00_README.md, 01_PRODUCTO_Y_COPY.md, 02_DIRECCION_VISUAL.md, 03_ARQUITECTURA_Y_FUNCIONALIDAD.md, 04_PLAN_DE_BLOQUES.md, 06_DECISIONES_Y_QA.md; inspeccioná la implementación real del bloque 01 y la imagen references/landing-reference.jpeg si existe. Planeá Header + Hero: jerarquía, orb SVG/CSS, motion, responsive, accesibilidad, CTA y archivos concretos. Sin micrófono, chat ni claims SaaS disponibles. Entregá wireframe textual, criterios de aceptación y pruebas. No edites; esperá aprobación.
```
## Bloque 02 — IMPLEMENTACIÓN
```text
BLOQUE 02 APROBADO. Releé docs/landing/01_PRODUCTO_Y_COPY.md, 02_DIRECCION_VISUAL.md, 03_ARQUITECTURA_Y_FUNCIONALIDAD.md, 04_PLAN_DE_BLOQUES.md y el plan aprobado. Implementá únicamente Header + Hero y su esfera ligera, con CTA a contacto y método, mobile y prefers-reduced-motion. No agregues bibliotecas de animación sin autorización. Corré pruebas disponibles; describí diferencias con referencia, capturas solo si tu entorno puede generarlas realmente, y pendientes. No publiques.
```

## Bloque 03 — PLANNING
```text
PLANNING READ-ONLY para BLOQUE 03. Leé docs/landing/00_README.md, 01_PRODUCTO_Y_COPY.md, 02_DIRECCION_VISUAL.md, 03_ARQUITECTURA_Y_FUNCIONALIDAD.md, 04_PLAN_DE_BLOQUES.md, 06_DECISIONES_Y_QA.md. Inspeccioná lo implementado. Diseñá Problema + Método con copy honesto, tres ejes y tres pasos, sin cifras inventadas. Definí layout, archivos, animaciones opcionales, pruebas de contraste/mobile y riesgos. No modifiques nada; esperá aprobación.
```
## Bloque 03 — IMPLEMENTACIÓN
```text
BLOQUE 03 APROBADO. Releé docs/landing/01_PRODUCTO_Y_COPY.md, 02_DIRECCION_VISUAL.md, 03_ARQUITECTURA_Y_FUNCIONALIDAD.md, 04_PLAN_DE_BLOQUES.md y plan aprobado. Implementá Problema + Método sin añadir funciones de SaaS ni claims no verificados. Respetá tokens y accesibilidad. Ejecutá pruebas disponibles, reportá cambios y problemas. No publiques ni inicies bloque 04.
```

## Bloque 04 — PLANNING
```text
PLANNING READ-ONLY para BLOQUE 04. Leé docs/landing/00_README.md, 01_PRODUCTO_Y_COPY.md, 02_DIRECCION_VISUAL.md, 03_ARQUITECTURA_Y_FUNCIONALIDAD.md, 04_PLAN_DE_BLOQUES.md, 06_DECISIONES_Y_QA.md. Auditá estado real. Proponé Contacto + Footer + QA final. Primero identificá datos faltantes: email/destino, proveedor seguro, política de privacidad, consentimiento, dominio, hosting, analytics. No inventes integraciones ni simules envíos. Separá tareas realizables de bloqueos de publicación. Incluí plan de pruebas end-to-end, SEO, responsive, accesibilidad y rendimiento. No edites; esperá aprobación.
```
## Bloque 04 — IMPLEMENTACIÓN
```text
BLOQUE 04 APROBADO, solo según decisiones confirmadas en este chat. Releé docs/landing/01_PRODUCTO_Y_COPY.md, 02_DIRECCION_VISUAL.md, 03_ARQUITECTURA_Y_FUNCIONALIDAD.md, 04_PLAN_DE_BLOQUES.md, 06_DECISIONES_Y_QA.md y plan aprobado. Implementá Contacto + Footer, metadatos y QA. Si no hay destino y textos legales aprobados, no simules envío: dejá bloqueo explícito y no publiques una captación rota. Validá estados de formulario, navegación, responsive 360/390/768/1280, reduced motion, teclado, build y pruebas. Reportá evidencia, pendientes y criterio GO/NO-GO. No deploy ni cambios fuera de la landing.
```
