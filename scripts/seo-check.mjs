#!/usr/bin/env node
// Verificación SEO contra un sitio levantado en local (o cualquier BASE_URL).
//
//   npm run build && npm start   # en otra terminal
//   node scripts/seo-check.mjs [http://localhost:3000]
//
// Recorre cada <loc> del sitemap pidiendo la misma ruta a BASE_URL y revisa:
// status 200, un solo <h1>, canonical = URL www propia, hreflang es/en/x-default
// con www, title <= 60, description 140–160, og:title propio y JSON-LD válido.
// También revisa robots.txt, sitemap.xml y la redirección 301 de /Blog/*.
// Sale con código 1 si algo falla.

const BASE_URL = (process.argv[2] || process.env.BASE_URL || 'http://localhost:3000').replace(/\/+$/, '');
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.techbox.cr').replace(/\/+$/, '');
const NON_WWW = SITE_URL.replace('://www.', '://');

const TITLE_MAX = 60;
const DESC_MIN = 140;
const DESC_MAX = 160;

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

const norm = (u) => (u ? u.replace(/\/+$/, '') : u);

function attr(tag, name) {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`, 'i'));
  return m ? decode(m[1]) : undefined;
}

function metaContent(html, key, value) {
  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    if (attr(tag, key) === value) return attr(tag, 'content');
  }
  return undefined;
}

function links(html, rel) {
  return (html.match(/<link\b[^>]*>/gi) ?? []).filter((tag) => attr(tag, 'rel') === rel);
}

async function checkPage(loc) {
  const path = loc.slice(SITE_URL.length) || '/';
  const res = await fetch(BASE_URL + path, { redirect: 'manual' });
  const html = await res.text();
  const head = html.split('</head>')[0];
  const problems = [];

  if (res.status !== 200) problems.push(`status ${res.status}`);

  const h1 = (html.match(/<h1[\s>]/gi) ?? []).length;
  if (h1 !== 1) problems.push(`${h1} h1`);

  const canonical = links(head, 'canonical').map((t) => attr(t, 'href'));
  if (canonical.length !== 1 || norm(canonical[0]) !== norm(loc))
    problems.push(`canonical ${canonical.join(',') || '—'}`);

  const alternates = Object.fromEntries(
    links(head, 'alternate')
      .filter((t) => attr(t, 'hreflang'))
      .map((t) => [attr(t, 'hreflang'), attr(t, 'href')]),
  );
  for (const lang of ['es', 'en', 'x-default']) {
    if (!alternates[lang]?.startsWith(SITE_URL)) problems.push(`hreflang ${lang} ${alternates[lang] ?? '—'}`);
  }
  if (!Object.values(alternates).some((u) => norm(u) === norm(loc))) problems.push('hreflang sin la propia URL');

  const title = decode(head.match(/<title>([^<]*)<\/title>/i)?.[1] ?? '');
  if (!title || title.length > TITLE_MAX) problems.push(`title ${title.length}`);

  const description = metaContent(head, 'name', 'description') ?? '';
  if (description.length < DESC_MIN || description.length > DESC_MAX)
    problems.push(`description ${description.length}`);

  const ogTitle = metaContent(head, 'property', 'og:title');
  if (ogTitle !== title) problems.push(`og:title "${ogTitle ?? '—'}"`);
  const ogUrl = metaContent(head, 'property', 'og:url');
  if (norm(ogUrl) !== norm(loc)) problems.push(`og:url ${ogUrl ?? '—'}`);

  if (/<meta\b[^>]*name="keywords"/i.test(html)) problems.push('meta keywords');

  const scripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  const types = [];
  let jsonLdOk = scripts.length > 0;
  for (const [, body] of scripts) {
    try {
      const data = JSON.parse(body);
      const nodes = [data, ...(data['@graph'] ?? [])];
      for (const n of nodes) if (n['@type']) types.push(n['@type']);
    } catch {
      jsonLdOk = false;
    }
  }
  if (!jsonLdOk) problems.push('JSON-LD inválido o ausente');
  if (JSON.stringify(scripts.map((s) => s[1])).includes(NON_WWW + '"') || html.includes(NON_WWW + '/'))
    problems.push('URL sin www en HTML');

  return {
    path,
    status: res.status,
    h1,
    canonical: canonical.length === 1 && norm(canonical[0]) === norm(loc),
    hreflang: ['es', 'en', 'x-default'].every((l) => alternates[l]?.startsWith(SITE_URL)),
    titleLen: title.length,
    descLen: description.length,
    ogTitle: ogTitle === title,
    jsonLd: jsonLdOk ? [...new Set(types)].join('+') : 'ERROR',
    problems,
  };
}

async function main() {
  const failures = [];

  const sitemap = await (await fetch(`${BASE_URL}/sitemap.xml`)).text();
  const robots = await (await fetch(`${BASE_URL}/robots.txt`)).text();
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => decode(m[1]));

  for (const [name, body] of [['sitemap.xml', sitemap], ['robots.txt', robots]]) {
    if (body.includes(NON_WWW)) failures.push(`${name} contiene ${NON_WWW}`);
  }
  if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) failures.push('robots.txt sin Sitemap www');
  if (!/Allow: \/\s/.test(robots)) failures.push('robots.txt sin "Allow: /"');
  if (/^Host:/im.test(robots)) failures.push('robots.txt con Host:');
  const hreflangs = [...sitemap.matchAll(/hreflang="[^"]+"\s+href="([^"]+)"/g)].map((m) => m[1]);
  if (hreflangs.some((u) => !u.startsWith(SITE_URL))) failures.push('sitemap con hreflang sin www');
  if (locs.some((u) => !u.startsWith(SITE_URL))) failures.push('sitemap con <loc> sin www');

  const rows = [];
  for (const loc of locs) {
    const r = await checkPage(loc);
    rows.push(r);
    for (const p of r.problems) failures.push(`${r.path}: ${p}`);
  }

  const redirect = await fetch(`${BASE_URL}/Blog/crm-gestion-clientes-pymes`, { redirect: 'manual' });
  const location = redirect.headers.get('location') ?? '';
  const redirectOk = redirect.status === 301 && new URL(location, BASE_URL).pathname === '/blog';
  if (!redirectOk) failures.push(`/Blog/crm-gestion-clientes-pymes → ${redirect.status} ${location}`);

  const yes = (b) => (b ? '✅' : '❌');
  console.log('| URL | Status | H1 | Canonical | hreflang | Title | Desc | og:title | JSON-LD |');
  console.log('|---|---|---|---|---|---|---|---|---|');
  for (const r of rows) {
    console.log(
      `| ${r.path} | ${r.status} | ${r.h1} | ${yes(r.canonical)} | ${yes(r.hreflang)} | ${r.titleLen} | ${r.descLen} | ${yes(r.ogTitle)} | ${r.jsonLd} |`,
    );
  }
  console.log();
  console.log(`URLs en sitemap: ${locs.length}`);
  console.log(`/Blog/crm-gestion-clientes-pymes → ${redirect.status} ${location} ${yes(redirectOk)}`);
  console.log(`robots.txt / sitemap.xml sin "${NON_WWW}": ${yes(!sitemap.includes(NON_WWW) && !robots.includes(NON_WWW))}`);

  if (failures.length) {
    console.log(`\n${failures.length} problema(s):`);
    for (const f of failures) console.log(`- ${f}`);
    process.exit(1);
  }
  console.log('\nTodo OK.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
