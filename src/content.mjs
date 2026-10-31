// ---------------------------------------------------------------------------
// Qaaf Documents Clearing Services — site content (English + Arabic)
// Edit text here; build.mjs regenerates every page.
// Anything marked CONFIRM in README.md should be checked with the owner.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Qaaf Documents Clearing Services',
  nameAr: 'قاف لتخليص المعاملات',
  licence: '1529320',
  authority: 'Dubai Department of Economy and Tourism (DET)',
  authorityAr: 'دائرة الاقتصاد والسياحة – دبي',
  phoneLandline: '+971 4 553 3042',
  phoneLandlineHref: '+97145533042',
  phoneMobile: '+971 52 111 3478',
  phoneMobileHref: '+971521113478',
  phoneAlt: '+971 52 201 3761',
  phoneAltHref: '+971522013761',
  whatsappNumber: '971521113478',
  email: 'info@qaafdxb.ae',
  instagram: 'https://www.instagram.com/qaafdocumentsclearing/',
  maps:
    'https://www.google.com/maps/search/?api=1&query=Qaaf+Documents+Clearing+Services+Abu+Hail+Deira+Dubai',
  mapEmbed:
    'https://www.google.com/maps?q=25.285869,55.328174&z=17&output=embed',
  geo: { lat: 25.285869, lng: 55.328174 },
  domain: 'qaafdxb.ae',
  established: '2025',
  googleSiteVerification: '39Ibl896NN3AfOH2',
};

// WhatsApp deep link with a pre-filled message per language
export const wa = (text) =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

// ---------------------------------------------------------------------------

