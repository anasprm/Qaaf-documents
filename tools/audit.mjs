// Static audit for dist/: links, assets, metadata, schema, template leaks.
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, dirname, resolve } from 'node:path';
import { site } from '../src/content.mjs';

const dist = resolve(process.argv[2] || 'dist');
const files = [];
const documents = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else files.push(full);
  }
}
await walk(dist);

const html = files.filter((f) => f.endsWith('.html'));
const problems = [];
const report = [];
const exists = async (p) => {
  try {
    return (await stat(p)).isFile();
  } catch {
    return false;
  }
};

for (const file of html) {
  const rel = file.slice(dist.length + 1).replaceAll('\\', '/');
  const src = await readFile(file, 'utf8');
  if (!/<html\b/i.test(src)) continue;
  documents.push(file);
  const add = (msg) => problems.push(`${rel}: ${msg}`);

  // template leakage
  for (const bad of ['undefined', 'NaN', '[object Object]', '${']) {
    if (src.includes(bad)) add(`contains "${bad}"`);
  }

  // structure
  const h1 = src.match(/<h1[\s>]/g) || [];
  if (h1.length !== 1) add(`expected 1 <h1>, found ${h1.length}`);

  const lang = src.match(/<html lang="([^"]+)"/)?.[1];
  const dir = src.match(/<html lang="[^"]+" dir="([^"]+)"/)?.[1];
  const isAr = rel.startsWith('ar/');
  if (lang !== (isAr ? 'ar' : 'en')) add(`html lang is ${lang}`);
  if (dir !== (isAr ? 'rtl' : 'ltr')) add(`html dir is ${dir}`);
  if (isAr && !/[\u0600-\u06FF]/.test(src)) add('Arabic page has no Arabic text');

  const title = src.match(/<title>([^<]*)<\/title>/)?.[1] || '';
  if (title.length < 15 || title.length > 75) add(`title length ${title.length}`);

  const desc = src.match(/<meta name="description" content="([^"]*)"/)?.[1] || '';
  if (desc.length < 60 || desc.length > 175) add(`description length ${desc.length}`);

  const canonical = src.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!canonical?.startsWith(`https://${site.domain}/`)) {
    add(`canonical missing or outside https://${site.domain}`);
  }

  // duplicate ids
  const ids = [...src.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) add(`duplicate ids: ${[...new Set(dupes)].join(', ')}`);

  // local links + assets
  const refs = [
    ...src.matchAll(/(?:href|src)="([^"]+)"/g),
    ...src.matchAll(/content="([^"]*)" property/g),
  ]
    .map((m) => m[1])
    .filter(
      (u) =>
        !/^(https?:|mailto:|tel:|#|data:|\/\/)/.test(u) &&
        !u.startsWith('https://wa.me') &&
        u.length > 0,
    );

  for (const ref of refs) {
    const clean = ref.split('#')[0].split('?')[0];
    if (!clean) continue;
    const base = resolve(dirname(file), clean.endsWith('/') ? `${clean}index.html` : clean);
    const ok =
      (await exists(base)) ||
      (await exists(`${base}.html`)) ||
      (await exists(join(base, 'index.html')));
    if (!ok) add(`broken reference ${ref}`);
  }

  // json-ld
  const blocks = [...src.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const block of blocks) {
    try {
      JSON.parse(block[1]);
    } catch {
      add('invalid JSON-LD');
    }
  }

  // anchors that should exist on the same page
  const anchors = [...src.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]);
  for (const anchor of new Set(anchors)) {
    if (!ids.includes(anchor)) add(`missing anchor target #${anchor}`);
  }

  report.push(`${rel} · ${title.slice(0, 48)}${title.length > 48 ? '…' : ''} · h1 ${h1.length}`);
}

// sitemap
const sitemap = await readFile(join(dist, 'sitemap.xml'), 'utf8');
const locs = (sitemap.match(/<loc>/g) || []).length;
if (locs !== 16) problems.push(`sitemap has ${locs} urls`);

console.log(report.join('\n'));
console.log(`\npages: ${documents.length}, files: ${files.length}, sitemap urls: ${locs}`);
console.log(problems.length ? `\n${problems.length} problem(s):\n- ${problems.join('\n- ')}` : '\nNo problems found.');
process.exit(problems.length ? 1 : 0);
