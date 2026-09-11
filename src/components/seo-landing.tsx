import { WhatIsStemna } from "./what-is-stemna";
import { seoProductContent } from "@/lib/seo-product-content";
import Link from "next/link";
import { ContextualText } from "./contextual-text";
import { FooterCTA } from "./footer-cta";
import Image from "next/image";
import type { Metadata } from "next";
import { Header, Footer, Logo, Icon, Checks } from "./landing";
import { Action } from "./actions";
import { pricing, photography } from "@/lib/landing-data";
import { seoOffer, type SeoPageData } from "@/lib/seo-pages";
import styles from "./seo-landing.module.css";
import { SeoTestimonialCarousel } from "./seo-testimonial-carousel";
import { seoTestimonials } from "@/lib/seo-testimonials";
const showTestimonials = false;

export function seoMetadata(page: SeoPageData): Metadata {
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      locale: "nb_NO",
      type: "website",
    },
  };
}

// Static desktop product concept: all patients, sessions and statuses are fictional.
// Replace with approved anonymized screenshots when the product is ready.
function DesktopPreview({ mode }: { mode: SeoPageData["mode"] }) {
  const refund = mode === "refund";
  return (
    <figure className={styles.previewFigure}>
      <div className={styles.preview}>
        <div className={styles.previewBar}>
          <Logo light />
          <span>Din praksis</span>
        </div>
        <div className={styles.previewBody}>
          <div className={styles.previewTabs} aria-hidden="true">
            <span className={!refund ? styles.selected : ""}>Pasienter</span>
            <span>Kalender</span>
            <span>HELFO-takster</span>
            <span className={refund ? styles.selected : ""}>Refusjonskrav</span>
          </div>
          <div className={styles.previewTitle}>
            <div>
              <p>
                {refund
                  ? "GRUNNLAG FOR REFUSJONSFIL"
                  : "PASIENT- OG TIMEINFORMASJON"}
              </p>
              <h3>
                {refund
                  ? "Ditt refusjonsgrunnlag"
                  : "Pasientinformasjon"}
              </h3>
            </div>
            <Icon name={refund ? "refund" : "journal"} />
          </div>
          {refund ? (
            <>
              <div className={styles.previewStats}>
                {[
                  ["Utkast", "2"],
                  ["Fil generert", "4"],
                  ["Klar til filgenerering", "1"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <div className={styles.previewRows}>
                {["Utkast", "Fil generert", "Klar til filgenerering"].map((status, i) => (
                  <div key={status}>
                    <span>
                      <b>Refusjonskrav {i + 1}</b>
                      <small>Eksempelpasient {i + 1}</small>
                    </span>
                    <span className={styles.status}>{status}</span>
                  </div>
                ))}
              </div>
              <p className={styles.previewNote}>
                Generer refusjonsfil → Last ned refusjonsfil
              </p>
            </>
          ) : (
            <>
              <div className={styles.patient}>
                <span className={styles.patientIcon}>
                  <Icon name="people" />
                </span>
                <span>
                  <strong>Eksempelpasient</strong>
                  <small>Pasientinformasjon</small>
                </span>
              </div>
              <div className={styles.journal}>
                <span>TIMEINFORMASJON · EKSEMPEL</span>
                <h4>Registrert time</h4>
                <p>Velg relevante HELFO-takster før refusjonsfilen genereres.</p>
                <div className={styles.noteLines} aria-hidden="true">
                  <i />
                  <i />
                </div>
              </div>
              <div className={styles.nextAppointment}>
                <Icon name="calendar" />
                <span>Neste avtale</span>
                <strong>Mandag · 10:00</strong>
              </div>
            </>
          )}
        </div>
      </div>
      <figcaption>Produktillustrasjon · Fiktive eksempeldata</figcaption>
    </figure>
  );
}

// Page-specific hero photography. The audiopedagog hero has its own inset treatment.
const pageVisuals = {
  journal: { photo: photography.audience },
  hearing: { photo: null },
  refund: {
    photo: {
      source: "/images/woman-therapist.webp",
      alt: "Behandler som lytter til en kvinne i samtale",
    },
  },
  practice: {
    photo: {
      source: "/images/privat-praksis.jpg",
      alt: "Behandler og pasient i samtale i en privat praksis",
    },
  },
};

function PracticeVisual({
  mode,
  hero = false,
}: {
  mode: SeoPageData["mode"];
  hero?: boolean;
}) {
  const photo = pageVisuals[mode].photo;
  return (
    <div
      className={`${styles.practiceVisual} ${!photo ? styles.refundVisual : ""}`}
    >
      {photo ? (
        <Image
          src={photo.source}
          alt={photo.alt}
          fill
          sizes="(max-width: 760px) calc(100vw - 40px), 48vw"
          className={styles.practicePhoto}
          style={{
            objectPosition: mode === "practice" ? "38% center" : "57% center",
          }}
          preload={hero}
        />
      ) : (
        <DesktopPreview mode={mode} />
      )}
    </div>
  );
}

function AudiopedagogHeroVisual() {
  return (
    <div className={styles.audiopedagogVisual}>
      <div className={styles.audiopedagogPhoto}>
        <Image
          src="/images/audiopedagog1.jpg"
          alt="To kvinner i samtale, der den ene lytter og tar notater"
          fill
          sizes="(max-width: 900px) calc(100vw - 80px), 42vw"
          preload
        />
      </div>
    </div>
  );
}

function SeoHero({ page }: { page: SeoPageData }) {
  return (
    <section className={styles.hero}>
      <div
        className={`container ${styles.twoColumns} ${page.mode === "hearing" ? styles.audiopedagogHero : ""}`}
      >
        <div className={styles.heroCopy}>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.heading}</h1>
          <p className={styles.intro}>{page.intro}</p>
          <div className={styles.actions}>
            <Action>
              Få early bird-pris <Icon name="arrow" />
            </Action>
          </div>
          <Checks
            className={styles.heroTrust}
            items={[
              "Ingen bindingstid",
              "Norskutviklet",
              "Enkelt å komme i gang",
            ]}
          />
        </div>
        {page.mode === "hearing" ? (
          <AudiopedagogHeroVisual />
        ) : (
          <PracticeVisual mode={page.mode} hero />
        )}
      </div>
    </section>
  );
}
function SeoFeatureRow({ page }: { page: SeoPageData }) {
  return (
    <section
      className={styles.featureSection}
      aria-label="Funksjoner og fordeler"
    >
      <div className={`container ${styles.features}`}>
        {page.features.map((feature) => (
          <article key={feature.title}>
            <span className="feature-icon">
              <Icon name={feature.icon} />
            </span>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
function SeoValueSection({ page }: { page: SeoPageData }) {
  const content = seoProductContent[page.mode];
  return (
    <WhatIsStemna content={{
      ...content,
      body: <>{content.paragraphs.map(paragraph => (
        <p key={paragraph.text}><ContextualText text={paragraph.text} links={paragraph.links} /></p>
      ))}</>,
      cta: "Få early bird-pris",
      support: "30 dager gratis · 349 kr/mnd med early bird · Ingen bindingstid",
    }} />
  );
}
function SeoTestimonial({ page }: { page: SeoPageData }) {
  return (
    <section className={styles.testimonial} aria-label="Eksempelomtale">
      <div className="container">
        <SeoTestimonialCarousel reviews={seoTestimonials[page.mode]} />
      </div>
    </section>
  );
}
export function FreeTrialCTA() {
  const trust = [
    ...seoOffer.trust,
    ...(seoOffer.storageInNorwayVerified ? [seoOffer.storageLabel] : []),
  ];
  return (
    <section className={`section ${styles.trialSection}`}>
      <div className={`container ${styles.trialBlock}`}>
        <div className={styles.trialContent}>
          <p className="eyebrow">EARLY BIRD</p>
          <h2>{seoOffer.title}</h2>
          <p className={styles.trialCopy}>{seoOffer.description}</p>
          <Checks className={styles.trialTrust} items={trust} />
          <p className={styles.trialPrice}>
            Ordinær pris: <s>{pricing.plans[0].price} {pricing.currency}/{pricing.interval}</s>
          </p>
          <div className={styles.actions}>
            <Action className="button">
              Få early bird-pris <Icon name="arrow" />
            </Action>
          </div>
          <Link className={styles.priceLink} href="/#priser">
            Se pris og innhold
          </Link>
          <p><small>Early bird gjelder ved registrering innen 31. oktober 2026.</small></p>
        </div>
        <div className={`${styles.practiceVisual} ${styles.trialVisual}`}>
  <DesktopPreview mode="refund" />
</div>
      </div>
    </section>
  );
}
function SeoFAQ({ page }: { page: SeoPageData }) {
  return (
    <section className={`section ${styles.faqSection}`}>
      <div className={`container ${styles.faq}`}>
        <div>
          <h2>Ofte stilte spørsmål</h2>
        </div>
        <div className={styles.questions}>
          {page.faqs.map((faq) => (
            <details key={faq.question} name="seo-faq">
              <summary>
                {faq.question}
                <span aria-hidden="true">⌄</span>
              </summary>
              <p>
                <ContextualText text={faq.answer} links={faq.answerLinks} />
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
export function SeoLandingPage({ page }: { page: SeoPageData }) {
  return (
    <>
      <Link className="skip-link" href="#innhold">
        Hopp til innhold
      </Link>
      <Header />
      <main id="innhold" className={styles.page}>
        <SeoHero page={page} />
        <SeoFeatureRow page={page} />
        <SeoValueSection page={page} />
        {showTestimonials && <SeoTestimonial page={page} />}
        <FreeTrialCTA />
        <SeoFAQ page={page} />
      </main>
      <FooterCTA earlyBird />
      <Footer />
    </>
  );
}
