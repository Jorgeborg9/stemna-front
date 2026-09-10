// Enable only when a real product video is available.
export const showProductVideo = false;

export const trial = {
  cta: "Prøv gratis i 30 dager",
  reassurance: ["30 dager gratis", "Ingen bindingstid"],
};

export const navigation = [
  { label: "Funksjoner", href: "/#funksjoner" },
  { label: "Priser", href: "/#priser" },
  { label: "For hvem?", href: "/#for-hvem" },
  { label: "Om oss", href: "/#om-oss" },
];
export const navigationGroups = [
  {
    label: "Produkt",
    items: [
      { label: "Funksjoner", href: "/#funksjoner" },
      { label: "HELFO-oppgjør", href: "/helfo-oppgjor" },
      { label: "Priser", href: "/#priser" },
    ],
  },
  {
    label: "For hvem",
    items: [
      { label: "For logopeder", href: "/journalsystem-logoped" },
      { label: "For audiopedagoger", href: "/journalsystem-audiopedagog" },
      { label: "For privat praksis", href: "/journalsystem-privat-praksis" },
    ],
  },
];
export const features = [
  {
    icon: "calendar",
    title: "Avtaler",
    description: "Timer samlet i kalenderen",
  },
  {
    icon: "journal",
    title: "Pasientoversikt",
    description: "Relevant pasientinformasjon samlet",
  },
  {
    icon: "invoice",
    title: "Takster",
    description: "Velg relevante takster i systemet",
  },
] as const;
export const comparison = {
  before: [
    "Tungvinte arbeidsprosesser",
    "Mange steg per refusjon",
    "Desktop-baserte løsninger",
    "Høye kostnader",
    "Funksjoner du ikke trenger",
  ],
  after: [
    "Enkel HELFO-refusjon",
    "Færre steg og mindre manuelt arbeid",
    "Webbasert – tilgjengelig der du er",
    "Fra time til refusjonskrav",
    "Bygget for logopeder og audiopedagoger",
  ],
};
export const steps = [
  { title: "Opprett konto", description: "Start med 30 dager gratis." },
  {
    title: "Vi hjelper deg i gang",
    description: "Få hjelp med oppsettet og kom raskt i gang.",
  },
  {
    title: "Ta Stemna i bruk",
    description: "Logg inn og kom i gang med refusjonsarbeidet.",
  },
];
export const audienceBenefits = [
  "Tilpasset arbeidshverdagen din",
  "Enklere HELFO-refusjon",
  "Pasienter, timer og takster samlet",
  "Norsk support",
];
// PLACEHOLDER testimonials for layout only. Replace with approved authentic
// customer quotes before launch; retain the visible sample label until then.
// TEMPORARY stock portraits: these models are not the named customers.
// Sources, crop positions and local paths stay with each example for replacement.
export const testimonials = [
  {
    quote:
      "Endelig et system som er laget for vår hverdag. Det er enkelt å bruke, og HELFO-refusjonen går mye smidigere.",
    name: "Kari S.",
    role: "Audiopedagog",
    benefits: [
      "Enklere arbeidshverdag",
      "Mindre tid på refusjon",
      "Enklere arbeidsflyt",
      "Norsk support",
    ],
    portrait: {
      src: "/images/testimonials/portrait-1.jpg",
      alt: "Midlertidig illustrasjonsportrett av en kvinne i beige genser",
      objectPosition: "50% center",
      sourceUrl: "https://www.pexels.com/photo/29405854/",
      licenseUrl: "https://www.pexels.com/license/",
    },
  },
  {
    quote:
      "Jeg kom raskt i gang, og det er mye enklere å finne frem enn i systemet jeg brukte tidligere.",
    name: "Eksempelkunde",
    role: "Logoped",
    benefits: [
      "Enkel oppstart",
      "God oversikt",
      "Mindre manuelt arbeid",
      "Ingen bindingstid",
    ],
    portrait: {
      src: "/images/testimonials/portrait-2.jpg",
      alt: "Midlertidig illustrasjonsportrett av en kvinne i mørk genser",
      objectPosition: "50% 20%",
      sourceUrl: "https://www.pexels.com/photo/12951789/",
      licenseUrl: "https://www.pexels.com/license/",
    },
  },
  {
    quote:
      "Det er praktisk å ha pasientinformasjon og timer tilgjengelig i nettleseren når jeg forbereder refusjonsfilen.",
    name: "Eksempelkunde",
    role: "Audiopedagog",
    benefits: [
      "Webbasert",
      "Én innlogging",
      "Tilgang overalt",
      "Pasienter og timer",
    ],
    portrait: {
      src: "/images/testimonials/portrait-3.jpg",
      alt: "Midlertidig illustrasjonsportrett av en kvinne i stripete genser",
      objectPosition: "58% center",
      sourceUrl: "https://www.pexels.com/photo/7086035/",
      licenseUrl: "https://www.pexels.com/license/",
    },
  },
  {
    quote:
      "Det er praktisk å velge takster og klargjøre refusjonsfilen på samme sted.",
    name: "Eksempelkunde",
    role: "Logoped",
    benefits: [
      "Takster samlet",
      "Personlig hjelp",
      "Rask oppstart",
      "Norsk support",
    ],
    portrait: {
      src: "/images/testimonials/portrait-4.jpg",
      alt: "Midlertidig illustrasjonsportrett av en mann i rutete skjorte",
      objectPosition: "50% center",
      sourceUrl: "https://www.pexels.com/photo/36764487/",
      licenseUrl: "https://www.pexels.com/license/",
    },
  },
] satisfies Array<{
  quote: string;
  name: string;
  role: string;
  benefits: string[];
  portrait: {
    src: string;
    alt: string;
    objectPosition: string;
    sourceUrl: string;
    licenseUrl: string;
  } | null;
}>;
// Launch offering confirmed by the product brief. Single source for pricing.
export const pricing = {
  currency: "kr",
  interval: "mnd",
  plans: [
    {
      name: "Stemna",
      price: 499,
      description: "Enklere arbeid med HELFO-refusjon",
      features: [
        "HELFO-refusjon",
        "Generering av refusjonsfil",
        "Pasientoversikt",
        "Kalender og timer",
        "Takster samlet i systemet",
        "Norsk support",
      ],
    },
  ],
};
// Set verified URLs when ready. Null opens an honest availability dialog.
export const destinations: Record<string, string | null> = {
  signup: null,
  demo: null,
  login: null,
  contact: null,
  privacy: null,
  terms: null,
};

