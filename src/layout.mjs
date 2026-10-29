// Layout: document shell, header, footer, shared components.
import { site, wa } from './content.mjs';

export const PAGES = [
  'index',
  'services',
  'visa-emirates-id',
  'business-setup',
  'attestation',
  'typing-centre-deira',
  'about',
  'contact',
];

export const NAV = [
  { key: 'services', id: 'services' },
  { key: 'visa', id: 'visa-emirates-id' },
  { key: 'business', id: 'business-setup' },
  { key: 'attestation', id: 'attestation' },
  { key: 'about', id: 'about' },
  { key: 'contact', id: 'contact' },
];

export const fileFor = (id) => (id === 'index' ? 'index.html' : `${id}.html`);

/** Link to a page in a given language, relative to the current page's folder. */
export function href(id, lang, currentLang) {
  const home = id === 'index';
  if (lang === currentLang) return home ? './' : fileFor(id);
  if (lang === 'ar') return home ? 'ar' : `ar/${fileFor(id)}`;
  return home ? '../' : `../${fileFor(id)}`;
}

export const asset = (lang, path) => (lang === 'ar' ? `../assets/${path}` : `assets/${path}`);

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/* ------------------------------------------------------------------ icons */

const ICONS = {
  whatsapp:
    '<path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.17 0 4.2.84 5.73 2.38a8.06 8.06 0 0 1 2.38 5.73c0 4.47-3.64 8.11-8.12 8.11a8.2 8.2 0 0 1-4.15-1.13l-.3-.18-3.12.82.83-3.04-.19-.31a8.06 8.06 0 0 1-1.24-4.28c0-4.47 3.64-8.1 8.18-8.1Zm-3.3 3.63c-.16 0-.42.06-.64.3-.22.25-.84.83-.84 2.02 0 1.19.86 2.34.98 2.5.12.16 1.66 2.65 4.1 3.61 2.03.8 2.44.64 2.88.6.44-.04 1.42-.58 1.62-1.15.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46Z"/>',
  phone:
    '<path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1l-2.3 2.3Z"/>',
  pin: '<path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"/>',
  clock:
    '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 1.8a8.2 8.2 0 1 1 0 16.4 8.2 8.2 0 0 1 0-16.4ZM11 6v6.6l5 3 .9-1.5-4.1-2.5V6H11Z"/>',
  mail: '<path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.4L4.4 7v10.2h15.2V7L12 12.4Z"/>',
  check: '<path d="M9.6 16.8 5 12.2l1.4-1.4 3.2 3.2 7.9-7.9L19 7.5l-9.4 9.3Z"/>',
  arrow: '<path d="M13.2 5.6 11.8 7l4.1 4.1H4v2h11.9L11.8 17l1.4 1.4L20 11.6l-6.8-6Z"/>',
  star: '<path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5 6.1 20.6l1.2-6.5L2.5 9.5l6.6-.9 2.9-6Z"/>',
  passport:
    '<path d="M6 2h11a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm5.5 4.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Zm0 1.6a2.2 2.2 0 0 1 1.5.6 3.6 3.6 0 0 1-3 0 2.2 2.2 0 0 1 1.5-.6Zm-1.8 2.2a3.6 3.6 0 0 0 3.6 0 2.2 2.2 0 0 1-3.6 0Zm1.8 2.2a2.2 2.2 0 0 1-1.5-.6 3.6 3.6 0 0 1 3 0 2.2 2.2 0 0 1-1.5.6ZM8 16.6h8v1.6H8v-1.6Z"/>',
  id: '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm7 3.2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-6 9.6c.6-1.9 2.6-3 6-3s5.4 1.1 6 3H5Zm13-8.4h3.2V7.8h-3.2v1.6Zm0 3.2h3.2V10h-3.2v1.6Zm0 3.2h3.2v-1.6h-3.2v1.6Z"/>',
  briefcase:
    '<path d="M9 3h6a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3V5a2 2 0 0 1 2-2Zm0 2v2h6V5H9Z"/>',
  building:
    '<path d="M4 2h10v20H4V2Zm2 2v3h2V4H6Zm4 0v3h2V4h-2ZM6 9v3h2V9H6Zm4 0v3h2V9h-2ZM6 14v3h2v-3H6Zm4 0v3h2v-3h-2ZM6 19v1h2v-1H6Zm4 0v1h2v-1h-2Zm6-9h4v12h-4V10Zm2 2v2h-1v-2h1Zm0 4v2h-1v-2h1Z"/>',
  stamp:
    '<path d="M9 2h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v2h4a3 3 0 0 1 3 3v3H3v-3a3 3 0 0 1 3-3h4v-2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm-6 18h18v2H3v-2Z"/>',
  folder:
    '<path d="M3 4h6l2 2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/>',
  copy: '<path d="M8 2h9a2 2 0 0 1 2 2v11h-2V4H8V2Zm-3 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v12h9V8H5Z"/>',
  instagram:
    '<path d="M8 2h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6Zm0 1.8A4.2 4.2 0 0 0 3.8 8v8A4.2 4.2 0 0 0 8 20.2h8a4.2 4.2 0 0 0 4.2-4.2V8A4.2 4.2 0 0 0 16 3.8H8Zm4 3.2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm5.4-3.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"/>',
};

