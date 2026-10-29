import { readFileSync } from 'node:fs';

const read = (p) => readFileSync(p, 'utf8');
const uniq = (arr) => [...new Set(arr)];

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
  canon.push(...html.match(/rel="canonical" href="([^"]+)"/g).map((m) => m.match(/href="([^"]+)/)[1]));
  hreflang.push(...html.match(/hreflang="[^"]+" href="([^"]+)"/g).map((m) => m.match(/href="([^"]+)/)[1]));
  if (!/<html lang="(en|ar)" dir="(ltr|rtl)">/.test(html)) dirs.push(p);
}

const sitemap = read('dist/sitemap.xml');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const missing = canon.filter((c) => !locs.includes(c));
console.log('canonicals:', canon.length, 'sitemap urls:', locs.length);
console.log('canonical missing from sitemap:', missing.length ? missing : 'none');
console.log('hreflang sample:', uniq(hreflang).slice(0, 4));
console.log('bad html attrs:', dirs.length ? dirs : 'none');
console.log('ar home canonical:', canon.find((c) => c.includes('/ar')));
console.log('trailing-slash urls in sitemap:', locs.filter((u) => u.endsWith('/') && u !== 'https://qaafdxb.ae/').length);