export const reimbursementSteps = [
  { title: "Behandle", description: "Utfør behandlingen.", icon: "people" },
  {
    title: "Registrer",
    description: "Registrer timen og nødvendig informasjon.",
    icon: "journal",
  },
  {
    title: "Send inn refusjonskrav",
    description: "Gjør refusjonskravet klart for innsending.",
    icon: "refund",
  },
] as const;
export const webBenefits = [
  "Tilgang overalt",
  "Ingen installasjon",
  "Alltid oppdatert",
  "Én innlogging",
];
// Describe product direction; do not imply certifications or verified operation.
export const trustBenefits = [
  "Norskutviklet",
  "Personlig norsk support",
  "Utviklet for norske krav",
];
// User-supplied imagery. Keep paths, alt text and crop positions centralized.
export const photography = {
  hero: {
    title: "Rom for god kommunikasjon",
    description: "Kvinne arbeider ved en bærbar datamaskin",
    source: "/images/dame jobber.webp",
    alt: "Kvinne ved en bærbar datamaskin i et lyst arbeidsmiljø",
    objectPosition: "35% center",
  },
  audience: {
    title: "Menneskene i sentrum",
    description: "Logoped og barn gjennomfører en språkøvelse",
    source: "/images/logoped.jpg",
    alt: "Logoped øver på språklyder med et barn ved hjelp av bokstaver",
    objectPosition: "50% center",
  },
};
