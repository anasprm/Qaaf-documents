// Static site generator - no dependencies.
//   node build.mjs     -> writes dist/
import { mkdir, writeFile, rm, cp } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { deflateSync } from 'node:zlib';

import { site, COPY } from './src/content.mjs';
import { document as doc, PAGES, fileFor } from './src/layout.mjs';
import * as pages from './src/pages.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, 'src');
const dist = join(here, 'dist');

const RENDER = {
  index: pages.home,
  services: pages.services,
  'visa-emirates-id': pages.visa,
  'business-setup': pages.business,
  attestation: pages.attestation,
  'typing-centre-deira': pages.deira,
  about: pages.about,
  contact: pages.contact,
};

const META = {
  index: 'home',
  services: 'services',
  'visa-emirates-id': 'visa',
  'business-setup': 'business',
  attestation: 'attestation',
  'typing-centre-deira': 'deira',
  about: 'about',
  contact: 'contact',
};

const FAQ = {
  index: (t) => t.home.faq,
  services: (t) => t.services.faq,
  'visa-emirates-id': (t) => t.visa.faq,
  'business-setup': (t) => t.business.faq,
  attestation: (t) => t.attestation.faq,
  'typing-centre-deira': (t) => t.deira.faq,
};

const siteUrl = `https://${site.domain}`;
const pagePath = (id, lang) => {
  const path = `${lang === 'ar' ? '/ar/' : '/'}${fileFor(id)}`.replace(/index\.html$/, '');
  return path === '/' ? '/' : path.replace(/\/$/, '');
};
const pageUrl = (id, lang) => `${siteUrl}${pagePath(id, lang)}`;

/* ------------------------------------------------------------- structured */

const businessLd = (lang) => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteUrl}/#business`,
  name: lang === 'ar' ? site.nameAr : site.name,
  alternateName: lang === 'ar' ? site.name : site.nameAr,
  description:
    lang === 'ar'
      ? 'مركز مرخّص لتخليص المعاملات والطباعة في هور العنز، ديرة، دبي.'
      : 'Licensed documents clearing and typing centre in Hor Al Anz, Deira, Dubai.',
  url: pageUrl('index', lang),
  telephone: [site.phoneLandline, site.phoneMobile],
  email: site.email,
  image: `${siteUrl}/assets/og-image.png`,
  priceRange: '$$',
  currenciesAccepted: 'AED',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop M10, Mezzanine, Al Habtoor Building, 257-261 Abu Hail Street',
    addressLocality: 'Hor Al Anz East, Deira, Dubai',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  hasMap: site.maps,
  areaServed: ['Hor Al Anz', 'Abu Hail', 'Deira', 'Dubai'].map((name) => ({
    '@type': 'AdministrativeArea',
    name,
  })),
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
  sameAs: [site.instagram],
  identifier: `DET ${site.licence}`,
  knowsLanguage: ['ar', 'en', 'hi', 'ur'],
});

const faqLd = (t, id) => {
  const get = FAQ[id];
  if (!get) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: get(t).map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
};

const crumbsLd = (lang, t, id) => {
  if (id === 'index') return null;
  const label = {
    services: t.nav.services,
    'visa-emirates-id': t.nav.visa,
    'business-setup': t.nav.business,
    attestation: t.nav.attestation,
    'typing-centre-deira': t.nav.deira,
    about: t.nav.about,
    contact: t.nav.contact,
  }[id];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.nav.home, item: pageUrl('index', lang) },
      { '@type': 'ListItem', position: 2, name: label, item: pageUrl(id, lang) },
    ],
  };
};

/* ------------------------------------------------------------------ build */

