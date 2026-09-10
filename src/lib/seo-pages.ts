import { pricing } from "./landing-data";

const priceAnswer = `Stemna koster ${pricing.plans[0].price} kr per måned. Du kan prøve gratis i 30 dager, uten bindingstid. Prisen inkluderer HELFO-refusjon, generering av refusjonsfil, pasientoversikt, kalender, takster og norsk support. Se priser.`;

// Launch product truth: generate/download reimbursement files; users submit to HELFO themselves.
// Testimonials and product previews below are explicitly fictional placeholders.
export const seoOffer = {
  title: "Prøv Stemna gratis i 30 dager",
  description: "Få full tilgang til alle funksjoner. Ingen bindingstid.",
  trust: ["30 dager gratis", "Ingen bindingstid", "Norskutviklet"],
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
      "Stemna hjelper logopeder med å samle pasientinformasjon, timer og takster før refusjonsfilen genereres. Last ned filen og send den inn til HELFO selv.",
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
      "Samle grunnlaget for HELFO-refusjon i Stemna. Velg relevante takster og bruk pasient- og timeinformasjonen når du klargjør refusjonsfilen. Du står selv for innsendingen til HELFO.",
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
      "Stemna hjelper audiopedagoger med å samle pasientinformasjon, timer og takster før refusjonsfilen genereres. Last ned filen og send den inn til HELFO selv.",
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
      "Samle grunnlaget for HELFO-refusjon i Stemna. Velg relevante takster og bruk pasient- og timeinformasjonen når du klargjør refusjonsfilen. Du står selv for innsendingen til HELFO.",
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
      "Samle pasientinformasjon, timer og relevante takster i Stemna. Generer refusjonsfilen og last den ned. Deretter laster du selv opp filen hos HELFO.",
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
        description: "Du sender filen inn til HELFO selv",
        icon: "refund",
      },
    ],
    valueTitle: "Slik klargjør du HELFO-refusjon",
    valueCopy:
      "Registrer pasient- og timeinformasjonen og velg relevante takster. Stemna organiserer grunnlaget og genererer refusjonsfilen. Last ned filen fra Stemna, og last den deretter opp hos HELFO selv.",
    benefits: [
      "Samle pasient- og timeinformasjon",
      "Velg relevante takster",
      "Generer refusjonsfilen",
      "Last ned og last opp hos HELFO selv",
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
          "Ja. Stemna for logopeder samler pasienter, timer og takster før refusjonsfilen genereres. Du laster ned filen og sender den inn til HELFO selv.",
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
          "Ja. Stemna for audiopedagoger gjør klargjøringen av refusjonsgrunnlaget enklere. Innsendingen av den nedlastede filen gjør du selv hos HELFO.",
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
      "Stemna samler pasientinformasjon, timer og takster som grunnlag for HELFO-refusjon. Generer refusjonsfilen, last den ned og send den inn til HELFO selv.",
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
      "Bruk pasientinformasjon, timer og relevante takster i en enklere arbeidsflyt frem mot HELFO-innsending. Stemna genererer filen; du laster den ned og sender den inn selv.",
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
