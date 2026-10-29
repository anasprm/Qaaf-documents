/* Qaaf — small progressive-enhancement script. No dependencies. */
(() => {
  const root = document.documentElement;
  root.classList.add('js');

  /* ------------------------------------------------------------- mobile nav */
  const body = document.body;
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');

  if (toggle && nav) {
    const setOpen = (open) => {
      body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };

    toggle.addEventListener('click', () => setOpen(!body.classList.contains('nav-open')));

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && body.classList.contains('nav-open')) {
        setOpen(false);
        toggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1000) setOpen(false);
    });

    document.addEventListener('click', (event) => {
      if (!body.classList.contains('nav-open')) return;
      if (event.target.closest('.site-header')) return;
      setOpen(false);
    });
  }

  /* --------------------------------------------------------- header shadow */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ------------------------------------------------------------------ form */
  const form = document.getElementById('quote-form');

  if (form) {
    const fields = ['name', 'phone'];

    const validate = () => {
      let firstInvalid = null;
      fields.forEach((key) => {
        const field = form.elements[key];
        if (!field) return;
        const value = field.value.trim();
        const invalid = key === 'phone' ? value.replace(/\D/g, '').length < 7 : value.length < 2;
        field.setAttribute('aria-invalid', invalid ? 'true' : 'false');
        if (invalid && !firstInvalid) firstInvalid = field;
      });
      return firstInvalid;
    };

    fields.forEach((key) => {
      const field = form.elements[key];
      if (field) {
        field.addEventListener('input', () => {
          if (field.getAttribute('aria-invalid') === 'true') field.setAttribute('aria-invalid', 'false');
        });
      }
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const firstInvalid = validate();
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      const data = new FormData(form);
      const get = (key) => String(data.get(key) || '').trim();
      const isArabic = root.lang === 'ar';

      const lines = isArabic
        ? [
            'مرحباً قاف، أرغب في عرض سعر.',
            '',
            `الاسم: ${get('name')}`,
            `الهاتف: ${get('phone')}`,
            `الخدمة: ${get('service')}`,
            get('message') ? `التفاصيل: ${get('message')}` : '',
          ]
        : [
            'Hello Qaaf, I would like a quote.',
            '',
            `Name: ${get('name')}`,
            `Phone: ${get('phone')}`,
            `Service: ${get('service')}`,
            get('message') ? `Details: ${get('message')}` : '',
          ];

      const text = lines.filter(Boolean).join('\n');
      const number = form.dataset.wa || '971521113478';
      window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    });
  }

  /* ------------------------------------------------------------ open status */
  const pills = document.querySelectorAll('[data-open-status]');

  if (pills.length) {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Dubai',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(new Date());

    const pick = (type) => (parts.find((part) => part.type === type) || {}).value || '';
    const day = pick('weekday');
    const minutes = (parseInt(pick('hour'), 10) % 24) * 60 + parseInt(pick('minute'), 10);

    const OPEN = 9 * 60;
    const CLOSE = 19 * 60;
    const openToday = day !== 'Sun';
    const isOpen = openToday && minutes >= OPEN && minutes < CLOSE;
    const { open: openText, closed: closedText, closes, opens } = pills[0].dataset;
    const isArabic = root.lang === 'ar';
    let label;

    if (isOpen) {
      label = `${openText} · ${closes} 19:00`;
    } else {
      let ahead = openToday && minutes < OPEN ? 0 : 1;

      if (ahead) {
        while (ahead < 8) {
          const name = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Asia/Dubai',
            weekday: 'short',
          }).format(new Date(Date.now() + ahead * 864e5));
          if (name !== 'Sun') break;
          ahead += 1;
        }
      }

      const dayName = new Intl.DateTimeFormat(isArabic ? 'ar-AE' : 'en-GB', {
        weekday: 'long',
        timeZone: 'Asia/Dubai',
      }).format(new Date(Date.now() + ahead * 864e5));

      label = `${closedText} · ${opens} ${dayName} 09:00`;
    }

    pills.forEach((pill) => {
      pill.textContent = label;
      pill.classList.toggle('is-closed', !isOpen);
      pill.title = isArabic ? 'بتوقيت دبي' : 'Dubai time (GST)';
    });
  }

  /* ------------------------------------------------------------ copy address */
  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      const text = button.dataset.copy;
      const label = button.querySelector('span');

      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        const helper = document.createElement('textarea');
        helper.value = text;
        helper.setAttribute('readonly', '');
        helper.style.position = 'fixed';
        helper.style.opacity = '0';
        document.body.appendChild(helper);
        helper.select();
        document.execCommand('copy');
        helper.remove();
      }

      if (label) {
        const original = label.textContent;
        label.textContent = button.dataset.copied;
        button.classList.add('is-copied');
        window.setTimeout(() => {
          label.textContent = original;
          button.classList.remove('is-copied');
        }, 2200);
      }
    });
  });

  /* ------------------------------------------------------- document checklist */
  const checklist = document.getElementById('checklist-form');

  if (checklist) {
    const boxes = Array.from(checklist.querySelectorAll('input[name="doc"]'));
    const counter = checklist.closest('.checklist-band').querySelector('[data-count]');
    const hint = checklist.querySelector('[data-hint]');

    const sync = () => {
      if (counter) counter.textContent = String(boxes.filter((box) => box.checked).length);
    };

    boxes.forEach((box) => box.addEventListener('change', sync));

    checklist.addEventListener('reset', () => {
      if (hint) hint.hidden = true;
      window.setTimeout(sync, 0);
    });

    checklist.addEventListener('submit', (event) => {
      event.preventDefault();
      const picked = boxes.filter((box) => box.checked).map((box) => box.value);

      if (!picked.length) {
        if (hint) hint.hidden = false;
        boxes[0].focus();
        return;
      }

      const lines = [
        checklist.dataset.msgTitle,
        '',
        ...picked.map((item) => `• ${item}`),
        '',
        checklist.dataset.msgTail,
      ];

      window.open(
        `https://wa.me/${checklist.dataset.wa}?text=${encodeURIComponent(lines.join('\n'))}`,
        '_blank',
        'noopener',
      );
    });
  }

  /* -------------------------------------------------------------- smooth scroll reveal */
  if (
    'IntersectionObserver' in window &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    const revealSelectors = [
      '.section-head',
      '.service-card',
      '.step',
      '.why-list li',
      '.review-card',
      '.ticket',
      '.stat',
      '.authority',
      '.faq-item',
      '.quote-form',
      '.detail-block',
      '.aside-card',
      '.checklist-group',
      '.point',
      '.value-card',
      '.story-block',
    ];

    const elements = document.querySelectorAll(revealSelectors.join(', '));

    if (elements.length) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              obs.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.08,
        }
      );

      elements.forEach((el) => {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
      });
    }
  }
})();
