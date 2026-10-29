// Page bodies. Each function returns the inner HTML of <main>.
import { site, wa } from './content.mjs';
import {
  href,
  icon,
  sectionHead,
  ctaBand,
  visitBlock,
  faqBlock,
  reviewCards,
  authoritiesBand,
  breadcrumbs,
} from './layout.mjs';

const escAttr = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

const heroActions = (t, lang) => `
<div class="btn-row">
  <a class="btn btn-primary btn-lg" href="${wa(
    lang === 'ar'
      ? 'مرحباً قاف، أحتاج إلى عرض سعر لطباعة مستند.'
      : 'Hello Qaaf, I would like a quote for a document.',
  )}" target="_blank" rel="noopener">
    ${icon('whatsapp', 'ico ico-sm')}${t.home.ctaPrimary}
  </a>
  <a class="btn btn-ghost btn-lg" href="tel:${site.phoneLandlineHref}" dir="ltr">${t.home.ctaSecondary}</a>
</div>`;

/* ------------------------------------------------------------------- home */

export const home = (lang, t) => `
${breadcrumbs(lang, t, 'index')}
<section class="hero">
  <div class="hero-pattern" aria-hidden="true"></div>
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">${t.home.eyebrow}</p>
      <h1>${t.home.h1}</h1>
      <p class="lede">${t.home.lede}</p>
      ${heroActions(t, lang)}
      <p class="micro">${t.home.micro}</p>
      <ul class="trust-row">
        <li><span class="trust-stars" aria-hidden="true">★ ★ ★ ★ ★</span><strong>${t.trust.ratingShort}</strong><span>${t.trust.reviews}</span></li>
        <li>${icon('check', 'ico ico-sm')}<span>${t.trust.licensed}</span></li>
        <li>${icon('check', 'ico ico-sm')}<span>${t.trust.bilingual}</span></li>
      </ul>
    </div>

    <div class="hero-visual">
      <aside class="hero-card ticket" aria-labelledby="hero-card-title">
        <div class="ticket-top">
          <p class="ticket-kicker" id="hero-card-title">${t.home.heroCardTitle}</p>
          <span class="ticket-stamp" aria-hidden="true">${t.home.ticket.stamp}</span>
        </div>
        <ul class="ticket-list">
          ${t.home.heroCardItems
            .map(
              (item, i) => `
          <li>
            <span class="ticket-no">0${i + 1}</span>
            <span class="ticket-name">${item}</span>
            <span class="ticket-dots" aria-hidden="true"></span>
            <span class="ticket-check" aria-hidden="true">${icon('check', 'ico ico-xs')}</span>
          </li>`,
            )
            .join('')}
        </ul>
        <div class="ticket-foot">
          <div class="ticket-fee">
            <span>${t.home.ticket.feeLabel}</span>
            <strong>${t.home.ticket.feeValue}</strong>
          </div>
          <a class="btn btn-primary btn-sm" href="${wa(
            lang === 'ar' ? 'مرحباً قاف، أحتاج إلى عرض سعر.' : 'Hello Qaaf, I would like a quote.',
          )}" target="_blank" rel="noopener">${icon('whatsapp', 'ico ico-sm')}${
            t.home.ticket.cta
          }</a>
        </div>
        <p class="ticket-hours">${icon('clock', 'ico ico-sm')}${t.home.heroCardFoot}</p>
      </aside>
    </div>
  </div>
</section>

<section class="stat-strip">
  <div class="wrap stat-grid">
    <div class="stat"><strong>${t.trust.ratingShort}</strong><span>${t.trust.ratingLabel}</span></div>
    <div class="stat"><strong>1529320</strong><span>${t.trust.licenceShort}</span></div>
    <div class="stat"><strong>AR / EN</strong><span>${t.trust.languageShort}</span></div>
    <div class="stat"><strong>${t.trust.metroValue}</strong><span>${t.trust.metroShort}</span></div>
  </div>
</section>

<section class="services" id="services">
  <div class="wrap">
    ${sectionHead(t.nav.services, t.home.servicesTitle, t.home.servicesLede)}
    <ul class="service-grid">
      ${t.services.items
        .map(
          (s, i) => `
      <li class="service-card">
        <span class="service-index-no">0${i + 1}</span>
        <span class="service-icon">${icon(s.icon)}</span>
        <span class="tag">${s.tag}</span>
        <h3>${s.title}</h3>
        <p>${s.body}</p>
        <a class="link-arrow" href="${href('services', lang, lang)}#${s.id}">${t.ui.readMore}<span class="visually-hidden"> — ${s.title}</span>${icon(
          'arrow',
          'ico ico-sm',
        )}</a>
      </li>`,
        )
        .join('')}
    </ul>
    <p class="center"><a class="btn btn-ghost" href="${href('services', lang, lang)}">${
      t.home.servicesCta
    }${icon('arrow', 'ico ico-sm')}</a></p>
  </div>
</section>

${authoritiesBand(t)}

<section class="steps" id="how">
  <div class="wrap">
    ${sectionHead('', t.home.stepsTitle, t.home.stepsLede)}
    <ol class="step-grid">
      ${t.home.steps
        .map(
          (s, i) => `
      <li class="step">
        <span class="step-no">0${i + 1}</span>
        <h3>${s.title}</h3>
        <p>${s.body}</p>
      </li>`,
        )
        .join('')}
    </ol>
  </div>
</section>

<section class="why">
  <div class="wrap why-grid">
    <div class="why-head">
      ${sectionHead('', t.home.whyTitle, t.home.whyLede)}
      <div class="why-note">
        <p>${t.home.visitBody}</p>
        <a class="link-arrow" href="${href('typing-centre-deira', lang, lang)}">${t.nav.deira}${icon(
          'arrow',
          'ico ico-sm',
        )}</a>
      </div>
    </div>
    <ul class="why-list">
      ${t.home.why
        .map(
          (w) => `
      <li>
        <span class="why-icon">${icon('check')}</span>
        <div><h3>${w.title}</h3><p>${w.body}</p></div>
      </li>`,
        )
        .join('')}
    </ul>
  </div>
</section>

${reviewCards(t)}
${visitBlock(t, lang)}
${faqBlock(t, t.home.faq)}
${ctaBand(t, lang)}
`;

