import type { SeoPageData } from "./seo-pages";
import type { ContextualLink } from "@/components/contextual-text";

type ProductContent = {
  eyebrow: string;
  heading: string;
  paragraphs: { text: string; links?: ContextualLink[] }[];
  featureDescriptions: [string, string, string, string];
};

const home = { text: "Stemna", href: "/" };

export const seoProductContent: Record<
  SeoPageData["mode"],
  ProductContent
> = {
  journal: {
    eyebrow: "FOR LOGOPEDER",
    heading: "En enklere arbeidsflyt for HELFO-refusjon",
    paragraphs: [
      {
        text: "Stemna er laget for logopeder som ønsker mindre administrasjon rundt HELFO-refusjon og bedre oversikt i arbeidshverdagen.",
        links: [
          home,
          {
            text: "HELFO-refusjon",
            href: "/helfo-oppgjor",
          },
        ],
      },
      {
        text: "Her samler du pasienter, gjennomførte timer og HELFO-takster på ett sted. Når grunnlaget er klart, gjør du refusjonskravet ferdig i Stemna og genererer refusjonsfilen.",
      },
      {
        text: "Driver du egen praksis? Les mer om hvordan Stemna kan brukes som system for privat praksis.",
        links: [
          {
            text: "system for privat praksis",
            href: "/journalsystem-privat-praksis",
          },
        ],
      },
    ],
    featureDescriptions: [
      "Ha relevant pasientinformasjon samlet.",
      "Registrer behandlingene du har gjennomført.",
      "Velg relevante HELFO-takster direkte i Stemna.",
      "Gjør refusjonen klar og generer refusjonsfilen.",
    ],
  },

  hearing: {
    eyebrow: "FOR AUDIOPEDAGOGER",
    heading: "HELFO-refusjon tilpasset arbeidshverdagen din",
    paragraphs: [
      {
        text: "Stemna gir audiopedagoger en enklere måte å holde oversikt over grunnlaget for HELFO-refusjon og redusere manuelt administrasjonsarbeid.",
        links: [
          home,
          {
            text: "HELFO-refusjon",
            href: "/helfo-oppgjor",
          },
        ],
      },
      {
        text: "Pasienter, gjennomførte timer og relevante HELFO-takster samles i én arbeidsflyt, slik at det blir enklere å gjøre refusjonskravet klart og generere refusjonsfilen.",
      },
      {
        text: "Driver du egen praksis? Les mer om Stemna for privat praksis.",
        links: [
          {
            text: "privat praksis",
            href: "/journalsystem-privat-praksis",
          },
        ],
      },
    ],
    featureDescriptions: [
      "Samle relevant pasientinformasjon på ett sted.",
      "Registrer gjennomførte behandlingstimer.",
      "Velg relevante HELFO-takster for timene dine.",
      "Klargjør refusjonskravet og generer refusjonsfilen.",
    ],
  },

  refund: {
    eyebrow: "HELFO-REFUSJON",
    heading: "Fra gjennomført time til ferdig refusjonskrav",
    paragraphs: [
      {
        text: "Stemna samler grunnlaget du trenger for HELFO-refusjon på ett sted, slik at du får en enklere arbeidsflyt fra gjennomført behandling til ferdig refusjonskrav.",
        links: [home],
      },
      {
        text: "Registrer gjennomførte timer, velg relevante HELFO-takster og gjør refusjonskravet klart i Stemna. Når grunnlaget er ferdig, genererer Stemna refusjonsfilen du trenger for innsending.",
      },
      {
        text: "Se hvordan arbeidsflyten er tilpasset logopeder, audiopedagoger og deg som driver privat praksis.",
        links: [
          {
            text: "logopeder",
            href: "/journalsystem-logoped",
          },
          {
            text: "audiopedagoger",
            href: "/journalsystem-audiopedagog",
          },
          {
            text: "privat praksis",
            href: "/journalsystem-privat-praksis",
          },
        ],
      },
    ],
    featureDescriptions: [
      "Samle pasientinformasjonen til refusjonskravet.",
      "Registrer gjennomførte timer som refusjonsgrunnlag.",
      "Velg relevante HELFO-takster til behandlingene.",
      "Generer refusjonsfilen når grunnlaget er klart.",
    ],
  },

  practice: {
    eyebrow: "FOR PRIVAT PRAKSIS",
    heading: "Mindre administrasjon rundt HELFO-refusjon",
    paragraphs: [
      {
        text: "For deg som driver egen praksis er det mye som skal holdes oversikt over. Stemna gjør arbeidet med HELFO-refusjon enklere ved å samle det viktigste på ett sted.",
        links: [
          home,
          {
            text: "HELFO-refusjon",
            href: "/helfo-oppgjor",
          },
        ],
      },
      {
        text: "Samle pasienter, gjennomførte timer og HELFO-takster, og gå fra behandling til ferdig refusjonskrav i en enklere arbeidsflyt.",
      },
      {
        text: "Stemna er utviklet for arbeidshverdagen til logopeder og audiopedagoger som driver privat praksis.",
        links: [
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
    ],
    featureDescriptions: [
      "Ha relevant pasientinformasjon samlet i praksisen.",
      "Få oversikt over behandlingene du har gjennomført.",
      "Finn relevante HELFO-takster på ett sted.",
      "Gjør refusjonen klar og generer refusjonsfilen.",
    ],
  },
};