export const icon = (name, cls = 'ico') =>
  `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g fill="currentColor">${ICONS[name] || ''}</g></svg>`;

const stars = `<span class="stars" aria-hidden="true">${icon('star')}${icon('star')}${icon('star')}${icon('star')}${icon('star')}</span>`;

/* ------------------------------------------------------------------- logo */

export const logo = (lang, t) => `
<a class="brand" href="${href('index', lang, lang)}" aria-label="${esc(site.name)}">
  <span class="brand-mark" aria-hidden="true">
    <img src="${asset(lang, 'logo-mark.png')}" alt="" width="46" height="52" decoding="async">
  </span>
  <span class="brand-text">
    <span class="brand-name">${lang === 'ar' ? 'قاف' : 'QAAF'}</span>
    <span class="brand-sub">${lang === 'ar' ? 'لتخليص المعاملات' : 'Documents Clearing'}</span>
  </span>
</a>`;

/* ----------------------------------------------------------------- header */

export const header = (active, lang, t) => {
  const navLinks = NAV.map(
    (item) => `<li><a href="${href(item.id, lang, lang)}"${
      active === item.id ? ' aria-current="page"' : ''
    }>${t.nav[item.key]}</a></li>`,
  ).join('');

  return `
<a class="skip-link" href="#main">${t.ui.skip}</a>
<header class="site-header">
  <div class="wrap header-inner">
    ${logo(lang, t)}
    <nav class="nav" id="nav" aria-label="${lang === 'ar' ? 'التنقل الرئيسي' : 'Main'}">
      <ul>${navLinks}</ul>
    </nav>
    <div class="header-actions">
      <a class="lang-switch" href="${href(active, lang === 'en' ? 'ar' : 'en', lang)}" hreflang="${
        lang === 'en' ? 'ar' : 'en'
      }" lang="${lang === 'en' ? 'ar' : 'en'}">${t.switchLabel}</a>
      <a class="btn btn-primary btn-sm header-cta" href="${wa(
        lang === 'ar'
          ? 'مرحباً قاف، أحتاج إلى طباعة مستند.'
          : 'Hello Qaaf, I need a document typed.',
      )}" target="_blank" rel="noopener" aria-label="${t.ui.whatsapp}">
        ${icon('whatsapp', 'ico ico-sm')}<span>${t.ui.whatsapp}</span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav" aria-label="${
        t.nav.menu
      }">
        <span></span><span></span>
      </button>
    </div>
  </div>
</header>`;
};

/* ----------------------------------------------------------------- footer */

export const footer = (lang, t) => {
  const year = new Date().getFullYear();
  const serviceLinks = [
    ['visa-emirates-id', t.nav.visa],
    ['business-setup', t.nav.business],
    ['attestation', t.nav.attestation],
    ['services', t.ui.allServices],
  ]
    .map(([id, label]) => `<li><a href="${href(id, lang, lang)}">${label}</a></li>`)
    .join('');
  const companyLinks = [
    ['about', t.nav.about],
    ['typing-centre-deira', t.nav.deira],
    ['contact', t.nav.contact],
    ['index', t.nav.home],
  ]
    .map(([id, label]) => `<li><a href="${href(id, lang, lang)}">${label}</a></li>`)
    .join('');

  return `
<footer class="site-footer">
  <div class="wrap footer-grid">
    <div class="footer-brand">
      ${logo(lang, t)}
      <p>${t.footer.blurb}</p>
      <p class="footer-legal">${t.footer.legal}</p>
      <div class="footer-social">
        <a href="${site.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon(
          'instagram',
        )}</a>
        <a href="${wa()}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon('whatsapp')}</a>
        <a href="tel:${site.phoneLandlineHref}" aria-label="${t.ui.phone}">${icon('phone')}</a>
      </div>
    </div>
    <div>
      <h2 class="footer-title">${t.footer.servicesTitle}</h2>
      <ul class="footer-links">${serviceLinks}</ul>
    </div>
    <div>
      <h2 class="footer-title">${t.footer.companyTitle}</h2>
      <ul class="footer-links">${companyLinks}</ul>
    </div>
    <div>
      <h2 class="footer-title">${t.footer.contactTitle}</h2>
      <ul class="footer-contact">
        <li>${icon('pin')}<span>${t.about.facts[6][1]}</span></li>
        <li>${icon('phone')}<a href="tel:${site.phoneLandlineHref}" dir="ltr">${site.phoneLandline}</a></li>
        <li>${icon('whatsapp')}<a href="tel:${site.phoneMobileHref}" dir="ltr">${site.phoneMobile}</a></li>
        <li>${icon('mail')}<a href="mailto:${site.email}" dir="ltr">${site.email}</a></li>
        <li>${icon('clock')}<span>${t.contact.hours.map(([d, h]) => `${d}: ${h}`).join(' · ')}</span></li>
      </ul>
    </div>
  </div>
  <div class="wrap footer-bottom">
    <p class="footer-disclaimer">${t.footer.disclaimer}</p>
    <p class="footer-copy">© ${year} ${lang === 'ar' ? site.nameAr : site.name}. ${t.footer.rights}</p>
  </div>
</footer>`;
};