/* --------------------------------------------------------------- services */

export const services = (lang, t) => `
${breadcrumbs(lang, t, 'services')}
<section class="page-head">
  <div class="wrap narrow">
    <p class="eyebrow">${t.services.eyebrow}</p>
    <h1>${t.services.h1}</h1>
    <p class="lede">${t.services.lede}</p>
    <div class="btn-row">
      <a class="btn btn-primary" href="${wa(
        lang === 'ar' ? 'مرحباً قاف، أحتاج إلى عرض سعر.' : 'Hello Qaaf, I would like a quote.',
      )}" target="_blank" rel="noopener">${icon('whatsapp', 'ico ico-sm')}${t.ui.whatsappQuote}</a>
      <a class="btn btn-ghost" href="#checklist">${t.services.checklistTitle}</a>
    </div>
  </div>
</section>

<div class="service-rail">
<nav class="service-index" aria-label="${lang === 'ar' ? 'فهرس الخدمات' : 'Service index'}">
  <div class="wrap service-index-inner">
    <ul>
      ${t.services.items
        .map((s) => `<li><a href="#${s.id}">${s.title}</a></li>`)
        .join('')}
    </ul>
  </div>
</nav>

<section class="service-list">
  <div class="wrap">
    ${t.services.items
      .map(
        (s, i) => `
    <article class="service-row${i % 2 ? ' is-flipped' : ''}" id="${s.id}">
      <div class="service-row-main">
        <span class="service-icon">${icon(s.icon)}</span>
        <p class="tag">${s.tag}</p>
        <h2>${s.title}</h2>
        <p>${s.body}</p>
        <div class="service-row-links">
          ${
            s.link
              ? `<a class="link-arrow" href="${href(s.link.href, lang, lang)}">${s.link.label}${icon(
                  'arrow',
                  'ico ico-sm',
                )}</a>`
              : ''
          }
          <a class="btn btn-ghost btn-sm" href="${wa(
            lang === 'ar'
              ? `مرحباً قاف، أستفسر عن خدمة: ${s.title}`
              : `Hello Qaaf, I would like to ask about: ${s.title}`,
          )}" target="_blank" rel="noopener">${icon('whatsapp', 'ico ico-sm')}${t.ui.askAbout}</a>
        </div>
      </div>
      <div class="service-row-side">
        <h3 class="side-title">${lang === 'ar' ? 'يشمل' : 'Covers'}</h3>
        <ul class="check-list">${s.list.map((x) => `<li>${icon('check', 'ico ico-sm')}<span>${x}</span></li>`).join('')}</ul>
        ${
          s.bring
            ? `<div class="bring"><span class="bring-label">${
                lang === 'ar' ? 'أحضر معك' : 'Bring'
              }</span><p>${s.bring}</p></div>`
            : ''
        }
      </div>
    </article>`,
      )
      .join('')}
  </div>
</section>
</div>

<section class="checklist-band" id="checklist">
  <div class="wrap">
    <div class="checklist-head">
      <div>
        <p class="eyebrow">${t.services.checklistTitle}</p>
        <h2>${t.services.checklist.title}</h2>
        <p class="checklist-lede">${t.services.checklist.lede}</p>
      </div>
      <p class="checklist-count" aria-live="polite">
        <strong data-count>0</strong>
        <span>${t.services.checklist.countLabel}</span>
      </p>
    </div>

    <form class="checklist" id="checklist-form"
      data-wa="${site.whatsappNumber}"
      data-msg-title="${escAttr(t.services.checklist.messageTitle)}"
      data-msg-tail="${escAttr(t.services.checklist.messageTail)}">
      <div class="checklist-groups">
        ${t.services.checklist.groups
          .map(
            (group) => `
        <fieldset class="checklist-group">
          <legend>${group.name}</legend>
          <ul>
            ${group.items
              .map(
                (item) => `
            <li>
              <label class="check">
                <input type="checkbox" name="doc" value="${escAttr(item)}">
                <span class="check-box" aria-hidden="true">${icon('check', 'ico ico-xs')}</span>
                <span class="check-label">${item}</span>
              </label>
            </li>`,
              )
              .join('')}
          </ul>
        </fieldset>`,
          )
          .join('')}
      </div>

      <div class="checklist-actions">
        <button class="btn btn-primary" type="submit">${icon('whatsapp', 'ico ico-sm')}${
          t.services.checklist.cta
        }</button>
        <button class="btn btn-ghost" type="reset">${t.services.checklist.clear}</button>
        <p class="checklist-hint" data-hint hidden>${t.services.checklist.none}</p>
      </div>
    </form>
  </div>
</section>

${faqBlock(t, t.services.faq, t.services.faqTitle)}
${ctaBand(t, lang)}
`;

