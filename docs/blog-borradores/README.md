# Borradores del blog (no publicados)

Versiones ampliadas (1.200–1.500 palabras) de los 4 posts de `src/data/blog.ts`,
en español (voseo) y en inglés. **No se publican**: el sitio sigue leyendo solo
`src/data/blog.ts`. Están aquí para revisión.

| Post (id) | ES | EN |
|---|---|---|
| why-smbs-should-automate-processes | [es](es/por-que-una-pyme-deberia-automatizar-sus-procesos.md) | [en](en/why-smbs-should-automate-processes.md) |
| cloud-benefits-without-complications | [es](es/cloud-para-pequenas-empresas-beneficios-sin-complicarse.md) | [en](en/cloud-benefits-without-complications.md) |
| basic-cybersecurity-for-smbs | [es](es/ciberseguridad-basica-para-pymes-en-costa-rica.md) | [en](en/basic-cybersecurity-for-smbs-in-costa-rica.md) |
| how-data-reports-improve-decisions | [es](es/como-los-reportes-de-datos-ayudan-a-tomar-mejores-decisiones.md) | [en](en/how-data-reports-improve-decisions.md) |

## Antes de publicar

1. Completar o eliminar cada marcador `[DATO: …]` (`grep -rn "\[DATO" docs/blog-borradores`).
   No se inventaron estadísticas, clientes ni casos: los ejemplos están
   marcados como escenarios ilustrativos.
2. Pasar el contenido a `src/data/blog.ts`. Hoy `content` es una lista de
   párrafos: para los subtítulos H2/H3, las listas y las preguntas frecuentes
   hace falta soportar ese formato en el render del post (por ejemplo, bloques
   tipados o Markdown).
3. Poner `updated: 'AAAA-MM-DD'` en el post para que `dateModified` (JSON-LD) y
   `lastmod` (sitemap) reflejen la edición. El tiempo de lectura se recalcula solo.
4. Correr `npm run build && npm start` y `npm run seo:check`.