async function build() {
  await rm(dist, { recursive: true, force: true });
  await mkdir(join(dist, 'assets'), { recursive: true });
  await mkdir(join(dist, 'ar'), { recursive: true });

  const written = [];

  for (const lang of ['en', 'ar']) {
    const t = COPY[lang];
    for (const id of PAGES) {
      const meta = t[META[id]];
      const jsonLd = [businessLd(lang), faqLd(t, id), crumbsLd(lang, t, id)].filter(Boolean);
      const html = doc({
        lang,
        t,
        id,
        title: meta.title,
        description: meta.description,
        body: RENDER[id](lang, t),
        jsonLd,
      });
      const out = join(dist, lang === 'ar' ? 'ar' : '', fileFor(id));
      await writeFile(out, html, 'utf8');
      written.push(out);
    }

    // 404 for each language
    const nf = doc({
      lang,
      t,
      id: 'index',
      title: t.notFound.title,
      description: t.notFound.body,
      body: pages.notFound(lang, t),
      jsonLd: [],
      noindex: true,
    });
    await writeFile(join(dist, lang === 'ar' ? 'ar' : '', '404.html'), nf, 'utf8');
  }

  // assets (including the self-hosted fonts folder)
  await cp(join(src, 'assets'), join(dist, 'assets'), { recursive: true });
  await writeFile(join(dist, 'assets', 'og-image.png'), ogImage());
  
  // Copy Google Search Console verification file
  await cp(join(src, 'googledcae9b5bb9138e43.html'), join(dist, 'googledcae9b5bb9138e43.html'));

  // sitemap
  const urls = [];
  for (const id of PAGES) {
    for (const lang of ['en', 'ar']) {
      urls.push(`  <url>
    <loc>${pageUrl(id, lang)}</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <xhtml:link rel="alternate" hreflang="en-AE" href="${pageUrl(id, 'en')}"/>
    <xhtml:link rel="alternate" hreflang="ar-AE" href="${pageUrl(id, 'ar')}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl(id, 'en')}"/>
    <changefreq>monthly</changefreq>
    <priority>${id === 'index' ? '1.0' : id === 'contact' ? '0.6' : '0.8'}</priority>
  </url>`);
    }
  }
  await writeFile(
    join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`,
    'utf8',
  );

  await writeFile(
    join(dist, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
    'utf8',
  );

  await writeFile(join(dist, '.htaccess'), HTACCESS, 'utf8');
  await writeFile(join(dist, 'vercel.json'), VERCEL, 'utf8');
  await writeFile(join(dist, 'site.webmanifest'), MANIFEST, 'utf8');

  const total = written.length + 2;
  console.log(`Built ${total} pages into dist/`);
  for (const p of written) console.log('  ' + p.replace(dist, '.'));
}

/* --------------------------------------------------------------- hosting */

const HTACCESS = `# Qaaf Documents Clearing Services - Apache / Hostinger
Options -MultiViews
AddDefaultCharset UTF-8
ErrorDocument 404 /404.html

<IfModule mod_rewrite.c>
  RewriteEngine On

  # Force HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # Force the apex domain (drop www)
  RewriteCond %{HTTP_HOST} ^www\\.(.+)$ [NC]
  RewriteRule ^ https://%1%{REQUEST_URI} [L,R=301]

  # /services -> /services.html
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME}\\.html -f
  RewriteRule ^(.+?)/?$ $1.html [L]
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/plain text/xml application/javascript application/json image/svg+xml
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 6 months"
  ExpiresByType image/png "access plus 6 months"
  ExpiresByType text/html "access plus 1 hour"
</IfModule>

<IfModule mod_headers.c>
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  <FilesMatch "\\.(css|js|svg|png|woff2)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
</IfModule>
`;

const VERCEL = JSON.stringify(
  {
    trailingSlash: false,
    redirects: [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/ar/index.html', destination: '/ar', permanent: true },
    ],
    headers: [
      {
        source: '/assets/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*).html',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
        ],
      },
    ],
  },
  null,
  2,
);

const MANIFEST = JSON.stringify(
  {
    name: 'Qaaf Documents Clearing Services',
    short_name: 'Qaaf',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#C8102E',
    icons: [
      { src: '/assets/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/assets/logo-mark.png', sizes: 'any', type: 'image/png' },
    ],
  },
  null,
  2,
);

/* ------------------------------------------------------- OG image (PNG) */

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i += 1) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function pngChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function ogImage() {
  const W = 1200;
  const H = 630;
  const px = Buffer.alloc(W * H * 4);

  const clamp = (v) => Math.max(0, Math.min(1, v));
  const smooth = (edge, v) => clamp((edge - v) / 1.5 + 0.5);

  const blend = (x, y, r, g, b, a) => {
    if (a <= 0 || x < 0 || y < 0 || x >= W || y >= H) return;
    const i = (y * W + x) * 4;
    const ia = 1 - a;
    px[i] = Math.round(px[i] * ia + r * a);
    px[i + 1] = Math.round(px[i + 1] * ia + g * a);
    px[i + 2] = Math.round(px[i + 2] * ia + b * a);
    px[i + 3] = 255;
  };

  // background: soft white with a faint red wash
  for (let y = 0; y < H; y += 1) {
    for (let x = 0; x < W; x += 1) {
      const ty = y / H;
      const tx = x / W;
      const glow = Math.max(0, 1 - Math.hypot(tx - 0.18, ty - 0.1) * 1.6);
      const r = Math.round(255 - glow * 6);
      const g = Math.round(252 - glow * 12 - ty * 3);
      const b = Math.round(251 - glow * 12 - ty * 2);
      const i = (y * W + x) * 4;
      px[i] = r;
      px[i + 1] = g;
      px[i + 2] = b;
      px[i + 3] = 255;
    }
  }

  const cx = 382;
  const cy = 315;
  const R = 158;
  const T = 30;

  // Q ring
  for (let y = cy - R - T; y <= cy + R + T; y += 1) {
    for (let x = cx - R - T; x <= cx + R + T; x += 1) {
      const d = Math.abs(Math.hypot(x - cx, y - cy) - R);
      const a = smooth(T / 2, d);
      if (a > 0) blend(x, y, 200, 16, 46, a);
    }
  }

  // Q tail
  const tail = (t) => ({ x: cx + R * 0.72 + 150 * t, y: cy + R * 0.72 + 120 * t });
  for (let s = 0; s <= 1; s += 0.002) {
    const p = tail(s);
    for (let oy = -18; oy <= 18; oy += 1) {
      for (let ox = -18; ox <= 18; ox += 1) {
        const a = smooth(15, Math.hypot(ox, oy));
        if (a > 0) blend(Math.round(p.x + ox), Math.round(p.y + oy), 200, 16, 46, a);
      }
    }
  }

  // ink dot inside the ring
  for (let y = cy - 30; y <= cy + 30; y += 1) {
    for (let x = cx - 30; x <= cx + 30; x += 1) {
      const a = smooth(28, Math.hypot(x - cx, y - cy));
      if (a > 0) blend(x, y, 26, 20, 22, a);
    }
  }

  // type rules on the right
  const rules = [
    { y: 268, w: 430, o: 0.95 },
    { y: 322, w: 350, o: 0.55 },
    { y: 376, w: 250, o: 0.35 },
  ];
  for (const rule of rules) {
    for (let y = rule.y - 7; y <= rule.y + 7; y += 1) {
      for (let x = 700; x < 700 + rule.w; x += 1) {
        const edge = Math.min(smooth(700, x), smooth(700 + rule.w, x));
        const ay = smooth(6.5, Math.abs(y - rule.y));
        blend(x, y, 200, 16, 46, edge * ay * rule.o);
      }
    }
  }

  // thin frame
  for (let x = 48; x < W - 48; x += 1) {
    blend(x, 48, 200, 16, 46, 0.45);
    blend(x, H - 48, 200, 16, 46, 0.45);
  }
  for (let y = 48; y < H - 48; y += 1) {
    blend(48, y, 200, 16, 46, 0.45);
    blend(W - 48, y, 200, 16, 46, 0.45);
  }

  // scanlines
  const raw = Buffer.alloc((W * 4 + 1) * H);
  for (let y = 0; y < H; y += 1) {
    raw[y * (W * 4 + 1)] = 0;
    px.copy(raw, y * (W * 4 + 1) + 1, y * W * 4, (y + 1) * W * 4);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(W, 0);
  ihdr.writeUInt32BE(H, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', deflateSync(raw, { level: 9 })),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);
}

await build();