/* --------------------------------------------------------------- floating */

export const floatCta = (lang, t) => `
<div class="float-cta">
  <a class="float-btn float-call" href="tel:${site.phoneLandlineHref}" aria-label="${t.ui.callNow}">
    ${icon('phone')}
  </a>
  <a class="float-btn float-wa" href="${wa(
    lang === 'ar' ? 'مرحباً قاف، أحتاج إلى عرض سعر.' : 'Hello Qaaf, I would like a quote.',
  )}" target="_blank" rel="noopener" aria-label="${t.ui.whatsappQuote}">
    ${icon('whatsapp')}<span>${t.ui.whatsappQuote}</span>
  </a>
</div>`;

/* ------------------------------------------------------------------ shell */

export function document({ lang, t, id, title, description, canonical, body, jsonLd = [], noindex = false }) {
  const prefix = lang === 'ar' ? '../' : '';
  const siteUrl = `https://${site.domain}`;
  const pathFor = (language) => {
    const path = `${language === 'ar' ? '/ar/' : '/'}${fileFor(id)}`.replace(/index\.html$/, '');
    return `${siteUrl}${path === '/' ? '/' : path.replace(/\/$/, '')}`;
  };
  const canonicalUrl = pathFor(lang);

  return `<!DOCTYPE html>
<html lang="${t.htmlLang}" dir="${t.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${noindex ? '<meta name="robots" content="noindex">\n' : ''}<link rel="canonical" href="${canonicalUrl}"><link rel="alternate" hreflang="en-AE" href="${pathFor('en')}">
<link rel="alternate" hreflang="ar-AE" href="${pathFor('ar')}">
<link rel="alternate" hreflang="x-default" href="${pathFor('en')}">
<meta name="theme-color" content="#C8102E">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:locale" content="${t.locale}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:image" content="${siteUrl}/assets/og-image.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<link rel="icon" href="${prefix}assets/icon-512.png" type="image/png" sizes="512x512">
<link rel="apple-touch-icon" href="${prefix}assets/icon-512.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script>
  (function () {
    var root = document.documentElement;
    root.classList.add('js');
    try {
      if (!document.referrer) return;
      if (new URL(document.referrer).origin !== location.origin) return;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      root.classList.add('is-entering');
    } catch (error) {}
  })();
</script>
<link rel="stylesheet" href="${prefix}assets/styles.css">
${jsonLd.map((obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`).join('\n')}
</head>
<body class="page-${id}">
${header(id, lang, t)}
<main id="main">
${body}
</main>
${footer(lang, t)}
${floatCta(lang, t)}
<div class="page-veil" aria-hidden="true"></div>
<script src="${prefix}assets/main.js" defer></script>
</body>
</html>`;
}

/* ------------------------------------------------------------ shared parts */

export const sectionHead = (eyebrow, title, lede = '') => `
<div class="section-head">
  ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
  <h2>${title}</h2>
  ${lede ? `<p class="section-lede">${lede}</p>` : ''}
</div>`;

export const ctaBand = (t, lang) => `
<section class="cta-band">
  <div class="wrap cta-inner">
    <div>
      <h2>${t.home.ctaTitle}</h2>
      <p>${t.home.ctaBody}</p>
      <p class="cta-note">${t.home.ctaNote}</p>
    </div>
    <div class="cta-actions">
      <a class="btn btn-invert" href="${wa(
        lang === 'ar' ? 'مرحباً قاف، أحتاج إلى عرض سعر.' : 'Hello Qaaf, I would like a quote.',
      )}" target="_blank" rel="noopener">${icon('whatsapp', 'ico ico-sm')}${t.ui.whatsappQuote}</a>
      <a class="btn btn-outline-light" href="tel:${site.phoneLandlineHref}" dir="ltr">${site.phoneLandline}</a>
    </div>
  </div>