/* --------------------------------------------------------- service detail */

const detailPage = (lang, t, data, id) => `
${breadcrumbs(lang, t, id)}
<section class="page-head">
  <div class="wrap narrow">
    <p class="eyebrow">${data.eyebrow}</p>
    <h1>${data.h1}</h1>
    <p class="lede">${data.lede}</p>
    <div class="btn-row">
      <a class="btn btn-primary" href="${wa(
        lang === 'ar' ? 'مرحباً قاف، أحتاج إلى عرض سعر.' : 'Hello Qaaf, I would like a quote.',
      )}" target="_blank" rel="noopener">${icon('whatsapp', 'ico ico-sm')}${t.ui.whatsappQuote}</a>
      <a class="btn btn-ghost" href="tel:${site.phoneLandlineHref}" dir="ltr">${site.phoneLandline}</a>
    </div>
  </div>
</section>

<section class="detail">
  <div class="wrap detail-grid">
    <div class="detail-main">
      ${data.blocks
        .map(
          (b) => `
      <article class="detail-block">
        <h2>${b.title}</h2>
        <p>${b.body}</p>
        <ul class="check-list">${b.list.map((x) => `<li>${icon('check', 'ico ico-sm')}<span>${x}</span></li>`).join('')}</ul>
      </article>`,
        )
        .join('')}
      ${data.note ? `<p class="callout">${data.note}</p>` : ''}
      ${
        data.bring
          ? `<article class="detail-block">
        <h2>${data.bringTitle}</h2>
        <ul class="bring-list">${data.bring
          .map((x, i) => `<li><span class="num">0${i + 1}</span><span>${x}</span></li>`)
          .join('')}</ul>
      </article>`
          : ''
      }
    </div>
    <aside class="detail-aside">
      <div class="aside-card">
        <h2>${t.contact.formTitle}</h2>
        <p>${t.contact.lede}</p>
        <ul class="aside-contact">
          <li>${icon('phone')}<a href="tel:${site.phoneLandlineHref}" dir="ltr">${site.phoneLandline}</a></li>
          <li>${icon('whatsapp')}<a href="tel:${site.phoneMobileHref}" dir="ltr">${site.phoneMobile}</a></li>
          <li>${icon('pin')}<span>${t.about.facts[6][1]}</span></li>
          <li>${icon('clock')}<span>${t.contact.hours[0][0]} ${t.contact.hours[0][1]}</span></li>
        </ul>
        <a class="btn btn-primary btn-block" href="${wa(
          lang === 'ar' ? 'مرحباً قاف، أحتاج إلى عرض سعر.' : 'Hello Qaaf, I would like a quote.',
        )}" target="_blank" rel="noopener">${icon('whatsapp', 'ico ico-sm')}${t.ui.whatsappQuote}</a>
      </div>
    </aside>
  </div>
</section>

${faqBlock(t, data.faq)}
${ctaBand(t, lang)}
`;

