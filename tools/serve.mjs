// Tiny zero-dependency preview server for dist/.
//   node tools/serve.mjs            -> http://127.0.0.1:4173
//   PORT=8080 node tools/serve.mjs
import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const port = Number(process.env.PORT || 4173);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json',
  '.ico': 'image/x-icon',
};

const resolveFile = (urlPath) => {
  const clean = decodeURIComponent(urlPath.split('?')[0]);
  const safe = normalize(clean).replace(/^(\.\.[/\\])+/, '');
  const target = join(root, safe);

  if (existsSync(target) && statSync(target).isDirectory()) {
    const index = join(target, 'index.html');
    return existsSync(index) ? index : null;
  }
  if (existsSync(target) && statSync(target).isFile()) return target;

  // /about -> about.html (same rule as the Apache .htaccess)
  const html = `${target}.html`;
  if (existsSync(html)) return html;
  return null;
};

createServer((req, res) => {
  const file = resolveFile(req.url || '/');

  if (!file) {
    const notFound = join(root, '404.html');
    res.writeHead(404, { 'Content-Type': TYPES['.html'] });
    if (existsSync(notFound)) createReadStream(notFound).pipe(res);
    else res.end('Not found');
    return;
  }

  const ext = extname(file).toLowerCase();
  const revalidate = ['.html', '.css', '.js', '.xml', '.txt', '.webmanifest'].includes(ext);
  res.writeHead(200, {
    'Content-Type': TYPES[ext] || 'application/octet-stream',
    'Cache-Control': revalidate ? 'no-cache, must-revalidate' : 'public, max-age=31536000, immutable',
  });
  createReadStream(file).pipe(res);
}).listen(port, '127.0.0.1', () => {
  console.log(`Serving dist/ at http://127.0.0.1:${port}`);
});
