# Plan de cuatro bloques

## Protocolo común
Antes de cada bloque: planning READ-ONLY, sin editar archivos ni instalar paquetes; inspección de repo y dependencias; plan concreto, riesgos, archivos a modificar, comandos de test y criterios de aceptación. Esperar autorización explícita. Durante implementación: cambios mínimos dentro del alcance, ejecutar tests disponibles, reportar archivos y resultados; no publicar ni tocar proyectos ajenos.

## Bloque 01 — Base
Alcance: verificar repositorio, stack, estructura mínima, tokens, reset, fuentes, metadata inicial, shell responsive.
Aceptación: build e
jecuta, estructura clara, ninguna dependencia pesada injustificada, página inicial sin errores, variables CSS documentadas.

## Bloque 02 — Header + Hero
Alcance: navegación, tipografía, hero, CTA a ancla, esfera SVG/CSS, movimiento reducido.
Aceptación: correspondencia con dirección visual sin copiar referencia; desktop/mobile; links, teclado y reduced-motion funcionan; no micrófono ni promesa de voz.

## Bloque 03 — Problema + Método
Alcance: sección problema con tres ejes y método de tres pasos; reveals opcionales ligeros.
Aceptación: copy veraz, sin afirmaciones no comprobadas, jerarquía clara, sin repetición visual innecesaria; responsive y accesible.

## Bloque 04 — Contacto + Footer + QA
Alcance: contacto con destino aprobado, validación, estados reales, footer, SEO, QA de navegación, visual, responsive, rendimiento y accesibilidad.
Aceptación: envío end-to-end confirmado **o** estado explícito de bloqueo sin fingir funcionamiento; revisión de consentimiento/privacidad; build y pruebas; reporte de pendientes; sin deploy sin permiso.

## Gates
No iniciar bloque N+1 sin revisar N. No agregar nuevos bloques salvo riesgo técnico justificado. Si hay decisiones de negocio sin resolver, construir partes independientes y registrar bloqueo en `06_DECISIONES_Y_QA.md`.