</section>`;

export const visitBlock = (t, lang) => {
  const embed = `<iframe class="map" src="${site.mapEmbed}" loading="lazy" title="${
    lang === 'ar' ? 'موقع قاف على الخريطة' : 'Qaaf location map'
  }" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`;
  return `
<section class="visit" id="visit">
  <div class="wrap visit-grid">
    <div class="visit-text">
      <p class="eyebrow">${t.nav.deira}</p>
      <h2>${t.home.visitTitle}</h2>
      <p>${t.home.visitBody}</p>
      <dl class="detail-list">
        <div><dt>${icon('pin')}${t.ui.address}</dt><dd>${t.about.facts[6][1]}</dd></div>
        <div>
          <dt>${icon('clock')}${t.ui.hours}</dt>
          <dd>
            <span class="open-pill" data-open-status
              data-open="${t.ui.openNow}" data-closed="${t.ui.closedNow}"
              data-closes="${t.ui.closesAt}" data-opens="${t.ui.opensAt}">${t.ui.openNow}</span>
            ${t.contact.hours.map(([d, h]) => `${d}: ${h}`).join('<br>')}
          </dd>
        </div>
        <div><dt>${icon('phone')}${t.ui.phone}</dt><dd><a href="tel:${site.phoneLandlineHref}" dir="ltr">${
          site.phoneLandline
        }</a> · <a href="tel:${site.phoneMobileHref}" dir="ltr">${site.phoneMobile}</a></dd></div>
      </dl>
      <div class="btn-row">
        <a class="btn btn-primary" href="${site.maps}" target="_blank" rel="noopener">${icon(
          'pin',
          'ico ico-sm',
        )}${t.ui.directions}</a>
        <button class="btn btn-ghost" type="button" data-copy="${esc(
          t.about.facts[6][1],
        )}" data-copied="${t.ui.copied}">${icon('copy', 'ico ico-sm')}<span>${
          t.ui.copyAddress
        }</span></button>
      </div>
    </div>
    <div class="visit-map">${embed}</div>
  </div>
</section>`;
};

export const faqBlock = (t, items, title = t.home.faqTitle) => `
<section class="faq" id="faq">
  <div class="wrap faq-grid">
    <div class="faq-aside">
      <h2>${title}</h2>
      <p class="faq-lede">${t.ui.faqLede}</p>
      <a class="btn btn-primary" href="${wa(t.ui.faqMessage)}" target="_blank" rel="noopener">${icon(
        'whatsapp',
        'ico ico-sm',
      )}${t.ui.talkToUs}</a>
    </div>
    <div class="faq-list">
      ${items
        .map(
          (f) => `
      <details class="faq-item">
        <summary>${f.q}<span class="faq-icon" aria-hidden="true"></span></summary>
        <div class="faq-body"><p>${f.a}</p></div>
      </details>`,
        )
        .join('')}
    </div>
  </div>
</section>`;

export const reviewCards = (t) => `
<section class="reviews">
  <div class="wrap review-layout">
    <div class="review-summary">
      <p class="eyebrow">${t.home.reviewsTitle}</p>
      <div class="score">
        <strong>5.0</strong>
        <div>
          ${stars}
          <span class="score-meta">${t.trust.reviews}</span>
        </div>
      </div>
      <a class="link-arrow" href="${site.maps}" target="_blank" rel="noopener">${
        t.home.reviewsCta
      }${icon('arrow', 'ico ico-sm')}</a>
    </div>
    <ul class="review-grid">
      ${t.home.reviews
        .map(
          (r) => `
      <li class="review-card">
        ${stars}
        <blockquote>“${r.quote}”</blockquote>
        <p class="review-meta">${r.name} · ${r.meta}</p>
      </li>`,
        )
        .join('')}
    </ul>
  </div>
</section>`;

export const authoritiesBand = (t) => `
<section class="authorities">
  <div class="wrap">
    <div class="authorities-head">
      <p class="eyebrow">${t.authorities.title}</p>
      <p class="authorities-note">${t.authorities.note}</p>
    </div>
    <ul class="authority-grid">
      ${t.authorities.items
        .map(
          (a) => `
      <li class="authority">
        <span class="authority-code">${a.code}</span>
        <span class="authority-name">${a.name}</span>
      </li>`,
        )
        .join('')}
    </ul>
  </div>
</section>`;

export const breadcrumbs = (lang, t, id) => {
  if (id === 'index') return '';
  const label = {
    services: t.nav.services,
    'visa-emirates-id': t.nav.visa,
    'business-setup': t.nav.business,
    attestation: t.nav.attestation,
    'typing-centre-deira': t.nav.deira,
    about: t.nav.about,
    contact: t.nav.contact,
  }[id];
  return `<nav class="crumbs wrap" aria-label="Breadcrumb">
    <a href="${fileFor('index')}">${t.nav.home}</a>
    <span aria-hidden="true">/</span>
    <span>${label}</span>
  </nav>`;
};
