# Arquitectura y funcionalidad

## Estrategia
Landing estática/SSR ligera, sin autenticación, dashboard, backend de IA ni integración con prototipo local. Elegir tecnología según repositorio inspeccionado. Si repo vacío: preferencia inicial Astro + TypeScript + CSS modular/global simple; no introducir Next.js, Redux, CMS, bases de datos o Framer Motion sin justificación. Si existe stack, preservarlo.

## Árbol conceptual
`src/pages/index` → `Header`, `Hero`, `ProblemSection`, `MethodSection`, `ContactSection`, `Footer`; `styles/tokens`, `styles/global`; `components/AbstractOrb` (SVG/CSS). Estructura exacta según framework y convenciones existentes.

## Comportamiento
- Header: enlaces internos reales y navegación responsive accesible.
- CTA principal: desplaza a contacto con foco manejado de forma usable; sin modal innecesario.
- CTA secundario: sección método.
- Formulario: validación de campos, mensajes de error, estado de envío, antispam y destino configurado. **No implementar un POST simulado ni exponer claves en frontend.** Si no hay proveedor/backend elegido, construir interfaz marcada no operativa en entorno local, y no publicar CTA que simule entrega; alternativa mailto solo tras aprobación y configuración de email real.
- Analytics: eventos definidos `cta_primary_click`, `contact_submit_success` solo después de envío confirmado; no instalar trackers sin decisión sobre privacidad/consentimiento.
- SEO: título/descripción honestos, OG básico si existe imagen autorizada, idioma `es-AR`, robots/sitemap según despliegue; no indexar staging si aplica.

## Privacidad y seguridad
No guardar datos de contacto en localStorage; evitar datos financieros sensibles; consentimiento no premarcado; textos legales y tratamiento de datos a revisar antes de captación real. No inventar aviso legal o cumplimiento. Evitar dependencias y scripts externos innecesarios. Secretos exclusivamente server-side; CSP razonable según hosting.

## Rendimiento
Objetivo indicativo Lighthouse >=90 performance/accessibility/best practices en mobile, sujeto a entorno; LCP <2.5s en condiciones de laboratorio razonables; CLS <0.1. Preferir SVG y CSS frente a video pesado. Optimizar fuentes y assets.

## Fuera de alcance
Login, voz, chat IA, dashboard, pagos, SaaS de suscripción, análisis automático, comparador de competidores, generador de presupuestos automático, agentes, integración con VYSIONEX BRAIN. Son visión futura, no funcionalidades de landing V1.
