import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Action } from "./actions";
import { Icon, Logo, type IconName } from "./landing";
import { showProductVideo } from "@/lib/landing-data";
import type { TrialCtaLocation } from "@/lib/tracking";
import styles from "./what-is-stemna.module.css";

const features: { title: string; text: string; icon: IconName }[] = [
  {
    title: "Pasienter",
    text: "Ha pasientene dine samlet i systemet.",
    icon: "people",
  },
  {
    title: "Timer",
    text: "Registrer behandlingene du har gjennomført.",
    icon: "calendar",
  },
  {
    title: "HELFO-takster",
    text: "Velg riktig takst direkte i Stemna.",
    icon: "journal",
  },
  {
    title: "Refusjonskrav",
    text: "Gjør refusjonen klar og generer filen for innsending til HELFO.",
    icon: "refund",
  },
];

export type WhatIsStemnaContent = {
  eyebrow: string;
  heading: string;
  body: ReactNode;
  cta: string;
  support: string;
  featureDescriptions: [string, string, string, string];
};

export function WhatIsStemna({ content, ctaLocation = "product_overview" }: { content?: WhatIsStemnaContent; ctaLocation?: TrialCtaLocation }) {
  return (
    <section id="funksjoner" className={`section ${styles.section}`}>
      <div id="slik-fungerer-det" className="container">
        <div className={styles.columns}>
          <div className={styles.copy}>
            <p className="eyebrow">{content?.eyebrow ?? "HVA ER STEMNA?"}</p>
            <h2>{content?.heading ?? "Alt du trenger for å gjøre HELFO-refusjonen enklere."}</h2>
            <div className={styles.body}>
              {content?.body ?? <>
              <p>
                Stemna er et webbasert system for logopeder og audiopedagoger
                som sender refusjonskrav til HELFO.
              </p>
              <p>
                Her har du pasienter, timer og HELFO-takster samlet på ett sted.
                Du registrerer timene du har gjennomført, velger riktige takster
                og gjør refusjonskravet klart i Stemna.
              </p>
              <p>
                Når refusjonen er klar, genererer Stemna filen du trenger for
                innsending til{" "}
                <Link className="contextual-link" href="/helfo-oppgjor">
                  HELFO
                </Link>
                .
              </p>
              </>}
            </div>
            <div className={styles.actions}>
              <Action ctaLocation={ctaLocation}>
                {content?.cta ?? "Prøv Stemna gratis"} <Icon name="arrow" />
              </Action>
              {!content && showProductVideo && (
                <Action kind="demo" className="button button-secondary">
                  Se hvordan det fungerer
                </Action>
              )}
            </div>
            <p className={styles.note}>
              {content?.support ?? "0 kr i dag. 30 dager gratis. Ingen bindingstid."}
            </p>
          </div>
          <div className={styles.visual}>
            <div className={styles.backdrop} aria-hidden="true">
              <Image
                src="/images/bakgrunn-1.jpeg"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
              />
            </div>
            <PatientOverview />
          </div>
        </div>
        <div className={styles.features}>
          {features.map((feature, index) => (
            <article key={feature.title}>
              <span className={styles.featureIcon}>
                <Icon name={feature.icon} />
              </span>
              <h3>{feature.title}</h3>
              <p>{content?.featureDescriptions[index] ?? feature.text}</p>
            </article>
          ))}
        </div>
        <div className={styles.reassurance}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="4" y="3" width="16" height="13" rx="2" />
            <path d="M4 16 2 20h20l-2-4M9 20h6" />
          </svg>
          <div>
            <strong>Ingen installasjon. Ingen komplisert oppsett.</strong>
            <p>Bare logg inn i nettleseren og kom i gang.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Static illustration with fictional entries, not interactive product controls.
function PatientOverview() {
  return (
    <figure
      className={styles.laptop}
      aria-label="Illustrasjon av pasientoversikt i Stemna"
    >
      <div className={styles.screen}>
        <div className={styles.topbar}>
          <Logo />
          <span>Din praksis</span>
        </div>
        <div className={styles.workspace}>
          <div className={styles.sidebar} aria-hidden="true">
            {["Hjem", "Pasienter", "Timer", "HELFO-refusjon", "Takster"].map(
              (label, index) => (
                <span
                  key={label}
                  className={index === 1 ? styles.selected : undefined}
                >
                  <Icon
                    name={
                      (
                        [
                          "calendar",
                          "people",
                          "calendar",
                          "refund",
                          "journal",
                        ] as const
                      )[index]
                    }
                  />
                  {label}
                </span>
              ),
            )}
          </div>
          <div className={styles.patients}>
            <p className={styles.overline}>OVERSIKT</p>
            <h3>Pasienter</h3>
            <p>Pasientinformasjon samlet på ett sted.</p>
            <div className={styles.search} aria-hidden="true">
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="8" cy="8" r="5" />
                <path d="m12 12 5 5" />
              </svg>
              Søk etter pasient
            </div>
            <div className={styles.table}>
              <div className={styles.tableHeading}>
                <span>Pasient</span>
                <span>Pasientnr.</span>
              </div>
              {["01", "02", "03", "04"].map((number) => (
                <div className={styles.patientRow} key={number}>
                  <span>
                    <span className={styles.avatar}>
                      <Icon name="people" />
                    </span>
                    Eksempelpasient {number}
                  </span>
                  <span>10{number}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.base} aria-hidden="true" />
      <figcaption>Produktillustrasjon · Fiktive eksempeldata</figcaption>
    </figure>
  );
}