const en = {
  locale: 'en_AE',
  dir: 'ltr',
  htmlLang: 'en',
  switchLabel: 'العربية',
  brandLine: 'Documents Clearing & Typing · Deira, Dubai',

  nav: {
    home: 'Home',
    services: 'Services',
    visa: 'Visa & Emirates ID',
    business: 'Business setup',
    attestation: 'Attestation',
    deira: 'Deira centre',
    about: 'About',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
  },

  ui: {
    call: 'Call',
    callNow: 'Call 04 553 3042',
    whatsapp: 'WhatsApp',
    whatsappQuote: 'Get a quote on WhatsApp',
    sendWhatsApp: 'Send on WhatsApp',
    directions: 'Get directions',
    openMaps: 'Open in Google Maps',
    readMore: 'Read more',
    allServices: 'All services',
    talkToUs: 'Talk to us',
    backHome: 'Back to home',
    skip: 'Skip to content',
    hours: 'Opening hours',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    licence: 'Trade licence',
    follow: 'Instagram',
    openNow: 'Open now',
    closedNow: 'Closed',
    closesAt: 'closes',
    opensAt: 'opens',
    copyAddress: 'Copy address',
    copied: 'Address copied',
    askAbout: 'Ask about this',
    checkedCount: 'selected',
    faqLede:
      'If your question is not here, send it on WhatsApp with the document type. You will get the form, the fee and the list of papers in one reply.',
    faqMessage: 'Hello Qaaf, I have a question about my documents.',
    faqEyebrow: 'Questions',
    formNote:
      'This form opens WhatsApp with your details filled in. Nothing is stored on this website.',
  },

  trust: {
    rating: '5.0 on Google',
    ratingShort: '5.0',
    ratingLabel: 'Google rating',
    reviews: '16 Google reviews',
    licensed: 'Licensed by Dubai DET',
    licenceShort: 'DET licence',
    bilingual: 'Arabic & English',
    languageShort: 'Languages',
    location: 'Hor Al Anz, Deira',
    districtShort: 'District',
    metroShort: 'Abu Hail Metro',
    metroValue: '3 min',
  },

  authorities: {
    title: 'Authorities we file with',
    note: 'Typed, submitted and followed up through the channel each body recognises.',
    items: [
      { code: 'GDRFA', name: 'Residency & entry permits' },
      { code: 'ICP', name: 'Emirates ID' },
      { code: 'MOHRE', name: 'Labour & work permits' },
      { code: 'DET', name: 'Trade licences' },
      { code: 'MOFA', name: 'Attestation' },
      { code: 'DHA', name: 'Medical typing' },
      { code: 'EJARI', name: 'Tenancy registration' },
      { code: 'COURTS', name: 'Notary & power of attorney' },
    ],
  },

  home: {
    title: 'Qaaf Documents Clearing Services | Typing Centre in Deira, Dubai',
    description:
      'Licensed typing centre and documents clearing in Hor Al Anz, Deira, Dubai. Visa, Emirates ID, labour, trade licence and MOFA attestation. Quote on WhatsApp.',
    eyebrow: 'Licensed by Dubai DET · Licence 1529320',
    h1: 'Dubai paperwork,<br>handled properly.',
    lede:
      'Qaaf Documents Clearing Services is a licensed typing and PRO centre in Hor Al Anz, Deira. Visas, Emirates ID, labour contracts, trade licences and attestation — typed in Arabic and English, checked against the authority’s format, and submitted for you.',
    ctaPrimary: 'Get a quote on WhatsApp',
    ctaSecondary: 'Call 04 553 3042',
    micro:
      'Walk in, or send a photo of your document on WhatsApp · Many single forms are typed while you wait',
    heroCardTitle: 'Service menu',
    heroCardItems: [
      'Visa renewal & cancellation',
      'Emirates ID renewal',
      'Labour contract typing',
      'Trade licence renewal',
      'MOFA attestation',
      'Power of attorney',
    ],
    heroCardFoot: 'Open Saturday–Thursday, 9:00–19:00 · Friday 9:00–19:00 · Sunday closed',
    ticket: {
      feeLabel: 'Typing fee',
      feeValue: 'Quoted before we start',
      stamp: 'QAAF',
      cta: 'WhatsApp us',
    },

    servicesTitle: 'What we handle',
    servicesLede:
      'One counter for the paperwork that sits between you and a government approval. If you are not sure which form you need, send us the document and we will tell you.',
    servicesCta: 'See all services and document checklists',

    stepsTitle: 'How it works',
    stepsLede: 'Three steps, no queues to work out on your own.',
    steps: [
      {
        title: 'Send it, or bring it in',
        body:
          'WhatsApp a clear photo or scan of your document, or walk into the office in Hor Al Anz. You get the typing fee before any work starts — government fees are quoted separately at cost.',
      },
      {
        title: 'We type and check',
        body:
          'Forms are prepared in Arabic and English to the receiving authority’s format, then checked line by line for the small errors that get applications returned.',
      },
      {
        title: 'Submitted, with the receipt',
        body:
          'We submit through the right channel — GDRFA/Amer, ICP, MOHRE/Tawjeeh, DET or the municipality — and hand you the receipt and reference number.',
      },
    ],

    whyTitle: 'Why clients stay with Qaaf',
    whyLede:
      'A small office in Deira, licensed since 2025, rated 5.0 by the people who have used it.',
    why: [
      {
        title: 'Licensed and local',
        body:
          'Registered with Dubai DET under trade licence 1529320, with an office you can walk into — not a WhatsApp number that disappears.',
      },
      {
        title: 'Arabic and English, first time',
        body:
          'Every form is prepared in both languages where the authority requires it, and checked before submission. Rejections usually come from one wrong field.',
      },
      {
        title: 'Same day where it can be',
        body:
          'Most single-form typing is done while you wait. Longer chains — attestation, licensing, medical — get a realistic timeline up front, not a promise.',
      },
      {
        title: 'Fees you can see',
        body:
          'The typing fee is quoted before we start. Government fees are passed through at cost with the receipt, so nothing appears later.',
      },
    ],

    reviewsTitle: 'What clients say',
    reviewsLede: 'Rated 5.0 out of 5 across 16 Google reviews.',
    reviewsCta: 'Read the reviews on Google',
    reviews: [
      {
        quote:
          'Their service is second to none. I am highly impressed with their professionalism.',
        name: 'Google review',
        meta: 'September 2025',
      },
      {
        quote:
          'Great service! The team was helpful and made the whole process super easy — I would happily recommend them.',
        name: 'Google review',
        meta: 'September 2025',
      },
      {
        quote:
          'I visited the office and their service was amazing, quick and responsive. I would recommend everyone to use their service.',
        name: 'Google review',
        meta: 'September 2025',
      },
    ],

    visitTitle: 'Find us in Hor Al Anz',
    visitBody:
      'Shop M10 on the mezzanine floor of Al Habtoor Building, on Abu Hail Street — about three minutes on foot from Abu Hail Metro Station. Walk-ins are welcome; sending documents ahead on WhatsApp saves a trip.',
    faqTitle: 'Common questions',
    faq: [
      {
        q: 'What does a typing centre actually do?',
        a: 'It prepares and submits official forms — visa, Emirates ID, labour, licensing and attestation — in the exact format each authority requires. You bring the documents; the centre does the data entry, the Arabic/English wording, the compliance check and the submission.',
      },
      {
        q: 'Do I have to visit in person?',
        a: 'For typing and most submissions, no. Send clear photos or scans on WhatsApp and we confirm the form, the fee and the documents. Originals are only needed where the authority requires them — notarisation, biometrics, or MOFA.',
      },
      {
        q: 'How much does it cost?',
        a: 'The typing fee depends on the form and how many pages it runs to. You get that figure before we start, and government fees are quoted separately at cost, with the receipt. There is no charge for asking.',
      },
      {
        q: 'How long will it take?',
        a: 'Most single forms are typed while you wait. Multi-step transactions — attestation, a new licence, medical — depend on the authority and get a realistic range up front rather than a promise.',
      },
      {
        q: 'What should I bring?',
        a: 'Passport copy, current visa or entry permit, and any sponsor or company documents that apply. For Emirates ID renewals, the existing card. Message us first and we will confirm the exact list so you only make one trip.',
      },
      {
        q: 'Are you licensed, and which authorities do you deal with?',
        a: 'Qaaf is licensed by Dubai DET under trade licence 1529320. We prepare and submit for GDRFA/Amer (residency), ICP (Emirates ID), MOHRE/Tawjeeh (labour), DET and municipality (licensing), and MOFA (attestation).',
      },
    ],
    ctaTitle: 'Tell us what you need typed',
    ctaBody:
      'Send the document type on WhatsApp and you will get the exact form, the turnaround and a quote — usually within the hour during opening times.',
    ctaNote: 'No payment to get a quote. Government fees are always quoted separately.',
  },

  services: {
    title: 'Services & Document Checklists | Qaaf Documents Clearing, Deira',
    description:
      'Visa and Emirates ID typing, labour contracts, trade licences, MOFA attestation and PRO support in Deira, Dubai. Document checklists and WhatsApp quotes.',
    eyebrow: 'Services',
    h1: 'Everything the form needs,<br>in one place.',
    lede:
      'Qaaf handles individual forms and full chains. Below is what each service covers and what to bring, so you only make one trip. If your case is not listed, ask — most Deira paperwork passes through this office at some point.',
    items: [
      {
        id: 'visa',
        icon: 'passport',
        title: 'Visa & residency typing',
        tag: 'GDRFA · Amer',
        body:
          'New residence visas, renewals, cancellations, status change and family sponsorship applications, typed to GDRFA/Amer format and submitted through the authorised channel.',
        list: [
          'New residence visa and entry permit applications',
          'Visa renewal, cancellation and status change',
          'Family sponsorship — spouse, children, parents',
          'Visa for widows and divorced women (1-year extension guidance)',
          'Entry permit and status adjustment support',
        ],
        bring: 'Passport copy, current visa or entry permit, sponsor’s passport and visa, Emirates ID copies, photographs where required.',
        link: { label: 'Visa & Emirates ID detail', href: 'visa-emirates-id' },
      },
      {
        id: 'eid',
        icon: 'id',
        title: 'Emirates ID typing',
        tag: 'ICP',
        body:
          'New, renewal, replacement and lost-card Emirates ID applications on the ICP system, with biometrics appointment guidance where it is required.',
        list: [
          'New Emirates ID applications',
          'Renewal and replacement (lost, damaged, stolen)',
          'Data correction and status updates',
          'Biometrics appointment guidance',
        ],
        bring: 'Passport, visa page, existing Emirates ID for renewals, and the police report for a lost card.',
        link: { label: 'Visa & Emirates ID detail', href: 'visa-emirates-id' },
      },
      {
        id: 'labour',
        icon: 'briefcase',
        title: 'Labour & MOHRE / Tawjeeh',
        tag: 'MOHRE',
        body:
          'Offer letters, labour contracts, work permits, contract amendments and quota paperwork prepared in the bilingual format MOHRE requires.',
        list: [
          'Offer letters and labour contracts',
          'New work permits and quota applications',
          'Contract amendments and renewals',
          'Tawjeeh and Tasheel transactions',
          'Labour cancellation support',
        ],
        bring: 'Company trade licence and establishment card, employee passport and visa copies, signed offer letter.',
      },
      {
        id: 'business',
        icon: 'building',
        title: 'Trade licence & business setup',
        tag: 'DET',
        body:
          'New trade licences, renewals, amendments, initial approvals and Ejari — from a starter licence to an operating company with a bank account.',
        list: [
          'New trade licence — mainland and free zone guidance',
          'Licence renewal and amendment',
          'Initial approval, trade name and activity selection',
          'Ejari and tenancy contract registration',
          'Bank account opening support',
        ],
        bring: 'Passport and visa copies of owners, proposed trade name and activities, tenancy contract or Ejari, and any existing licence for renewals.',
        link: { label: 'Business setup detail', href: 'business-setup' },
      },
      {
        id: 'attestation',
        icon: 'stamp',
        title: 'Attestation & MOFA',
        tag: 'MOFA · Embassy',
        body:
          'Educational, commercial and personal documents through embassy and MOFA attestation — the full legalisation chain for use inside or outside the UAE.',
        list: [
          'Degree, diploma, marksheet and school certificates',
          'Marriage, birth and police clearance certificates',
          'Powers of attorney, MOA, invoices and agreements',
          'Embassy attestation and MOFA stamping',
          'Certified true copies where required',
        ],
        bring: 'The original document, earlier attestation stamps already completed, and a copy of your passport and visa.',
        link: { label: 'Attestation detail', href: 'attestation' },
      },
      {
        id: 'pro',
        icon: 'folder',
        title: 'Document clearing & PRO support',
        tag: 'PRO',
        body:
          'The transactions that do not fit a single counter: powers of attorney, notarisation, medical typing, lost passports, and company documents handled end to end.',
        list: [
          'Power of attorney and MOA preparation',
          'Notarisation and legal translation coordination',
          'DHA medical typing and medical fitness support',
          'Lost passport reporting guidance',
          'Company document clearing and renewals',
        ],
        bring: 'Depends on the transaction — send us the document on WhatsApp and we will confirm the checklist.',
      },
    ],
    checklistTitle: 'One checklist, one trip',
    checklistBody:
      'The most common reason a Deira application bounces is a missing page, not a wrong form. Message us before you come in and we will confirm exactly what to bring for your case.',
    checklist: {
      title: 'Build your document checklist',
      lede:
        'Tick what you already have. Whatever is left unticked is what we will tell you to bring — send the list on WhatsApp and we will confirm it in one reply.',
      select: 'Tick the documents you have',
      cta: 'Send my checklist',
      clear: 'Clear all',
      none: 'Tick at least one document first.',
      countLabel: 'documents selected',
      messageTitle: 'Hello Qaaf, these are the documents I already have:',
      messageTail: 'Please tell me what is still missing for my case.',
      groups: [
        {
          name: 'Identity',
          items: [
            'Passport copy (photo page)',
            'Visa page or entry permit',
            'Emirates ID (front and back)',
            'Sponsor passport and visa',
            'Recent passport photograph',
          ],
        },
        {
          name: 'Company',
          items: [
            'Trade licence copy',
            'Establishment card',
            'Tenancy contract or Ejari',
            'MOA or shareholders list',
          ],
        },
        {
          name: 'Attestation',
          items: [
            'Original certificate',
            'Earlier attestation stamps',
            'Arabic translation, where required',
          ],
        },
        {
          name: 'Application',
          items: ['Application number or receipt', 'Medical test result', 'Signed offer letter or contract'],
        },
      ],
    },
    faqTitle: 'Service questions',
    faq: [
      {
        q: 'I do not know which form I need. Can you tell me?',
        a: 'Yes — that is most of the job. Send a photo of the document or describe the situation, and we will name the form, the authority and the fee before anything starts.',
      },
      {
        q: 'Do you only type, or do you also submit?',
        a: 'Both. Forms are typed to the authority’s format and submitted through the appropriate channel, and you get the receipt and reference number back.',
      },
      {
        q: 'Can you handle a transaction that spans several authorities?',
        a: 'Often. A new company, for example, runs through a trade name, an initial approval, DET licensing, Ejari, then immigration for visas. We will map the order and tell you which step blocks the next.',
      },
      {
        q: 'Do you work in Arabic?',
        a: 'Yes. The office works in Arabic, English, Hindi and Urdu, and every government form is prepared in the language and layout the authority requires.',
      },
    ],
  },

  visa: {
    title: 'Visa & Emirates ID Typing in Deira, Dubai | Qaaf',
    description:
      'Visa renewal, cancellation, family sponsorship and Emirates ID typing in Deira, Dubai. GDRFA/Amer and ICP forms prepared in Arabic and English, with biometrics guidance.',
    eyebrow: 'Visa & Emirates ID',
    h1: 'Visas and Emirates ID,<br>typed without the runaround.',
    lede:
      'Residency paperwork punishes small mistakes — a name that does not match the passport, an expired entry permit, a missing sponsor page. Qaaf prepares visa and Emirates ID applications against the authority’s own format and submits them through the right channel.',
    blocks: [
      {
        title: 'Visa typing (GDRFA / Amer)',
        body:
          'New residence visas, renewals, cancellations, status change and family sponsorship. We confirm which channel your case belongs to before typing, so you are not sent to a counter that cannot help.',
        list: [
          'New residence visa applications and entry permits',
          'Visa renewal, cancellation and status change',
          'Spouse, child and parent sponsorship',
          'Guidance on the 1-year extension for widows and divorced women',
          'Overstay and fine queries, with the current fee position',
        ],
      },
      {
        title: 'Emirates ID typing (ICP)',
        body:
          'New, renewal, replacement and lost-card applications, plus data corrections. Where biometrics are needed, we tell you what to expect at the ICP centre rather than letting you find out at the door.',
        list: [
          'New Emirates ID applications',
          'Renewal and replacement',
          'Lost, damaged or stolen card replacement — police report first',
          'Data correction and status updates',
        ],
      },
    ],
    bringTitle: 'What to bring',
    bring: [
      'Passport copy — the photo page and the visa page',
      'Current visa, entry permit or cancellation paper',
      'Sponsor’s passport, visa and Emirates ID copies',
      'Existing Emirates ID, if you are renewing',
      'Recent photograph, where the application asks for one',
      'Police report, for a lost or stolen card',
    ],
    note:
      'Send photos of the documents on WhatsApp first. We will check them and tell you if anything is missing before you travel to the office.',
    faq: [
      {
        q: 'Can you handle a visa cancellation and a new visa in the same week?',
        a: 'Usually yes, if the cancellation is completed first and the new sponsor’s documents are ready. The order matters more than the speed, and we will tell you which step blocks which.',
      },
      {
        q: 'My name is spelled differently on my passport and my Emirates ID. Can this be fixed?',
        a: 'Yes — this is a data correction rather than a new application. Bring the passport and the existing card; the spelling is corrected to match the passport exactly.',
      },
      {
        q: 'Do I have to come to Deira in person?',
        a: 'For typing and submission, usually not — WhatsApp is enough for most cases. Originals are needed where the authority requires them, such as notarisation or biometrics.',
      },
    ],
  },

  business: {
    title: 'Trade Licence & Business Setup in Dubai | Qaaf Documents Clearing',
    description:
      'New trade licence, renewal, amendment and Ejari support in Dubai. Starter licences, activity selection, bank account opening guidance — licensed DET typing centre in Deira.',
    eyebrow: 'Business setup',
    h1: 'From a trade name<br>to an operating company.',
    lede:
      'Setting up in Dubai is a sequence, not a single form: name, activity, legal structure, tenancy, licence, then visas and banking. Qaaf works through that sequence with you, and types each stage to DET’s format.',
    blocks: [
      {
        title: 'Starting out',
        body:
          'A starter licence with a sensible activity mix is usually the cheapest way to become legal and start invoicing. We will tell you what a licence does and does not give you — including the difference between a licence and a residence visa.',
        list: [
          'Trade name search and reservation',
          'Activity selection — up to 10 activities on starter packages',
          'Mainland or free zone guidance for your business type',
          'Initial approval and licence issuance',
          'Ejari and tenancy contract registration',
        ],
      },
      {
        title: 'Once you are running',
        body:
          'Renewals, amendments, shareholder changes and the documents banks ask for. If you are outside the UAE, most of this can be handled remotely with a power of attorney.',
        list: [
          'Trade licence renewal and amendment',
          'Activity and shareholder changes',
          'MOA amendments and notarisation',
          'Power of attorney for owners abroad',
          'Corporate bank account opening support',
        ],
      },
    ],
    note:
      'Government fees change and depend on activity and jurisdiction. We quote the typing and service fee first, and list government fees separately at cost before anything is paid.',
    faq: [
      {
        q: 'How much does a trade licence cost?',
        a: 'It depends on the activity, the jurisdiction and whether you need a physical office. Ask for a written breakdown: licence fee, typing fee and government charges should be separate lines, and you should see them before you commit.',
      },
      {
        q: 'Can I run the company without living in the UAE?',
        a: 'Often yes, with the right structure and a power of attorney for local filings. Residence visas and banking have their own requirements, which we will walk through before you choose a package.',
      },
    ],
  },

  attestation: {
    title: 'MOFA & Embassy Attestation in Dubai | Qaaf Documents Clearing',
    description:
      'Degree, marriage, birth and commercial document attestation in Dubai — embassy, MOFA and certified copy support, with realistic timelines for the full chain.',
    eyebrow: 'Attestation',
    h1: 'Documents that travel<br>between countries.',
    lede:
      'Attestation is a chain, and skipping a link means starting again. Qaaf maps the chain for your document and destination, then moves it through the embassy and MOFA legs.',
    blocks: [
      {
        title: 'What we attest',
        body:
          'Educational, personal and commercial documents, for use in the UAE or abroad. The route differs by country, so the destination matters as much as the document.',
        list: [
          'Degrees, diplomas, marksheets and school certificates',
          'Marriage, birth and police clearance certificates',
          'Powers of attorney, MOA, invoices and agreements',
          'Commercial documents for company registration abroad',
          'Certified true copies',
        ],
      },
      {
        title: 'How the chain works',
        body:
          'Most documents need the issuing country’s foreign ministry, then the UAE embassy there, then MOFA in the UAE. Some countries add a translation or notary step. We tell you the sequence and which stamps you already have before quoting.',
        list: [
          'Check which stamps your document already carries',
          'Translation where the receiving body requires Arabic',
          'Embassy attestation in the issuing country',
          'MOFA attestation in the UAE',
          'Delivery of the attested original',
        ],
      },
    ],
    note:
      'Timelines depend on embassy queues, not on us. We give a realistic range and update you when the document moves, rather than repeating an optimistic date.',
    faq: [
      {
        q: 'Can you attest a document that was issued in another country?',
        a: 'Yes, but the chain starts there. The document normally needs its own foreign ministry and the UAE embassy in that country before MOFA in the UAE will stamp it. Send a photo of the document and we will confirm what is missing.',
      },
      {
        q: 'How long does attestation take?',
        a: 'A UAE-issued document can move in a few working days. A foreign degree often takes two to four weeks depending on the embassy. We quote a range after seeing the document, not before.',
      },
    ],
  },

  deira: {
    title: 'Typing Centre in Hor Al Anz, Deira | Qaaf Documents Clearing',
    description:
      'Typing centre near Abu Hail Metro, Deira. Visa, Emirates ID, labour, trade licence and attestation typing in Arabic and English. Walk in or send documents on WhatsApp.',
    eyebrow: 'Deira centre',
    h1: 'A typing centre you can<br>actually walk into.',
    lede:
      'Qaaf sits on Abu Hail Street in Hor Al Anz, a few minutes from Abu Hail Metro. If you live or work in Deira, the fastest route is usually to send the document first and collect the finished form later the same day.',
    points: [
      {
        title: 'Three minutes from Abu Hail Metro',
        body:
          'Shop M10, mezzanine floor, Al Habtoor Building, 257–261 Abu Hail Street. Green Line to Abu Hail, then a short walk — no taxi needed from the station.',
      },
      {
        title: 'Walk in without an appointment',
        body:
          'Saturday to Thursday, 9:00–19:00, and Friday 9:00–19:00. Sunday closed. Single forms are usually typed while you wait; longer chains are scheduled.',
      },
      {
        title: 'Serving Deira and the border',
        body:
          'Hor Al Anz, Abu Hail, Al Qusais, Al Nahda, Al Twar, Al Rigga and Muhaisnah — plus clients coming across from Sharjah who want the paperwork checked before submission.',
      },
    ],
    areasTitle: 'Areas we regularly serve',
    areas: [
      'Hor Al Anz',
      'Abu Hail',
      'Al Qusais',
      'Al Nahda',
      'Al Twar',
      'Al Rigga',
      'Muhaisnah',
      'Al Mamzar',
      'Sharjah border',
    ],
    localTitle: 'Why people in Deira use a typing centre',
    localBody:
      'Most government transactions in Dubai are submitted online, but the form still has to be right. A typing centre is where that happens: the activity, the sponsor details, the Arabic spelling and the fee category all have to match what the authority expects. Doing it once, correctly, is cheaper than doing it twice.',
    localList: [
      'Forms prepared in Arabic and English to the authority’s own format',
      'A person to ask when the portal rejects something',
      'Government fees shown separately, with the receipt',
      'Your documents not sent to a number you cannot visit',
    ],
    faq: [
      {
        q: 'Where exactly is the office?',
        a: 'Al Habtoor Building, 257–261 Abu Hail Street, Hor Al Anz East, Deira — shop M10 on the mezzanine floor. It is about a three-minute walk from Abu Hail Metro Station on the Green Line.',
      },
      {
        q: 'Do you have parking?',
        a: 'There is street parking around Abu Hail Street and paid parking near the building. Most clients come by metro, which is why the location matters more than the parking.',
      },
      {
        q: 'Can I send documents from Sharjah or another emirate?',
        a: 'Yes for typing and many submissions. Originals are only needed for transactions that require them, such as notarisation or biometrics, and we will say so before you travel.',
      },
    ],
  },

  about: {
    title: 'About Qaaf Documents Clearing Services | Deira, Dubai',
    description:
      'Licensed documents clearing and typing centre in Hor Al Anz, Deira. DET trade licence 1529320, rated 5.0 on Google, working in Arabic and English.',
    eyebrow: 'About',
    h1: 'A small office,<br>a straight answer.',
    lede:
      'Qaaf Documents Clearing Services opened in 2025 with one idea: the paperwork should be explained before it is charged for. We are licensed by Dubai’s Department of Economy and Tourism, we sit in Hor Al Anz, and we work in Arabic and English.',
    storyTitle: 'What we do differently',
    story: [
      'Most people arrive at a typing centre after something has already gone wrong — a rejected application, a fine, a deadline that moved. The useful thing at that moment is not a brochure, it is someone who can say which form applies, what it costs, and how long it takes.',
      'So the office runs on three habits: quote before starting, check before submitting, and hand back the receipt. If a transaction needs an authority we cannot submit to directly, we say that at the start rather than after payment.',
      'We are deliberately small. That means the person who types your form is the person you speak to, and the office is somewhere you can come back to if a portal behaves badly a week later.',
    ],
    values: [
      {
        title: 'Licensed, not informal',
        body:
          'Trade licence 1529320, issued by Dubai DET, with the activity to clear documents. Ask for it — any centre should be able to show one.',
      },
      {
        title: 'Quoted before charged',
        body:
          'Typing and service fees are agreed first. Government fees are passed through at cost and shown on the receipt.',
      },
      {
        title: 'Bilingual by default',
        body:
          'Arabic and English forms, checked against the authority’s format. One wrong field is the usual reason an application comes back.',
      },
      {
        title: 'Reachable after the fact',
        body:
          'A WhatsApp number and an office you can walk into, for the follow-up question that always comes two days later.',
      },
    ],
    factsTitle: 'Company details',
    facts: [
      ['Trade name', 'Qaaf Documents Clearing Services'],
      ['Trade licence', '1529320'],
      ['Issuing authority', 'Dubai Department of Economy and Tourism'],
      ['Legal form', 'Sole establishment'],
      ['Activity', 'Documents clearing services'],
      ['Licensed', '2025'],
      ['Office', 'Shop M10, Mezzanine, Al Habtoor Building, 257–261 Abu Hail Street, Hor Al Anz East, Deira, Dubai'],
      ['Languages', 'Arabic, English, Hindi, Urdu'],
    ],
  },

  contact: {
    title: 'Contact Qaaf Documents Clearing Services | Hor Al Anz, Deira',
    description:
      'Call +971 4 553 3042, WhatsApp +971 52 111 3478, or visit Shop M10, Al Habtoor Building, Abu Hail Street, Hor Al Anz, Deira, Dubai. Open Saturday to Thursday 9:00–19:00.',
    eyebrow: 'Contact',
    h1: 'Send the document.<br>We will tell you the rest.',
    lede:
      'A photo on WhatsApp is usually enough to confirm the form, the documents and the fee. If you would rather come in, the office is on Abu Hail Street in Hor Al Anz, three minutes from the metro.',
    formTitle: 'Request a quote',
    formFields: {
      name: 'Your name',
      phone: 'Phone or WhatsApp number',
      service: 'What do you need?',
      message: 'Details',
      messagePlaceholder:
        'For example: visa renewal for my wife, residence expires in two weeks.',
      submit: 'Send on WhatsApp',
    },
    formOptions: [
      'Visa or residency',
      'Emirates ID',
      'Labour or MOHRE',
      'Trade licence or business setup',
      'Attestation or MOFA',
      'Other document clearing',
    ],
    hoursTitle: 'Opening hours',
    hours: [
      ['Saturday – Thursday', '9:00 – 19:00'],
      ['Friday', '9:00 – 19:00'],
      ['Sunday', 'Closed'],
    ],
    note:
      'Government offices and some portals keep their own hours. If your transaction depends on one, message before travelling.',
  },

  footer: {
    blurb:
      'Licensed documents clearing and typing centre in Hor Al Anz, Deira — visas, Emirates ID, labour, trade licences and attestation, in Arabic and English.',
    servicesTitle: 'Services',
    companyTitle: 'Company',
    contactTitle: 'Contact',
    legal: 'Trade licence 1529320 · Dubai DET',
    disclaimer:
      'Qaaf Documents Clearing Services is a licensed documents clearing and typing centre. We are not a government body, and approval of any application rests with the relevant authority. Fees shown on request exclude government charges unless stated.',
    rights: 'All rights reserved.',
  },

  notFound: {
    title: 'Page not found | Qaaf Documents Clearing Services',
    h1: 'This page has moved.',
    body:
      'The link you followed does not exist. The services index is probably where you wanted to be.',
  },
};

