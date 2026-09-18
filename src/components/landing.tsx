import { EarlyBirdPricing } from "./early-bird-pricing";
import { TestimonialCarousel } from "./testimonial-carousel";
import Image from "next/image";
import Link from "next/link";
import { Action, MobileNavigation, DesktopNavigation } from "./actions";
import { CookieSettingsLink } from "./cookie-consent";
import {
  audienceBenefits,
  comparison,
  features,
  navigation,
  pricing,
  steps,
  trial,
  showProductVideo,
  webBenefits,
  trustBenefits,
  photography,
} from "@/lib/landing-data";

export type IconName =
  | "calendar"
  | "journal"
  | "refund"
  | "invoice"
  | "check"
  | "arrow"
  | "heart"
  | "people";
export function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M8 3v4m8-4v4M4 11h16m-12 4h1m6 0h1m-8 3h1m6 0h1" />
      </>
    ),
    journal: <path d="M14 3H5v18h14V8zM14 3v5h5M8 12h8m-8 4h6" />,
    refund: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18m-5 5h2m-11 0h3" />
      </>
    ),
    invoice: <path d="M5 21V3l3 2 4-2 4 2 3-2v18l-3-2-4 2-4-2zM9 9h6m-6 4h6" />,
    check: <path d="m6 12 4 4 8-8" />,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    heart: (
      <path d="M20.8 5.6a5.4 5.4 0 0 0-7.6 0L12 6.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 22l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" />
    ),
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 21v-3a6 6 0 0 1 12 0v3M17 5a3 3 0 0 1 0 6m1 4a5 5 0 0 1 3 5" />
      </>
    ),
  };
  return (
    <svg
      className="icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="Stemna – forsiden">
      <Image
        className="brand-icon"
        src="/Brand/Stemna logo ikon.png"
        alt=""
        width={37}
        height={46}
      />
      <Image
        className="brand-wordmark"
        src={`/Brand/Stemna logo ${light ? "hvit" : "mørk"}.png`}
        alt="Stemna"
        width={150}
        height={50}
      />
    </Link>
  );
}
export function Checks({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`checks ${className}`}>
      {items.map((item) => (
        <li key={item}>
          <span className="check-circle">
            <Icon name="check" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <DesktopNavigation />
        <div className="header-actions">
          <Action kind="login" className="text-link">
            Logg inn
          </Action>
          <Action ctaLocation="header">
            {trial.cta} <Icon name="arrow" />
          </Action>
        </div>
        <MobileNavigation />
      </div>
    </header>
  );
}
export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">FOR LOGOPEDER OG AUDIOPEDAGOGER</p>
          <h1>
            Enklere HELFO-refusjon.
            <br />
            <span>
              Mer tid til det
              <br className="desktop-break" /> som betyr noe.
            </span>
          </h1>
          <p className="hero-description">
            Bruk mindre tid på HELFO-refusjon og mer tid på pasientene. Stemna
            samler pasienter, timer og takster på ett sted – så du kan gjøre
            refusjonsarbeidet enklere og raskere.
          </p>
          <div className="hero-actions">
            <Action ctaLocation="hero">
              {trial.cta} <Icon name="arrow" />
            </Action>
            {showProductVideo && (
              <a className="button button-secondary" href="#slik-fungerer-det">
                <span className="play-icon" aria-hidden="true">
                  ▷
                </span>
                Se hvordan det fungerer
              </a>
            )}
          </div>
          <Checks className="hero-reassurance" items={trial.reassurance} />
        </div>
        <TherapyPhoto placement="hero" />
      </div>
    </section>
  );
}
export function FeatureStrip() {
  return (
    <section
      className="feature-strip"
      aria-label="Pasienter, timer og takster før HELFO-innsending"
    >
      <div className="container feature-grid">
        {features.map((feature) => (
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
// PLACEHOLDER product illustration, with static fictional example data.
// Replace this component with a real anonymized screenshot when available.
function ProductPreview() {
  return (
    <figure className="product-figure">
      <div
        className="product-preview"
        aria-label="Illustrasjon av produktoversikten med fiktive eksempeldata"
      >
        <aside className="preview-sidebar">
          <Logo light />
          <div className="preview-nav">
            {[
              "Oversikt",
              "Avtaler",
              "Pasienter",
              "Pasientinformasjon",
              "Refusjoner",
              "Takster",
            ].map((item, i) => (
              <div key={item} className={i === 0 ? "selected" : ""}>
                <Icon
                  name={
                    (
                      [
                        "calendar",
                        "calendar",
                        "people",
                        "journal",
                        "refund",
                        "invoice",
                      ] as const
                    )[i]
                  }
                />
                {item}
              </div>
            ))}
          </div>
          <div className="preview-support">Et enklere praksisliv.</div>
        </aside>
        <div className="preview-main">
          <div className="preview-topbar">
            <span>Din praksis</span>
            <span className="preview-avatar">LS</span>
          </div>
          <div className="preview-content">
            <p className="preview-date">MANDAG 12. JANUAR</p>
            <h3>God morgen!</h3>
            <p>Her er oversikten over dagen din.</p>
            <div className="preview-stats">
              {[
                { label: "Dagens avtaler", value: "4" },
                { label: "Refusjoner", value: "12" },
                { label: "Takster", value: "3" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>
            <div className="preview-appointments">
              <h4>
                Dagens avtaler <Icon name="calendar" />
              </h4>
              {["09:00", "10:00", "11:30"].map((time, i) => (
                <div className="appointment" key={time}>
                  <time>{time}</time>
                  <span>
                    <b>Eksempelpasient {i + 1}</b>
                    <small>
                      {["Konsultasjon", "Kartlegging", "Oppfølging"][i]}
                    </small>
                  </span>
                  <span className="appointment-dot" />
                </div>
              ))}
            </div>
            <div className="preview-notice">
              <span className="check-circle">
                <Icon name="check" />
              </span>
              Pasienter, timer og takster samlet.
            </div>
          </div>
        </div>
      </div>
      <figcaption>Illustrasjon av systemet · Eksempeldata</figcaption>
    </figure>
  );
}
export function ProblemSolution() {
  return (
    <section className="section problem-section">
      <div className="container problem-grid">
        <div>
          <p className="eyebrow">MINDRE ADMINISTRASJON. MER OVERSIKT.</p>
          <h2>
            Kjente utfordringer.
            <br />
            En enklere løsning.
          </h2>
          <p className="section-copy">
            Kjenner du deg igjen i noen av disse utfordringene? Stemna er bygget
            for å gjøre HELFO-refusjon og arbeidshverdagen enklere.
          </p>
          <div className="comparison">
            <div className="comparison-before">
              <h3>Dagens løsninger</h3>
              <ul>
                {comparison.before.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">−</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="comparison-after">
              <h3>Med Stemna</h3>
              <Checks items={comparison.after} />
            </div>
          </div>
        </div>
        <ProductPreview />
      </div>
    </section>
  );
}
export function SwitchingSection() {
  return (
    <section className="section switching-section" id="kom-i-gang">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">EN ENKEL OVERGANG</p>
          <h2>Det skal være enkelt å komme i gang.</h2>
          <p>
            Kom raskt i gang med en enklere arbeidsflyt for HELFO-refusjon. Vi
            hjelper deg med oppsettet, så du kan bruke Stemna i arbeidshverdagen
            fra start.
          </p>
        </div>
        <ol className="steps">
          {steps.map((step, i) => (
            <li key={step.title}>
              <div className="step-top">
                <span className="step-number">{i + 1}</span>
                {i < 2 && (
                  <span className="step-connector">
                    <Icon name="arrow" />
                  </span>
                )}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="support-block">
          <span className="support-icon">
            <Icon name="heart" />
          </span>
          <div>
            <h3>Du trenger ikke gjøre alt selv.</h3>
            <p>
              Vi hjelper deg gjennom oppstarten og svarer på spørsmål underveis.
            </p>
          </div>
          <Checks
            items={[
              "Personlig hjelp",
              "Norsk support",
              "Enkel oppstart",
              "Ingen bindingstid",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
export function AudienceSection() {
  return (
    <section id="for-hvem" className="section audience-section">
      <div className="container audience-grid">
        <TherapyPhoto placement="audience" />
        <div>
          <p className="eyebrow">DIN PRAKSIS. DINE BEHOV.</p>
          <h2>
            Bygget for logopeder
            <br />
            og audiopedagoger
          </h2>
          <p className="section-copy">
            Stemna er utviklet for arbeidshverdagen til{" "}
            <Link className="contextual-link" href="/journalsystem-logoped">
              logopeder
            </Link>{" "}
            og{" "}
            <Link
              className="contextual-link"
              href="/journalsystem-audiopedagog"
            >
              audiopedagoger
            </Link>
            . Pasienter, timer, takster og HELFO-refusjon samles i en enklere
            arbeidsflyt.
          </p>
          <Checks items={audienceBenefits} />
          <a className="inline-link" href="#kom-i-gang">
            Bli kjent med en enklere hverdag <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
export function Testimonials() {
  return <TestimonialCarousel />;
}
export function Pricing() {
  return (
    <EarlyBirdPricing
      regularPrice={pricing.plans[0].price}
      features={<Checks items={pricing.plans[0].features} />}
      reassurance={<Checks className="pricing-reassurance" items={trial.reassurance} />}
      arrow={<Icon name="arrow" />}
    />
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Logo />
          <p>Mer tid til det som betyr noe.</p>
          <nav aria-label="Bunnmeny">
            {navigation.slice(0, 3).map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <Action kind="contact" className="text-link">
              Kontakt
            </Action>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Stemna</span>
          <div>
            <Action kind="privacy" className="text-link">
              Personvern
            </Action>
            <Action kind="terms" className="text-link">
              Vilkår
            </Action>
            <CookieSettingsLink />
          </div>
          <span>Utviklet for en enklere praksishverdag.</span>
        </div>
      </div>
    </footer>
  );
}

// Keep the original image-slot dimensions; use a labeled fallback if a source is removed.
function TherapyPhoto({ placement }: { placement: "hero" | "audience" }) {
  const photo = photography[placement];
  return (
    <div
      className={`${placement === "hero" ? "hero-photo" : "audience-photo"} photo-placeholder`}
    >
      {photo.source ? (
        <Image
          src={photo.source}
          alt={photo.alt}
          fill
          sizes={
            placement === "hero"
              ? "(max-width: 760px) calc(100vw - 40px), (max-width: 1296px) 44vw, 532px"
              : "(max-width: 760px) calc(100vw - 40px), (max-width: 1296px) 45vw, 563px"
          }
          style={{ objectFit: "cover", objectPosition: photo.objectPosition }}
          preload={placement === "hero"}
        />
      ) : (
        <>
          <span className="placeholder-icon">
            <Icon name="people" />
          </span>
          <h3>{photo.title}</h3>
          <p>{photo.description}</p>
          <span className="placeholder-label">
            Bildeplassholder · erstattes med fagrelevant foto
          </span>
        </>
      )}
    </div>
  );
}
export function WebPlatformSection() {
  return (
    <section className="section web-section">
      <div className="container audience-grid">
        <figure className="web-platform-figure">
          <Image
            className="audience-photo web-platform-photo"
            src="/images/Helfo4.png"
            alt="Stemna i bruk på en bærbar datamaskin hjemme i sofaen"
            width={1200}
            height={800}
            sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1296px) 45vw, 563px"
          />
          <figcaption>Illustrasjon av den webbaserte løsningen</figcaption>
        </figure>
        <div>
          <p className="eyebrow">ET WEBBASERT SYSTEM</p>
          <h2>Jobb der du er.</h2>
          <p className="section-copy">
            Stemna er webbasert. Logg inn fra datamaskinen din og ha pasienter,
            timer og refusjonsarbeidet tilgjengelig der du jobber.
          </p>
          <Checks className="web-benefits" items={webBenefits} />
        </div>
      </div>
    </section>
  );
}
export function TrustSection() {
  return (
    <section id="om-oss" className="trust-section">
      <div className="container support-block">
        <div className="trust-content">
          <span className="trust-flag" aria-hidden="true">
            <svg
              width="30"
              height="22"
              viewBox="0 0 22 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#BA0C2F" d="M0 0h22v16H0z" />
              <path fill="#FFFFFF" d="M6 0h4v16H6zM0 6h22v4H0z" />
              <path fill="#00205B" d="M7 0h2v16H7zM0 7h22v2H0z" />
            </svg>
          </span>
          <h2>Utviklet i Norge. For norske behandlere.</h2>
          <p>
            Stemna utvikles for norske logopeder og audiopedagoger, med norske
            krav til personvern og informasjonssikkerhet som utgangspunkt.
          </p>
        </div>
        <Checks items={trustBenefits} />
      </div>
    </section>
  );
}
