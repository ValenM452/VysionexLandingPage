# VYSIONEX Landing V1 — Índice operativo
Fecha de referencia: 2026-10-17. Proyecto separado de LAVORO y del runtime VYSIONEX existente.

## Objetivo
Landing de captación para una oferta inicial de diagnóstico empresarial asistido por IA; **no** presentar una plataforma SaaS disponible. Conversión primaria: solicitud de diagnóstico / conversación comercial.

## Documentos fuente
- `01_PRODUCTO_Y_COPY.md`: negocio, público, propuesta y copy provisional.
- `02_DIRECCION_VISUAL.md`: sistema visual, motion y responsive.
- `03_ARQUITECTURA_Y_FUNCIONALIDAD.md`: stack, componentes, comportamiento y seguridad.
- `04_PLAN_DE_BLOQUES.md`: secuencia, gates y criterios de aceptación.
- `05_PROMPTS_CODEX.md`: prompts listos para planificación e implementación por bloque.
- `06_DECISIONES_Y_QA.md`: decisiones pendientes, validación y control de calidad.

## Regla de autoridad
Estos archivos describen la landing, no autorizan cambios al runtime, Master Vault, repositorios existentes ni despliegues. Si el repositorio ya contiene código, inspeccionarlo antes de seleccionar stack. Ante conflicto con la realidad técnica, registrar discrepancia y solicitar aprobación. No inventar funcionalidades, clientes, métricas ni integraciones.

## Flujo
Planning de bloque → reporte de plan y riesgos → aprobación humana → implementación → pruebas → revisión → siguiente bloque. Codex debe leer los archivos indicados en cada prompt.
