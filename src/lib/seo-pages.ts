import { pricing } from "./landing-data";

const priceAnswer = `Ordinær pris er ${pricing.plans[0].price} kr/mnd. Ved registrering innen 31. oktober 2026 får du early bird-prisen på 349 kr/mnd så lenge abonnementet er aktivt. 30 dager gratis og ingen bindingstid. Registreringen er ikke åpen ennå – meld interesse for å få beskjed. Se priser.`;

// Launch product truth: generate/download reimbursement files; users submit to HELFO themselves.
// Testimonials and product previews below are explicitly fictional placeholders.
export const seoOffer = {
  title: "Få Stemna til 349 kr/mnd",
  description: "Meld interesse innen 31. oktober og få muligheten til å sikre early bird-prisen når Stemna åpner.",
  trust: ["30 dager gratis", "349 kr/mnd etter prøveperioden", "Behold prisen så lenge abonnementet er aktivt", "Ingen bindingstid", "Norskutviklet"],
  // No verified hosting evidence exists in this frontend project. Do not publish
  // the location/security claim until the hosting arrangement is documented.
  storageInNorwayVerified: false,
  storageLabel: "Sikker lagring i Norge",
};
export type SeoPageData = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  mode: "journal" | "hearing" | "refund" | "practice";
  features: {
    title: string;
    description: string;
    icon: "journal" | "calendar" | "refund" | "invoice";
  }[];
  valueTitle: string;
  valueCopy: string;
  benefits: string[];
  testimonial: { quote: string; name: string; role: string };
  faqs: {
    question: string;
    answer: string;
    answerLinks?: { text: string; href: string }[];
  }[];
};

export const seoPages: Record<
  "logoped" | "audiopedagog" | "helfo" | "practice",
  SeoPageData
