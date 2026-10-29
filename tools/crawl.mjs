// Crawl dist HTML: local refs resolve, every page returns 200 from the local server.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { get } from 'node:http';

const files = [];
(function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (full.endsWith('.html')) files.push(full);
  }
})('dist');

let bad = 0;
for (const file of files) {
  const rel = file.slice(5).replace(/\\/g, '/');
  const src = readFileSync(file, 'utf8');
  const refs = [...src.matchAll(/(?:href|src)="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((u) => !/^(https?:|mailto:|tel:|#|data:)/.test(u));

  for (const ref of refs) {
    const clean = ref.split('#')[0].split('?')[0];
    if (!clean) continue;
    if (!existsSync(resolve(dirname(file), clean))) {
      console.log('MISSING', rel, '->', ref);
      bad += 1;
    }
  }

  const res = await new Promise((done, fail) => {
    get({ host: '127.0.0.1', port: 4173, path: `/${rel}`, headers: { connection: 'close' } }, (r) => {
      r.resume();
      done(r.statusCode);
    }).on('error', fail);
  });
  if (res !== 200) {
    console.log('HTTP', res, rel);
    bad += 1;
  }
}

console.log(bad ? `problems: ${bad}` : `all local refs and pages OK (${files.length} pages)`);
