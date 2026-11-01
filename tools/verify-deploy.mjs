import { readFileSync } from 'node:fs';
import { site } from '../src/content.mjs';

const read = (p) => readFileSync(p, 'utf8');
const uniq = (arr) => [...new Set(arr)];
const origin = `https://${site.domain}`;
const problems = [];

JSON.parse(read('vercel.json'));
JSON.parse(read('dist/vercel.json'));
JSON.parse(read('dist/site.webmanifest'));
console.log('json: ok');

const pages = ['index.html', 'services.html', 'ar/index.html', 'ar/services.html'];
const canon = [];
const hreflang = [];
const dirs = [];

for (const p of pages) {
  const html = read(`dist/${p}`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!canonical) problems.push(`${p}: canonical missing`);
  else canon.push(canonical);
  hreflang.push(...[...html.matchAll(/hreflang="[^"]+" href="([^"]+)"/g)].map((m) => m[1]));
  if (!/<html lang="(en|ar)" dir="(ltr|rtl)">/.test(html)) dirs.push(p);
}

const sitemap = read('dist/sitemap.xml');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const missing = canon.filter((c) => !locs.includes(c));
if (missing.length) problems.push(`canonical missing from sitemap: ${missing.join(', ')}`);
if (locs.length !== 16) problems.push(`expected 16 sitemap URLs, found ${locs.length}`);
for (const url of [...canon, ...hreflang, ...locs]) {
  if (!url.startsWith(`${origin}/`)) problems.push(`URL outside configured domain: ${url}`);
}
const trailingSlash = locs.filter((url) => {
  const path = new URL(url).pathname;
  return path !== '/' && path.endsWith('/');
});
if (trailingSlash.length) problems.push(`unexpected trailing-slash sitemap URLs: ${trailingSlash.join(', ')}`);
if (dirs.length) problems.push(`invalid language or direction attributes: ${dirs.join(', ')}`);

console.log('canonicals:', canon.length, 'sitemap urls:', locs.length);
console.log('canonical missing from sitemap:', missing.length ? missing : 'none');
console.log('hreflang sample:', uniq(hreflang).slice(0, 4));
console.log('bad html attrs:', dirs.length ? dirs : 'none');
console.log('ar home canonical:', canon.find((c) => c.includes('/ar')));
console.log('unexpected trailing-slash URLs:', trailingSlash.length);
if (problems.length) {
  console.error('Deployment verification failed:\n- ' + problems.join('\n- '));
  process.exitCode = 1;
} else {
  console.log('deployment metadata is consistent with', origin);
}