export const visa = (lang, t) => detailPage(lang, t, t.visa, 'visa-emirates-id');
export const business = (lang, t) => detailPage(lang, t, t.business, 'business-setup');
export const attestation = (lang, t) => detailPage(lang, t, t.attestation, 'attestation');

/* ------------------------------------------------------------------ deira */

export const deira = (lang, t) => `
${breadcrumbs(lang, t, 'typing-centre-deira')}
<section class="page-head">
  <div class="wrap narrow">
    <p class="eyebrow">${t.deira.eyebrow}</p>
    <h1>${t.deira.h1}</h1>
    <p class="lede">${t.deira.lede}</p>
    <div class="btn-row">
      <a class="btn btn-primary" href="${site.maps}" target="_blank" rel="noopener">${icon(
        'pin',
        'ico ico-sm',
      )}${t.ui.directions}</a>
      <a class="btn btn-ghost" href="${wa(
        lang === 'ar' ? 'مرحباً قاف، أين مكتبكم بالضبط؟' : 'Hello Qaaf, where exactly is your office?',
      )}" target="_blank" rel="noopener">${t.ui.talkToUs}</a>
    </div>
  </div>
</section>

<section class="points">
  <div class="wrap point-grid">
    ${t.deira.points
      .map(
        (p, i) => `
    <article class="point">
      <span class="point-no">0${i + 1}</span>
      <h2>${p.title}</h2>
      <p>${p.body}</p>
    </article>`,
      )
      .join('')}
  </div>
</section>

<section class="areas">
  <div class="wrap">
    ${sectionHead('', t.deira.areasTitle)}
    <ul class="chip-row">${t.deira.areas.map((a) => `<li>${a}</li>`).join('')}</ul>
  </div>
</section>

<section class="local">
  <div class="wrap local-grid">
    <div>
      <h2>${t.deira.localTitle}</h2>
      <p>${t.deira.localBody}</p>
    </div>
    <ul class="check-list big">${t.deira.localList
      .map((x) => `<li>${icon('check', 'ico ico-sm')}<span>${x}</span></li>`)
      .join('')}</ul>
  </div>
</section>

${visitBlock(t, lang)}
${faqBlock(t, t.deira.faq)}
${ctaBand(t, lang)}
`;

/* ------------------------------------------------------------------ about */

export const about = (lang, t) => `
${breadcrumbs(lang, t, 'about')}
<section class="page-head">
  <div class="wrap narrow">
    <p class="eyebrow">${t.about.eyebrow}</p>
    <h1>${t.about.h1}</h1>
    <p class="lede">${t.about.lede}</p>
  </div>
</section>

<section class="story">
  <div class="wrap story-grid">
    <div class="story-text">
      <h2>${t.about.storyTitle}</h2>
      ${t.about.story.map((p) => `<p>${p}</p>`).join('')}
    </div>
    <div class="story-card">
      <p class="eyebrow">${t.about.factsTitle}</p>
      <dl class="facts">
        ${t.about.facts
          .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`)
          .join('')}
      </dl>
    </div>
  </div>
</section>

<section class="values">
  <div class="wrap">
    ${sectionHead('', t.home.whyTitle)}
    <ul class="value-grid">
      ${t.about.values
        .map(
          (v) => `
      <li>
        <span class="service-icon">${icon('check')}</span>
        <h3>${v.title}</h3>
        <p>${v.body}</p>
      </li>`,
        )
        .join('')}
    </ul>
  </div>