// ---------------------------------------------------------------------------
// Arabic
// ---------------------------------------------------------------------------

const ar = {
  locale: 'ar_AE',
  dir: 'rtl',
  htmlLang: 'ar',
  switchLabel: 'English',
  brandLine: 'تخليص المعاملات والطباعة · ديرة، دبي',

  nav: {
    home: 'الرئيسية',
    services: 'الخدمات',
    visa: 'التأشيرات والهوية',
    business: 'تأسيس الأعمال',
    attestation: 'التصديق',
    deira: 'فرع ديرة',
    about: 'من نحن',
    contact: 'اتصل بنا',
    menu: 'القائمة',
    close: 'إغلاق',
  },

  ui: {
    call: 'اتصال',
    callNow: 'اتصل 04 553 3042',
    whatsapp: 'واتساب',
    whatsappQuote: 'اطلب عرض سعر على واتساب',
    sendWhatsApp: 'أرسل على واتساب',
    directions: 'الاتجاهات',
    openMaps: 'افتح في خرائط جوجل',
    readMore: 'اقرأ المزيد',
    allServices: 'جميع الخدمات',
    talkToUs: 'تواصل معنا',
    backHome: 'العودة للرئيسية',
    skip: 'تجاوز إلى المحتوى',
    hours: 'ساعات العمل',
    address: 'العنوان',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    licence: 'الرخصة التجارية',
    follow: 'إنستغرام',
    openNow: 'مفتوح الآن',
    closedNow: 'مغلق',
    closesAt: 'يغلق',
    opensAt: 'يفتح',
    copyAddress: 'نسخ العنوان',
    copied: 'تم نسخ العنوان',
    askAbout: 'اسأل عن هذه الخدمة',
    checkedCount: 'محدد',
    faqLede:
      'إن لم يكن سؤالك هنا، أرسله على واتساب مع نوع المستند. ستحصل على النموذج والرسوم وقائمة الأوراق في رد واحد.',
    faqMessage: 'مرحباً قاف، لدي سؤال عن مستنداتي.',
    faqEyebrow: 'أسئلة',
    formNote:
      'هذا النموذج يفتح واتساب مع بياناتك جاهزة. لا يتم تخزين أي شيء على هذا الموقع.',
  },

  trust: {
    rating: '٥٫٠ على جوجل',
    ratingShort: '٥٫٠',
    ratingLabel: 'تقييم جوجل',
    reviews: '١٦ تقييماً على جوجل',
    licensed: 'مرخّص من دائرة الاقتصاد في دبي',
    licenceShort: 'الرخصة التجارية',
    bilingual: 'العربية والإنجليزية',
    languageShort: 'اللغات',
    location: 'هور العنز، ديرة',
    districtShort: 'المنطقة',
    metroShort: 'مترو أبو هيل',
    metroValue: '٣ دقائق',
  },

  authorities: {
    title: 'الجهات التي نتعامل معها',
    note: 'طباعة وتقديم ومتابعة عبر القناة التي تعتمدها كل جهة.',
    items: [
      { code: 'الإقامة', name: 'التأشيرات وتصاريح الدخول' },
      { code: 'الهوية', name: 'الهوية الإماراتية' },
      { code: 'الموارد البشرية', name: 'العمل وتصاريحه' },
      { code: 'الاقتصاد', name: 'الرخص التجارية' },
      { code: 'الخارجية', name: 'التصديق' },
      { code: 'صحة دبي', name: 'الطباعة الطبية' },
      { code: 'إيجاري', name: 'تسجيل الإيجار' },
      { code: 'المحاكم', name: 'التوثيق والوكالات' },
    ],
  },

  home: {
    title: 'قاف لتخليص المعاملات | مركز طباعة في ديرة، دبي',
    description:
      'مركز طباعة وتخليص معاملات مرخّص في هور العنز، ديرة. التأشيرات والهوية الإماراتية وعقود العمل والرخص والتصديق. عرض سعر على واتساب.',
    eyebrow: 'مرخّص من دائرة الاقتصاد · رخصة ١٥٢٩٣٢٠',
    h1: 'معاملاتك في دبي،<br>منجزة كما يجب.',
    lede:
      'قاف لتخليص المعاملات مركز مرخّص للطباعة والعلاقات الحكومية في هور العنز، ديرة. التأشيرات، الهوية الإماراتية، عقود العمل، الرخص التجارية والتصديق — تُطبع بالعربية والإنجليزية، وتُراجع حسب نموذج الجهة، وتُقدَّم نيابة عنك.',
    ctaPrimary: 'اطلب عرض سعر على واتساب',
    ctaSecondary: 'اتصل 04 553 3042',
    micro:
      'زرنا في المكتب، أو أرسل صورة مستندك على واتساب · كثير من النماذج البسيطة تُنجز في نفس الوقت',
    heroCardTitle: 'قائمة الخدمات',
    heroCardItems: [
      'تجديد وإلغاء التأشيرة',
      'تجديد الهوية الإماراتية',
      'طباعة عقد العمل',
      'تجديد الرخصة التجارية',
      'تصديق وزارة الخارجية',
      'وكالة قانونية',
    ],
    heroCardFoot: 'السبت–الخميس ٩:٠٠–١٩:٠٠ · الجمعة ٩:٠٠–١٩:٠٠ · الأحد مغلق',
    ticket: {
      feeLabel: 'رسوم الطباعة',
      feeValue: 'تُحدد قبل البدء',
      stamp: 'قاف',
      cta: 'راسلنا على واتساب',
    },

    servicesTitle: 'ما نتولاه',
    servicesLede:
      'شبّاك واحد للأوراق التي تفصلك عن الموافقة الحكومية. إن لم تكن متأكداً من النموذج المطلوب، أرسل لنا المستند ونخبرك.',
    servicesCta: 'جميع الخدمات وقوائم المستندات',

    stepsTitle: 'كيف نعمل',
    stepsLede: 'ثلاث خطوات، دون أن تحتاج لفهم الطوابير بنفسك.',
    steps: [
      {
        title: 'أرسل أو أحضر',
        body:
          'أرسل صورة واضحة على واتساب أو زر المكتب في هور العنز. تعرف رسوم الطباعة قبل البدء، والرسوم الحكومية تُذكر منفصلة بسعر التكلفة.',
      },
      {
        title: 'نطبع ونراجع',
        body:
          'تُعدّ النماذج بالعربية والإنجليزية حسب نموذج الجهة، ثم تُراجع سطراً سطراً لتفادي الأخطاء الصغيرة التي تُرجع المعاملة.',
      },
      {
        title: 'تقديم مع الإيصال',
        body:
          'نقدّم المعاملة عبر القناة الصحيحة — الإقامة والأجانب/أمريكان، الهوية، الموارد البشرية/توجيه، الاقتصاد أو البلدية — ونسلّمك الإيصال ورقم المرجع.',
      },
    ],

    whyTitle: 'لماذا يبقى عملاؤنا مع قاف',
    whyLede: 'مكتب صغير في ديرة، مرخّص منذ ٢٠٢٥، بتقييم ٥٫٠ من عملائه.',
    why: [
      {
        title: 'مرخّص وقريب',
        body:
          'مسجّل في دائرة الاقتصاد برخصة تجارية ١٥٢٩٣٢٠، بمكتب يمكنك زيارته — لا رقم واتساب يختفي.',
      },
      {
        title: 'عربي وإنجليزي من المرة الأولى',
        body:
          'يُعدّ كل نموذج باللغتين حيث تطلب الجهة ذلك، ويُراجع قبل التقديم. أكثر حالات الرفض سببها حقل واحد خاطئ.',
      },
      {
        title: 'نفس اليوم عندما يمكن',
        body:
          'معظم النماذج البسيطة تُنجز في نفس الوقت. المعاملات الأطول — التصديق، الترخيص، الفحص الطبي — تحصل فيها على مدة واقعية، لا وعد.',
      },
      {
        title: 'رسوم واضحة',
        body:
          'رسوم الطباعة تُحدد قبل البدء، والرسوم الحكومية تُمرَّر بسعر التكلفة مع الإيصال، فلا تظهر مبالغ لاحقاً.',
      },
    ],

    reviewsTitle: 'ماذا يقول العملاء',
    reviewsLede: 'تقييم ٥٫٠ من ٥ عبر ١٦ تقييماً على جوجل.',
    reviewsCta: 'اقرأ التقييمات على جوجل',
    reviews: [
      {
        quote: 'خدمتهم لا يعلى عليها. أعجبت كثيراً باحترافيتهم.',
        name: 'تقييم على جوجل',
        meta: 'سبتمبر ٢٠٢٥',
      },
      {
        quote:
          'خدمة ممتازة! الفريق متعاون وجعل العملية سهلة جداً — أنصح بهم بكل سرور.',
        name: 'تقييم على جوجل',
        meta: 'سبتمبر ٢٠٢٥',
      },
      {
        quote:
          'زرت المكتب وكانت الخدمة رائعة وسريعة ومتجاوبة. أنصح الجميع بالتعامل معهم.',
        name: 'تقييم على جوجل',
        meta: 'سبتمبر ٢٠٢٥',
      },
    ],

    visitTitle: 'تجدنا في هور العنز',
    visitBody:
      'محل M10 في الطابق الميزانين، مبنى الحبتور، شارع أبو هيل — على نحو ثلاث دقائق سيراً من محطة مترو أبو هيل. الزيارة دون موعد مرحّب بها، وإرسال المستندات مسبقاً على واتساب يوفّر عليك الرحلة.',
    faqTitle: 'أسئلة شائعة',
    faq: [
      {
        q: 'ماذا يفعل مركز الطباعة فعلياً؟',
        a: 'يُعدّ النماذج الرسمية ويقدّمها — التأشيرة، الهوية الإماراتية، العمل، الترخيص والتصديق — بالصيغة التي تطلبها كل جهة. أنت تحضر المستندات، والمركز يتولى الإدخال والصياغة العربية والإنجليزية والمراجعة والتقديم.',
      },
      {
        q: 'هل يجب أن أحضر شخصياً؟',
        a: 'للطباعة ومعظم التقديمات لا. أرسل صوراً واضحة على واتساب ونؤكد النموذج والرسوم والمستندات. الأصل مطلوب فقط حيث تشترطه الجهة — التوثيق أو البصمة أو وزارة الخارجية.',
      },
      {
        q: 'كم التكلفة؟',
        a: 'رسوم الطباعة تعتمد على النموذج وعدد الصفحات. تعرف الرقم قبل البدء، والرسوم الحكومية تُذكر منفصلة بسعر التكلفة مع الإيصال. ولا رسوم على السؤال.',
      },
      {
        q: 'كم يستغرق الإنجاز؟',
        a: 'معظم النماذج البسيطة تُطبع في نفس الوقت. المعاملات متعددة الخطوات — التصديق، رخصة جديدة، الفحص الطبي — تعتمد على الجهة وتحصل فيها على نطاق واقعي مسبقاً لا وعد.',
      },
      {
        q: 'ماذا يجب أن أحضر؟',
        a: 'صورة الجواز، والتأشيرة أو تصريح الدخول الحالي، وأي مستندات كفيل أو شركة تنطبق. ولتجديد الهوية، البطاقة الحالية. راسلنا أولاً لنؤكد القائمة بدقة لتكتفي بزيارة واحدة.',
      },
      {
        q: 'هل أنتم مرخّصون، وما الجهات التي تتعاملون معها؟',
        a: 'قاف مرخّص من دائرة الاقتصاد في دبي برخصة تجارية ١٥٢٩٣٢٠. نعدّ ونقدّم لدى الإقامة والأجانب/أمريكان (الإقامة)، الهوية (الهوية الإماراتية)، الموارد البشرية/توجيه (العمل)، الاقتصاد والبلدية (الترخيص)، ووزارة الخارجية (التصديق).',
      },
    ],
    ctaTitle: 'أخبرنا بما تحتاج طباعته',
    ctaBody:
      'أرسل نوع المستند على واتساب وستحصل على النموذج المطلوب والمدة وعرض السعر — عادة خلال ساعة في أوقات العمل.',
    ctaNote: 'لا رسوم على عرض السعر. الرسوم الحكومية تُذكر منفصلة دائماً.',
  },

  services: {
    title: 'الخدمات وقوائم المستندات | قاف لتخليص المعاملات، ديرة',
    description:
      'طباعة التأشيرات والهوية وعقود العمل والرخص التجارية والتصديق وتخليص المعاملات في ديرة، دبي. قوائم المستندات وعرض سعر على واتساب.',
    eyebrow: 'الخدمات',
    h1: 'كل ما يحتاجه النموذج،<br>في مكان واحد.',
    lede:
      'نتولى النماذج الفردية والمعاملات الكاملة. أدناه ما تغطيه كل خدمة وما يجب إحضاره، حتى لا تحتاج لأكثر من زيارة واحدة. إن لم تجد حالتك، اسأل — فمعظم أوراق ديرة تمرّ بهذا المكتب.',
    items: [
      {
        id: 'visa',
        icon: 'passport',
        title: 'طباعة التأشيرات والإقامة',
        tag: 'الإقامة والأجانب · أمريكان',
        body:
          'طلبات الإقامة الجديدة والتجديد والإلغاء وتغيير الوضع والكفالة العائلية، تُطبع حسب نموذج الإقامة والأجانب وتُقدَّم عبر القناة المعتمدة.',
        list: [
          'طلبات الإقامة الجديدة وتأشيرات الدخول',
          'تجديد وإلغاء التأشيرة وتغيير الوضع',
          'كفالة الزوج/الزوجة والأبناء والوالدين',
          'إرشاد حول تمديد سنة للأرامل والمطلقات',
          'دعم تأشيرة الدخول وتعديل الوضع',
        ],
        bring:
          'صورة الجواز، التأشيرة أو تصريح الدخول الحالي، جواز الكفيل وتأشيرته، صور الهوية الإماراتية، وصور شخصية عند الحاجة.',
        link: { label: 'تفاصيل التأشيرات والهوية', href: 'visa-emirates-id' },
      },
      {
        id: 'eid',
        icon: 'id',
        title: 'طباعة الهوية الإماراتية',
        tag: 'هيئة الهوية',
        body:
          'طلبات الهوية الجديدة والتجديد والبدل والتالف عبر نظام الهوية، مع إرشاد لموعد البصمة عند الحاجة.',
        list: [
          'طلبات الهوية الإماراتية الجديدة',
          'التجديد والبدل (فقدان، تلف، سرقة)',
          'تصحيح البيانات وتحديث الحالة',
          'إرشاد موعد البصمة',
        ],
        bring:
          'الجواز، صفحة التأشيرة، الهوية الحالية عند التجديد، وتقرير الشرطة في حالة الفقدان.',
        link: { label: 'تفاصيل التأشيرات والهوية', href: 'visa-emirates-id' },
      },
      {
        id: 'labour',
        icon: 'briefcase',
        title: 'العمل والموارد البشرية / توجيه',
        tag: 'الموارد البشرية',
        body:
          'عروض العمل، عقود العمل، تصاريح العمل، تعديل العقود والحصص، بالصيغة ثنائية اللغة التي تطلبها الوزارة.',
        list: [
          'عروض العمل وعقود العمل',
          'تصاريح العمل الجديدة وطلبات الحصة',
          'تعديل العقود وتجديدها',
          'معاملات توجيه وتسهيل',
          'دعم إلغاء العمل',
        ],
        bring:
          'الرخصة التجارية وبطاقة المنشأة، صورة جواز الموظف وتأشيرته، وعرض العمل الموقّع.',
      },
      {
        id: 'business',
        icon: 'building',
        title: 'الرخصة التجارية وتأسيس الأعمال',
        tag: 'دائرة الاقتصاد',
        body:
          'رخص تجارية جديدة، تجديد، تعديل، موافقة مبدئية وإيجاري — من رخصة مبتدئة إلى شركة تعمل بحساب بنكي.',
        list: [
          'رخصة تجارية جديدة — البر الرئيسي والمناطق الحرة',
          'تجديد الرخصة وتعديلها',
          'الموافقة المبدئية واختيار الاسم والنشاط',
          'إيجاري وتسجيل عقد الإيجار',
          'دعم فتح الحساب البنكي',
        ],
        bring:
          'صور جوازات وتأشيرات المالكين، الاسم التجاري والأنشطة المقترحة، عقد الإيجار أو إيجاري، والرخصة الحالية عند التجديد.',
        link: { label: 'تفاصيل تأسيس الأعمال', href: 'business-setup' },
      },
      {
        id: 'attestation',
        icon: 'stamp',
        title: 'التصديق ووزارة الخارجية',
        tag: 'وزارة الخارجية · السفارات',
        body:
          'المستندات التعليمية والتجارية والشخصية عبر تصديق السفارة ووزارة الخارجية — سلسلة التصديق الكاملة للاستخدام داخل الدولة أو خارجها.',
        list: [
          'الشهادات الجامعية والدبلومات وكشوف الدرجات',
          'شهادات الزواج والولادة والصحيفة الجنائية',
          'الوكالات وعقد التأسيس والفواتير والاتفاقيات',
          'تصديق السفارات وختم وزارة الخارجية',
          'صور طبق الأصل مصدّقة عند الطلب',
        ],
        bring:
          'المستند الأصلي، وأختام التصديق السابقة المكتملة، وصورة الجواز والتأشيرة.',
        link: { label: 'تفاصيل التصديق', href: 'attestation' },
      },
      {
        id: 'pro',
        icon: 'folder',
        title: 'تخليص المعاملات والعلاقات الحكومية',
        tag: 'خدمات PRO',
        body:
          'المعاملات التي لا تنتمي لشبّاك واحد: الوكالات، التوثيق، الطباعة الطبية، الجواز المفقود، ومستندات الشركة من البداية للنهاية.',
        list: [
          'إعداد الوكالة وعقد التأسيس',
          'تنسيق التوثيق والترجمة القانونية',
          'الطباعة الطبية لصحة دبي ودعم الفحص الطبي',
          'إرشاد الإبلاغ عن جواز مفقود',
          'تخليص مستندات الشركة وتجديدها',
        ],
        bring: 'يختلف حسب المعاملة — أرسل المستند على واتساب ونؤكد لك القائمة.',
      },
    ],
    checklistTitle: 'قائمة واحدة، زيارة واحدة',
    checklistBody:
      'أكثر سبب لإرجاع معاملة في ديرة هو صفحة ناقصة، لا نموذج خاطئ. راسلنا قبل الحضور ونؤكد لك ما تحتاج إحضاره لحالتك.',
    checklist: {
      title: 'جهّز قائمة مستنداتك',
      lede:
        'حدّد ما لديك بالفعل. وكل ما يبقى غير محدد هو ما سنخبرك بإحضاره — أرسل القائمة على واتساب ونؤكدها في رد واحد.',
      select: 'حدّد المستندات التي لديك',
      cta: 'أرسل قائمتي',
      clear: 'مسح الكل',
      none: 'حدّد مستنداً واحداً على الأقل أولاً.',
      countLabel: 'مستندات محددة',
      messageTitle: 'مرحباً قاف، هذه المستندات التي لديّ بالفعل:',
      messageTail: 'أرجو إخباري بما ينقص لحالتي.',
      groups: [
        {
          name: 'الهوية',
          items: [
            'صورة الجواز (صفحة الصورة)',
            'صفحة التأشيرة أو تصريح الدخول',
            'الهوية الإماراتية (الوجهان)',
            'جواز الكفيل وتأشيرته',
            'صورة شخصية حديثة',
          ],
        },
        {
          name: 'الشركة',
          items: ['صورة الرخصة التجارية', 'بطاقة المنشأة', 'عقد الإيجار أو إيجاري', 'عقد التأسيس أو قائمة الشركاء'],
        },
        {
          name: 'التصديق',
          items: ['المستند الأصلي', 'أختام التصديق السابقة', 'الترجمة العربية عند الطلب'],
        },
        {
          name: 'المعاملة',
          items: ['رقم الطلب أو الإيصال', 'نتيجة الفحص الطبي', 'عرض عمل أو عقد موقّع'],
        },
      ],
    },
    faqTitle: 'أسئلة عن الخدمات',
    faq: [
      {
        q: 'لا أعرف أي نموذج أحتاج. هل تخبرونني؟',
        a: 'نعم — وهذا معظم عملنا. أرسل صورة المستند أو اشرح الحالة، ونسمّي النموذج والجهة والرسوم قبل البدء.',
      },
      {
        q: 'هل تطبعون فقط أم تقدّمون أيضاً؟',
        a: 'الاثنان. تُطبع النماذج حسب صيغة الجهة وتُقدَّم عبر القناة المناسبة، وتستلم الإيصال ورقم المرجع.',
      },
      {
        q: 'هل تتولون معاملة تشمل عدة جهات؟',
        a: 'غالباً. الشركة الجديدة مثلاً تمرّ بالاسم التجاري، الموافقة المبدئية، الرخصة، إيجاري، ثم الإقامة للتأشيرات. نوضح الترتيب وأي خطوة تعطّل التالية.',
      },
      {
        q: 'هل تعملون بالعربية؟',
        a: 'نعم. يعمل المكتب بالعربية والإنجليزية والهندية والأردية، وكل نموذج حكومي يُعدّ باللغة والتنسيق الذي تطلبه الجهة.',
      },
    ],
  },

  visa: {
    title: 'طباعة التأشيرات والهوية الإماراتية في ديرة | قاف',
    description:
      'تجديد وإلغاء التأشيرة، كفالة العائلة، وطباعة الهوية الإماراتية في ديرة، دبي. نماذج الإقامة والهوية بالعربية والإنجليزية مع إرشاد البصمة.',
    eyebrow: 'التأشيرات والهوية',
    h1: 'تأشيرتك وهويّتك،<br>دون لف ودوران.',
    lede:
      'معاملات الإقامة تعاقب الأخطاء الصغيرة — اسم لا يطابق الجواز، تصريح دخول منتهٍ، صفحة كفيل ناقصة. يعدّ قاف طلبات التأشيرة والهوية حسب نموذج الجهة ويقدّمها عبر القناة الصحيحة.',
    blocks: [
      {
        title: 'طباعة التأشيرات (الإقامة والأجانب / أمريكان)',
        body:
          'إقامات جديدة، تجديد، إلغاء، تغيير وضع وكفالة عائلية. نؤكد القناة التي تنتمي إليها حالتك قبل الطباعة، حتى لا تُرسل إلى شبّاك لا يخدمك.',
        list: [
          'طلبات الإقامة الجديدة وتأشيرات الدخول',
          'تجديد وإلغاء التأشيرة وتغيير الوضع',
          'كفالة الزوج/الزوجة والأبناء والوالدين',
          'إرشاد تمديد سنة للأرامل والمطلقات',
          'استفسارات التأخير والغرامات مع وضع الرسوم الحالي',
        ],
      },
      {
        title: 'طباعة الهوية الإماراتية',
        body:
          'طلبات جديدة وتجديد وبدل وتصحيح بيانات. وحيث تُطلب البصمة، نوضح لك ما يحدث في مركز الهوية بدلاً من أن تكتشفه عند الباب.',
        list: [
          'طلبات الهوية الجديدة',
          'التجديد والبدل',
          'بدل الفقدان أو التلف أو السرقة — تقرير الشرطة أولاً',
          'تصحيح البيانات وتحديث الحالة',
        ],
      },
    ],
    bringTitle: 'ما يجب إحضاره',
    bring: [
      'صورة الجواز — صفحة الصورة وصفحة التأشيرة',
      'التأشيرة أو تصريح الدخول أو ورقة الإلغاء الحالية',
      'صور جواز الكفيل وتأشيرته وهويته',
      'الهوية الإماراتية الحالية عند التجديد',
      'صورة شخصية حديثة حيث يطلبها النموذج',
      'تقرير شرطة في حالة الفقدان أو السرقة',
    ],
    note:
      'أرسل صور المستندات على واتساب أولاً. نراجعها ونخبرك بما ينقص قبل أن تتكبد عناء الحضور.',
    faq: [
      {
        q: 'هل يمكن إلغاء تأشيرة وإصدار أخرى في الأسبوع نفسه؟',
        a: 'غالباً نعم، إذا اكتمل الإلغاء أولاً وكانت مستندات الكفيل الجديد جاهزة. الترتيب أهم من السرعة، وسنوضح لك أي خطوة تعطّل الأخرى.',
      },
      {
        q: 'اسمي مكتوب بشكل مختلف في الجواز والهوية. هل يمكن تصحيحه؟',
        a: 'نعم — هذا تصحيح بيانات وليس طلباً جديداً. أحضر الجواز والهوية الحالية، ويُصحح الاسم ليطابق الجواز تماماً.',
      },
      {
        q: 'هل يجب الحضور إلى ديرة شخصياً؟',
        a: 'للطباعة والتقديم غالباً لا — واتساب يكفي في معظم الحالات. الأصل مطلوب حيث تشترطه الجهة، مثل التوثيق أو البصمة.',
      },
    ],
  },

  business: {
    title: 'الرخصة التجارية وتأسيس الأعمال في دبي | قاف',
    description:
      'رخصة تجارية جديدة، تجديد، تعديل ودعم إيجاري في دبي. رخص مبتدئة، اختيار النشاط، وإرشاد فتح الحساب البنكي — مركز طباعة مرخّص في ديرة.',
    eyebrow: 'تأسيس الأعمال',
    h1: 'من الاسم التجاري<br>إلى شركة تعمل.',
    lede:
      'التأسيس في دبي سلسلة لا نموذج واحد: الاسم، النشاط، الشكل القانوني، العقد، الرخصة، ثم التأشيرات والبنك. يمشي قاف معك في هذه السلسلة ويطبع كل مرحلة حسب نموذج دائرة الاقتصاد.',
    blocks: [
      {
        title: 'البداية',
        body:
          'الرخصة المبتدئة بمزيج أنشطة مناسب هي عادةً أرخص طريق للعمل بشكل قانوني وإصدار الفواتير. نوضح لك ما تمنحه الرخصة وما لا تمنحه — بما في ذلك الفرق بين الرخصة وتأشيرة الإقامة.',
        list: [
          'البحث عن الاسم التجاري وحجزه',
          'اختيار النشاط — حتى ١٠ أنشطة في باقات البداية',
          'إرشاد البر الرئيسي أو المنطقة الحرة حسب نشاطك',
          'الموافقة المبدئية وإصدار الرخصة',
          'إيجاري وتسجيل عقد الإيجار',
        ],
      },
      {
        title: 'بعد التشغيل',
        body:
          'التجديد والتعديل وتغيير الشركاء والمستندات التي تطلبها البنوك. وإن كنت خارج الدولة، يمكن إنجاز معظم ذلك عن بُعد بوكالة.',
        list: [
          'تجديد الرخصة التجارية وتعديلها',
          'تغيير النشاط والشركاء',
          'تعديل عقد التأسيس وتوثيقه',
          'وكالة للمالكين خارج الدولة',
          'دعم فتح الحساب البنكي للشركة',
        ],
      },
    ],
    note:
      'الرسوم الحكومية تتغير وتختلف حسب النشاط والجهة. نحدد رسوم الطباعة والخدمة أولاً، وندرج الرسوم الحكومية منفصلة بسعر التكلفة قبل أي دفع.',
    faq: [
      {
        q: 'كم تكلفة الرخصة التجارية؟',
        a: 'تختلف حسب النشاط والجهة والحاجة لمكتب فعلي. اطلب تفصيلاً مكتوباً: رسوم الرخصة ورسوم الطباعة والرسوم الحكومية يجب أن تكون بنوداً منفصلة تراها قبل الالتزام.',
      },
      {
        q: 'هل يمكنني إدارة الشركة دون الإقامة في الدولة؟',
        a: 'غالباً نعم، بالهيكل المناسب ووكالة للمعاملات المحلية. التأشيرات والبنوك لها متطلباتها، وسنوضحها قبل اختيار الباقة.',
      },
    ],
  },

  attestation: {
    title: 'تصديق وزارة الخارجية والسفارات في دبي | قاف',
    description:
      'تصديق الشهادات وعقود الزواج والولادة والمستندات التجارية في دبي — السفارة ووزارة الخارجية والصور المصدّقة، بمدة واقعية للسلسلة الكاملة.',
    eyebrow: 'التصديق',
    h1: 'مستندات تعبر<br>بين الدول.',
    lede:
      'التصديق سلسلة، وتخطي حلقة يعني البدء من جديد. يرسم قاف السلسلة لمستندك ووجهته، ثم يحرّكها عبر السفارة ووزارة الخارجية.',
    blocks: [
      {
        title: 'ما نصدّقه',
        body:
          'مستندات تعليمية وشخصية وتجارية، للاستخدام داخل الدولة أو خارجها. المسار يختلف حسب الدولة، فالوجهة لا تقل أهمية عن المستند.',
        list: [
          'الشهادات الجامعية والدبلومات وكشوف الدرجات',
          'شهادات الزواج والولادة والصحيفة الجنائية',
          'الوكالات وعقد التأسيس والفواتير والاتفاقيات',
          'المستندات التجارية لتسجيل شركة في الخارج',
          'صور طبق الأصل مصدّقة',
        ],
      },
      {
        title: 'كيف تسير السلسلة',
        body:
          'معظم المستندات تحتاج وزارة خارجية بلد الإصدار، ثم سفارة الدولة هناك، ثم وزارة الخارجية في الإمارات. بعض الدول تضيف ترجمة أو توثيقاً. نوضح الترتيب والأختام الموجودة لديك قبل تحديد السعر.',
        list: [
          'التحقق من الأختام الموجودة على المستند',
          'الترجمة حيث تشترط الجهة العربية',
          'تصديق السفارة في بلد الإصدار',
          'تصديق وزارة الخارجية في الإمارات',
          'تسليم الأصل المصدّق',
        ],
      },
    ],
    note:
      'المدة تعتمد على طوابير السفارات لا علينا. نعطيك نطاقاً واقعياً ونحدّثك عند تحرك المستند، بدلاً من تكرار موعد متفائل.',
    faq: [
      {
        q: 'هل تصدّقون مستنداً صادراً في دولة أخرى؟',
        a: 'نعم، لكن السلسلة تبدأ هناك. يحتاج المستند عادةً وزارة خارجية تلك الدولة وسفارة الإمارات فيها قبل أن تختمه وزارة الخارجية هنا. أرسل صورة المستند ونؤكد ما ينقص.',
      },
      {
        q: 'كم يستغرق التصديق؟',
        a: 'المستند الصادر في الإمارات قد ينجز في أيام عمل قليلة. الشهادة الأجنبية غالباً بين أسبوعين وأربعة حسب السفارة. نحدد النطاق بعد رؤية المستند لا قبله.',
      },
    ],
  },

  deira: {
    title: 'مركز طباعة في هور العنز، ديرة | قاف لتخليص المعاملات',
    description:
      'مركز طباعة قريب من مترو أبو هيل، ديرة. طباعة التأشيرات والهوية والعمل والرخصة التجارية والتصديق بالعربية والإنجليزية. زرنا أو أرسل المستندات على واتساب.',
    eyebrow: 'فرع ديرة',
    h1: 'مركز طباعة<br>يمكنك زيارته فعلاً.',
    lede:
      'يقع قاف في شارع أبو هيل بهور العنز، على دقائق من مترو أبو هيل. وإن كنت تعمل أو تسكن في ديرة، فأسرع طريق غالباً إرسال المستند أولاً واستلام النموذج في اليوم نفسه.',
    points: [
      {
        title: 'ثلاث دقائق من مترو أبو هيل',
        body:
          'محل M10، الطابق الميزانين، مبنى الحبتور، ٢٥٧–٢٦١ شارع أبو هيل. الخط الأخضر إلى أبو هيل ثم مشي قصير — دون حاجة لتاكسي من المحطة.',
      },
      {
        title: 'زيارة دون موعد',
        body:
          'السبت إلى الخميس ٩:٠٠–١٩:٠٠، والجمعة ٩:٠٠–١٩:٠٠. الأحد مغلق. النماذج البسيطة تُنجز عادة في نفس الوقت، والمعاملات الأطول تُجدول.',
      },
      {
        title: 'نخدم ديرة والحدود',
        body:
          'هور العنز، أبو هيل، القصيص، النهدة، الطوار، الرقة والمحيصنة — وعملاء يأتون من الشارقة لمراجعة الأوراق قبل التقديم.',
      },
    ],
    areasTitle: 'مناطق نخدمها بانتظام',
    areas: [
      'هور العنز',
      'أبو هيل',
      'القصيص',
      'النهدة',
      'الطوار',
      'الرقة',
      'المحيصنة',
      'الممزر',
      'حدود الشارقة',
    ],
    localTitle: 'لماذا يستخدم أهل ديرة مركز طباعة',
    localBody:
      'معظم معاملات دبي تُقدَّم إلكترونياً، لكن النموذج يجب أن يكون صحيحاً. مركز الطباعة هو مكان ذلك: النشاط، بيانات الكفيل، الإملاء العربي وفئة الرسوم يجب أن تطابق ما تتوقعه الجهة. الإنجاز مرة واحدة صحيحاً أرخص من مرتين.',
    localList: [
      'نماذج بالعربية والإنجليزية حسب نموذج الجهة نفسه',
      'شخص تسأله عند رفض البوابة الإلكترونية',
      'الرسوم الحكومية منفصلة ومع الإيصال',
      'مستنداتك لا تُرسل إلى رقم لا تستطيع زيارته',
    ],
    faq: [
      {
        q: 'أين المكتب بالتحديد؟',
        a: 'مبنى الحبتور، ٢٥٧–٢٦١ شارع أبو هيل، هور العنز شرق، ديرة — محل M10 في الطابق الميزانين. يبعد نحو ثلاث دقائق سيراً عن محطة مترو أبو هيل على الخط الأخضر.',
      },
      {
        q: 'هل توجد مواقف سيارات؟',
        a: 'توجد مواقف على الشارع حول أبو هيل ومواقف مدفوعة قرب المبنى. معظم العملاء يأتون بالمترو، ولهذا الموقع أهم من المواقف.',
      },
      {
        q: 'هل أستطيع الإرسال من الشارقة أو إمارة أخرى؟',
        a: 'نعم للطباعة وكثير من التقديمات. الأصل مطلوب فقط للمعاملات التي تشترطه، مثل التوثيق أو البصمة، وسنخبرك قبل أن تسافر.',
      },
    ],
  },

  about: {
    title: 'من نحن | قاف لتخليص المعاملات، ديرة، دبي',
    description:
      'مركز مرخّص لتخليص المعاملات والطباعة في هور العنز، ديرة. رخصة تجارية ١٥٢٩٣٢٠ من دائرة الاقتصاد، تقييم ٥٫٠ على جوجل، بالعربية والإنجليزية.',
    eyebrow: 'من نحن',
    h1: 'مكتب صغير،<br>وجواب صريح.',
    lede:
      'افتتح قاف لتخليص المعاملات أبوابه في ٢٠٢٥ بفكرة واحدة: أن تُشرح المعاملة قبل أن يُطلب مقابلها. نحن مرخّصون من دائرة الاقتصاد والسياحة في دبي، ومكتبنا في هور العنز، ونعمل بالعربية والإنجليزية.',
    storyTitle: 'ما نفعله بشكل مختلف',
    story: [
      'يصل معظم الناس إلى مركز الطباعة بعد أن حدث خطأ — طلب مرفوض، غرامة، أو موعد تحرّك. المفيد في تلك اللحظة ليس كتيّباً، بل شخص يستطيع أن يقول أي نموذج ينطبق، وكم يكلف، وكم يستغرق.',
      'لذلك يقوم المكتب على ثلاث عادات: عرض السعر قبل البدء، والمراجعة قبل التقديم، وتسليم الإيصال. وإن كانت المعاملة تحتاج جهة لا نقدّم إليها مباشرة، نقول ذلك في البداية لا بعد الدفع.',
      'نحن صغار بقصد. أي أن من يطبع نموذجك هو من تتحدث إليه، والمكتب مكان يمكنك العودة إليه إن تعطّلت بوابة إلكترونية بعد أسبوع.',
    ],
    values: [
      {
        title: 'مرخّص، لا عشوائي',
        body:
          'رخصة تجارية ١٥٢٩٣٢٠ من دائرة الاقتصاد، بنشاط تخليص المعاملات. اطلبها — أي مركز يجب أن يستطيع إظهارها.',
      },
      {
        title: 'سعر قبل الدفع',
        body:
          'رسوم الطباعة والخدمة تُتفق أولاً، والرسوم الحكومية تُمرَّر بسعر التكلفة وتظهر في الإيصال.',
      },
      {
        title: 'باللغتين افتراضياً',
        body:
          'نماذج عربية وإنجليزية تُراجع حسب نموذج الجهة. حقل واحد خاطئ هو السبب المعتاد لإرجاع الطلب.',
      },
      {
        title: 'متاح بعد الإنجاز',
        body:
          'رقم واتساب ومكتب يمكنك زيارته، للسؤال الذي يأتي دائماً بعد يومين.',
      },
    ],
    factsTitle: 'بيانات الشركة',
    facts: [
      ['الاسم التجاري', 'قاف لتخليص المعاملات'],
      ['الرخصة التجارية', '١٥٢٩٣٢٠'],
      ['الجهة المصدرة', 'دائرة الاقتصاد والسياحة – دبي'],
      ['الشكل القانوني', 'مؤسسة فردية'],
      ['النشاط', 'خدمات تخليص المعاملات'],
      ['سنة الترخيص', '٢٠٢٥'],
      ['المكتب', 'محل M10، الميزانين، مبنى الحبتور، ٢٥٧–٢٦١ شارع أبو هيل، هور العنز شرق، ديرة، دبي'],
      ['اللغات', 'العربية، الإنجليزية، الهندية، الأردية'],
    ],
  },

  contact: {
    title: 'اتصل بقاف لتخليص المعاملات | هور العنز، ديرة',
    description:
      'اتصل ‎+971 4 553 3042‎ أو واتساب ‎+971 52 111 3478‎، أو زر محل M10، مبنى الحبتور، شارع أبو هيل، هور العنز، ديرة، دبي. السبت إلى الخميس ٩:٠٠–١٩:٠٠.',
    eyebrow: 'اتصل بنا',
    h1: 'أرسل المستند.<br>ونخبرك بالباقي.',
    lede:
      'صورة على واتساب تكفي عادةً لتأكيد النموذج والمستندات والرسوم. وإن فضّلت الحضور، فالمكتب في شارع أبو هيل بهور العنز، على ثلاث دقائق من المترو.',
    formTitle: 'اطلب عرض سعر',
    formFields: {
      name: 'اسمك',
      phone: 'رقم الهاتف أو واتساب',
      service: 'ما تحتاجه؟',
      message: 'التفاصيل',
      messagePlaceholder:
        'مثال: تجديد تأشيرة زوجتي، والإقامة تنتهي بعد أسبوعين.',
      submit: 'أرسل على واتساب',
    },
    formOptions: [
      'تأشيرة أو إقامة',
      'الهوية الإماراتية',
      'العمل أو الموارد البشرية',
      'رخصة تجارية أو تأسيس شركة',
      'تصديق أو وزارة الخارجية',
      'تخليص معاملة أخرى',
    ],
    hoursTitle: 'ساعات العمل',
    hours: [
      ['السبت – الخميس', '٩:٠٠ – ١٩:٠٠'],
      ['الجمعة', '٩:٠٠ – ١٩:٠٠'],
      ['الأحد', 'مغلق'],
    ],
    note:
      'الدوائر الحكومية وبعض البوابات لها أوقاتها. إن كانت معاملتك تعتمد عليها، راسلنا قبل الحضور.',
  },

  footer: {
    blurb:
      'مركز مرخّص لتخليص المعاملات والطباعة في هور العنز، ديرة — التأشيرات، الهوية الإماراتية، العمل، الرخص التجارية والتصديق، بالعربية والإنجليزية.',
    servicesTitle: 'الخدمات',
    companyTitle: 'الشركة',
    contactTitle: 'التواصل',
    legal: 'رخصة تجارية ١٥٢٩٣٢٠ · دائرة الاقتصاد دبي',
    disclaimer:
      'قاف لتخليص المعاملات مركز مرخّص لتخليص المعاملات والطباعة. نحن لسنا جهة حكومية، والموافقة على أي طلب تعود للجهة المختصة. الرسوم المذكورة عند الطلب لا تشمل الرسوم الحكومية إلا إذا ذُكر خلاف ذلك.',
    rights: 'جميع الحقوق محفوظة.',
  },

  notFound: {
    title: 'الصفحة غير موجودة | قاف لتخليص المعاملات',
    h1: 'هذه الصفحة غير متاحة.',
    body: 'الرابط الذي فتحته غير موجود. صفحة الخدمات هي الأقرب لما تبحث عنه.',
  },
};

export const COPY = { en, ar };