> = {
  logoped: {
    slug: "journalsystem-logoped",
    title: "Enklere HELFO-refusjon for logopeder | Stemna",
    description:
      "Samle pasienter, timer og takster for HELFO-refusjon. Stemna genererer refusjonsfilen; du laster den ned og sender den til HELFO selv. For logopeder.",
    eyebrow: "FOR LOGOPEDER",
    heading: "Enklere HELFO-refusjon for logopeder",
    intro:
      "Samle pasienter, timer og HELFO-takster i én arbeidsflyt. Stemna gjør refusjonsarbeidet enklere for privatpraktiserende logopeder, så du får mer tid til pasientene.",
    mode: "journal",
    features: [
      {
        title: "Pasientoversikt",
        description: "Relevant informasjon på ett sted",
        icon: "journal",
      },
      {
        title: "Kalender",
        description: "Timer som grunnlag for refusjon",
        icon: "calendar",
      },
      {
        title: "Refusjonsfil",
        description: "Generer og last ned filen",
        icon: "refund",
      },
      {
        title: "Takster",
        description: "Velg relevante takster i Stemna",
        icon: "invoice",
      },
    ],
    valueTitle: "Fra time til refusjonsfil",
    valueCopy:
      "Registrer gjennomførte behandlingstimer og velg relevante HELFO-takster. Med pasientinformasjon og timer samlet blir det enklere å gjøre refusjonskravet klart i Stemna.",
    benefits: [
      "Pasientinformasjon samlet",
      "Timer i kalenderen",
      "Velg relevante takster",
      "Generer og last ned refusjonsfil",
    ],
    testimonial: {
      quote:
        "Jeg får bedre oversikt når pasientinformasjon, timer og takster er samlet før jeg lager refusjonsfilen.",
      name: "Mari",
      role: "privatpraktiserende logoped",
    },
    faqs: [
      {
        question: "Er Stemna laget for privatpraktiserende logopeder?",
        answer:
          "Ja. Stemna hjelper logopeder med refusjonsarbeid i privat praksis. Du samler pasientinformasjon, timer og takster før refusjonsfilen genereres.",
        answerLinks: [
          {
            text: "refusjonsarbeid i privat praksis",
            href: "/journalsystem-privat-praksis",
          },
        ],
      },
      {
        question: "Sender Stemna refusjonskravet direkte til HELFO?",
        answer:
          "Nei. Stemna hjelper deg med å klargjøre refusjonskravet og genererer refusjonsfilen. Du laster ned filen fra Stemna og laster den opp hos HELFO selv. Se arbeidsflyten for HELFO-refusjon i Stemna.",
        answerLinks: [
          {
            text: "HELFO-refusjon i Stemna",
            href: "/helfo-oppgjor",
          },
        ],
      },
      {
        question: "Må jeg skrive inn takstene på nytt hver gang?",
        answer:
          "Du kan velge relevante takster i Stemna i stedet for å skrive dem inn manuelt hver gang.",
      },
      {
        question: "Hva koster Stemna?",
        answer: priceAnswer,
        answerLinks: [
          {
            text: "Se priser",
            href: "/#priser",
          },
        ],
      },
    ],
  },
  audiopedagog: {
    slug: "journalsystem-audiopedagog",
    title: "Enklere HELFO-refusjon for audiopedagoger | Stemna",
    description:
      "Samle pasienter, timer og takster for HELFO-refusjon. Stemna genererer refusjonsfilen; du laster den ned og sender den til HELFO selv. For audiopedagoger.",
    eyebrow: "FOR AUDIOPEDAGOGER",
    heading: "Enklere HELFO-refusjon for audiopedagoger",
    intro:
      "Få bedre oversikt over pasienter, timer og HELFO-takster i din audiopedagogiske praksis. Stemna hjelper deg å gjøre refusjonskravet klart med mindre administrasjon.",
    mode: "hearing",
    features: [
      {
        title: "Pasientoversikt",
        description: "Relevant informasjon på ett sted",
        icon: "journal",
      },
      {
        title: "Kalender",
        description: "Timer som grunnlag for refusjon",
        icon: "calendar",
      },
      {
        title: "Refusjonsfil",
        description: "Generer og last ned filen",
        icon: "refund",
      },
      {
        title: "Takster",
        description: "Velg relevante takster i Stemna",
        icon: "invoice",
      },
    ],
    valueTitle: "Enklere refusjonsarbeid for audiopedagoger",
    valueCopy:
      "Hold oversikt over pasienter og gjennomførte timer i din audiopedagogiske praksis. Velg relevante HELFO-takster og klargjør refusjonskravet med informasjonen samlet på ett sted.",
    benefits: [
      "Pasientinformasjon samlet",
      "Timer i kalenderen",
      "Velg relevante takster",
      "Generer og last ned refusjonsfil",
    ],
    testimonial: {
      quote:
        "Jeg får bedre oversikt når pasientinformasjon, timer og takster er samlet før jeg lager refusjonsfilen.",
      name: "Lise",
      role: "privatpraktiserende audiopedagog",
    },
    faqs: [
      {
        question: "Er Stemna laget for privatpraktiserende audiopedagoger?",
        answer:
          "Ja. Stemna hjelper audiopedagoger med refusjonsarbeid i privat praksis. Du samler pasientinformasjon, timer og takster før refusjonsfilen genereres.",
        answerLinks: [
          {
            text: "refusjonsarbeid i privat praksis",
            href: "/journalsystem-privat-praksis",
          },
        ],
      },
      {
        question: "Sender Stemna refusjonskravet direkte til HELFO?",
        answer:
          "Nei. Stemna hjelper deg med å klargjøre refusjonskravet og genererer refusjonsfilen. Du laster ned filen fra Stemna og laster den opp hos HELFO selv. Se arbeidsflyten for HELFO-refusjon i Stemna.",
        answerLinks: [
          {
            text: "HELFO-refusjon i Stemna",
            href: "/helfo-oppgjor",
          },
        ],
      },
      {
        question: "Må jeg skrive inn takstene på nytt hver gang?",
        answer:
          "Du kan velge relevante takster i Stemna i stedet for å skrive dem inn manuelt hver gang.",
      },
      {
        question: "Hva koster Stemna?",
        answer: priceAnswer,
        answerLinks: [
          {
            text: "Se priser",
            href: "/#priser",
          },
        ],
      },
    ],
  },
  helfo: {
    slug: "helfo-oppgjor",
    title: "HELFO-refusjon – fra time til refusjonsfil | Stemna",
    description:
      "Klargjør HELFO-refusjon med pasienter, timer og takster i Stemna. Generer og last ned refusjonsfilen, og last den opp hos HELFO selv.",
    eyebrow: "HELFO-OPPGJØR",
    heading: "Enklere HELFO-refusjon – fra time til ferdig fil",
    intro:
      "Fra gjennomført time til ferdig refusjonskrav – med pasienter, timer og HELFO-takster samlet på ett sted. Stemna gjør det enklere å klargjøre HELFO-oppgjøret.",
    mode: "refund",
    features: [
      {
        title: "Klargjør grunnlaget",
        description: "Samle informasjon til refusjonskravet",
        icon: "journal",
      },
      {
        title: "Velg takster",
        description: "Velg relevante takster i systemet",
        icon: "invoice",
      },
      {
        title: "Timer i kalenderen",
        description: "Bruk timene som refusjonsgrunnlag",
        icon: "calendar",
      },
      {
        title: "Last ned filen",
        description: "Refusjonsfil klar til innsending",
        icon: "refund",
      },
    ],
    valueTitle: "Slik klargjør du HELFO-refusjon",
    valueCopy:
      "Registrer gjennomførte timer og velg relevante HELFO-takster. Stemna samler grunnlaget og genererer refusjonsfilen, slik at du slipper å holde oversikt i flere systemer.",
    benefits: [
      "Samle pasient- og timeinformasjon",
      "Velg relevante takster",
      "Generer refusjonsfilen",
      "Refusjonskrav klart til innsending",
    ],
    testimonial: {
      quote:
        "Det er enklere å klargjøre refusjonsfilen når pasientinformasjon, timer og takster er samlet.",
      name: "Anne",
      role: "privatpraktiserende behandler",
    },
    faqs: [
      {
        question: "Sender Stemna refusjonskravet direkte til HELFO?",
        answer:
          "Nei. Stemna hjelper deg med å klargjøre refusjonskravet og genererer refusjonsfilen. Du laster ned filen fra Stemna og laster den opp hos HELFO selv. Les om Stemna for privat praksis.",
        answerLinks: [
          {
            text: "Stemna for privat praksis",
            href: "/journalsystem-privat-praksis",
          },
        ],
      },
      {
        question: "Kan logopeder bruke Stemna til HELFO-refusjon?",
        answer:
          "Ja. Stemna for logopeder samler pasienter, timer og HELFO-takster og gjør det enklere å klargjøre refusjonskravet.",
        answerLinks: [
          {
            text: "Stemna for logopeder",
            href: "/journalsystem-logoped",
          },
        ],
      },
      {
        question: "Kan audiopedagoger bruke Stemna til HELFO-refusjon?",
        answer:
          "Ja. Stemna for audiopedagoger gir oversikt over pasienter, timer og HELFO-takster som grunnlag for refusjonskravet.",
        answerLinks: [
          {
            text: "Stemna for audiopedagoger",
            href: "/journalsystem-audiopedagog",
          },
        ],
      },
      {
        question: "Hva koster Stemna?",
        answer: priceAnswer,
        answerLinks: [
          {
            text: "Se priser",
            href: "/#priser",
          },
        ],
      },
    ],
  },
  practice: {
    slug: "journalsystem-privat-praksis",
    title: "HELFO-refusjon for privat praksis | Stemna",
    description:
      "Enklere refusjonsarbeid i privat praksis. Samle pasienter, timer og takster, generer refusjonsfilen og last den ned for egen innsending til HELFO.",
    eyebrow: "FOR PRIVAT PRAKSIS",
    heading: "Enklere refusjonsarbeid i privat praksis",
    intro:
      "Driver du egen praksis som logoped eller audiopedagog? Samle pasienter, timer og HELFO-takster i Stemna og bruk mindre tid på administrasjon rundt refusjonsarbeidet.",
    mode: "practice",
    features: [
      {
        title: "Pasientoversikt",
        description: "Relevant pasientinformasjon samlet",
        icon: "journal",
      },
      {
        title: "Kalender",
        description: "Oversikt over registrerte timer",
        icon: "calendar",
      },
      {
        title: "Takster",
        description: "Velg takster til refusjonsgrunnlaget",
        icon: "invoice",
      },
      {
        title: "Refusjonsfil",
        description: "Generer og last ned filen",
        icon: "refund",
      },
    ],
    valueTitle: "Grunnlaget for refusjon på ett sted",
    valueCopy:
      "Med pasientinformasjon, gjennomførte timer og HELFO-takster samlet får du bedre oversikt i egen praksis. Gjør refusjonskravet klart i én arbeidsflyt, med færre manuelle steg.",
    benefits: [
      "Pasientinformasjon samlet",
      "Oversikt over timer",
      "Relevante takster tilgjengelig",
      "Refusjonsfil klar til nedlasting",
    ],
    testimonial: {
      quote:
        "Det er praktisk å ha pasientinformasjon, timer og takster samlet når jeg klargjør refusjonsfilen.",
      name: "Mari",
      role: "privatpraktiserende behandler",
    },
    faqs: [
      {
        question: "Hvem passer Stemna for?",
        answer:
          "Stemna er laget for logopeder og audiopedagoger som ønsker enklere administrasjon rundt HELFO-refusjon i privat praksis.",
        answerLinks: [
          {
            text: "logopeder",
            href: "/journalsystem-logoped",
          },
          {
            text: "audiopedagoger",
            href: "/journalsystem-audiopedagog",
          },
        ],
      },
      {
        question: "Hva kan jeg samle i Stemna?",
        answer:
          "Du kan registrere og bruke relevant pasientinformasjon, ha timer i kalenderen og velge takster som grunnlag for refusjonsfilen.",
      },
      {
        question: "Sender Stemna refusjonskravet direkte til HELFO?",
        answer:
          "Nei. Stemna hjelper deg med å klargjøre refusjonskravet og genererer refusjonsfilen. Du laster ned filen fra Stemna og laster den opp hos HELFO selv. Se hvordan du klargjør HELFO-refusjon i Stemna.",
        answerLinks: [
          {
            text: "HELFO-refusjon i Stemna",
            href: "/helfo-oppgjor",
          },
        ],
      },
      {
        question: "Hva koster Stemna?",
        answer: priceAnswer,
        answerLinks: [
          {
            text: "Se priser",
            href: "/#priser",
          },
        ],
      },
    ],
  },
};