</section>

${reviewCards(t)}
${ctaBand(t, lang)}
`;

/* ---------------------------------------------------------------- contact */

export const contact = (lang, t) => `
${breadcrumbs(lang, t, 'contact')}
<section class="page-head">
  <div class="wrap narrow">
    <p class="eyebrow">${t.contact.eyebrow}</p>
    <h1>${t.contact.h1}</h1>
    <p class="lede">${t.contact.lede}</p>
  </div>
</section>

<section class="contact">
  <div class="wrap contact-grid">
    <div class="contact-info">
      <div class="contact-hours-head">
        <h2>${t.contact.hoursTitle}</h2>
        <span class="open-pill" data-open-status
          data-open="${t.ui.openNow}" data-closed="${t.ui.closedNow}"
          data-closes="${t.ui.closesAt}" data-opens="${t.ui.opensAt}">9:00 – 19:00</span>
      </div>
      <table class="hours">
        <tbody>
          ${t.contact.hours.map(([d, h]) => `<tr><th scope="row">${d}</th><td>${h}</td></tr>`).join('')}
        </tbody>
      </table>
      <ul class="contact-list">
        <li>${icon('phone')}<div><span>${t.ui.phone}</span><a href="tel:${site.phoneLandlineHref}" dir="ltr">${
          site.phoneLandline
        }</a><a href="tel:${site.phoneMobileHref}" dir="ltr">${site.phoneMobile}</a><a href="tel:${site.phoneAltHref}" dir="ltr">${
          site.phoneAlt
        }</a></div></li>
        <li>${icon('whatsapp')}<div><span>WhatsApp</span><a href="${wa()}" target="_blank" rel="noopener" dir="ltr">${
          site.phoneMobile
        }</a></div></li>
        <li>${icon('mail')}<div><span>${t.ui.email}</span><a href="mailto:${site.email}" dir="ltr">${
          site.email
        }</a></div></li>
        <li>${icon('pin')}<div><span>${t.ui.address}</span><p>${t.about.facts[6][1]}</p></div></li>
        <li>${icon('instagram')}<div><span>${t.ui.follow}</span><a href="${site.instagram}" target="_blank" rel="noopener" dir="ltr">@qaafdocumentsclearing</a></div></li>
      </ul>
      <p class="note">${t.contact.note}</p>
    </div>

    <form class="quote-form" id="quote-form" novalidate data-wa="${site.whatsappNumber}">
      <h2>${t.contact.formTitle}</h2>
      <label>
        <span>${t.contact.formFields.name}</span>
        <input type="text" name="name" autocomplete="name" required>
      </label>
      <label>
        <span>${t.contact.formFields.phone}</span>
        <input type="tel" name="phone" autocomplete="tel" inputmode="tel" dir="ltr" required>
      </label>
      <label>
        <span>${t.contact.formFields.service}</span>
        <select name="service">
          ${t.contact.formOptions.map((o) => `<option>${o}</option>`).join('')}
        </select>
      </label>
      <label>
        <span>${t.contact.formFields.message}</span>
        <textarea name="message" rows="4" placeholder="${t.contact.formFields.messagePlaceholder}"></textarea>
      </label>
      <button class="btn btn-primary btn-block" type="submit">${icon(
        'whatsapp',
        'ico ico-sm',
      )}${t.contact.formFields.submit}</button>
      <p class="form-note">${t.ui.formNote}</p>
    </form>
  </div>
</section>

<section class="contact-map">
  <div class="wrap">
    <iframe class="map wide" src="${site.mapEmbed}" loading="lazy" title="${
      lang === 'ar' ? 'موقع قاف على الخريطة' : 'Qaaf location map'
    }" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
  </div>
</section>
`;

/* ------------------------------------------------------------------- 404 */

export const notFound = (lang, t) => `
<section class="page-head">
  <div class="wrap narrow">
    <p class="eyebrow">404</p>
    <h1>${t.notFound.h1}</h1>
    <p class="lede">${t.notFound.body}</p>
    <div class="btn-row">
      <a class="btn btn-primary" href="index.html">${t.ui.backHome}</a>
      <a class="btn btn-ghost" href="services.html">${t.ui.allServices}</a>
    </div>
  </div>
</section>
`;
