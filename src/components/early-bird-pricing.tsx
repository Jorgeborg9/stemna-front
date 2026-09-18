"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Action } from "./actions";
import styles from "./early-bird-pricing.module.css";

// Europe/Oslo is back on CET (UTC+01:00) by 31 October 2026.
// One absolute launch deadline for every visitor; never persisted or restarted.
const DEADLINE = Date.parse("2026-10-31T23:59:59+01:00");
const EARLY_PRICE = 349;

export function EarlyBirdPricing({ features, reassurance, arrow, regularPrice }: {
  features: ReactNode;
  reassurance: ReactNode;
  arrow: ReactNode;
  regularPrice: number;
}) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setNow(Date.now());
    const initial = window.setTimeout(tick, 0);
    const interval = window.setInterval(tick, 1000);
    return () => {
      window.clearTimeout(initial);
      window.clearInterval(interval);
    };
  }, []);

  const active = now !== null && now < DEADLINE;
  const expired = now !== null && !active;
  const seconds = now === null ? null : Math.max(0, Math.ceil((DEADLINE - now) / 1000));
  const values = seconds === null ? [null, null, null, null] : [
    Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24,
    Math.floor(seconds / 60) % 60, seconds % 60,
  ];
  const price = active ? EARLY_PRICE : regularPrice;

  return (
    <section id="priser" className="section pricing-section">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">EN ENKEL PRIS</p>
          <h2>Én pris. Alt inkludert.</h2>
          <p>{active ? "Kom i gang med Stemna til early bird-pris." : "Ingen kompliserte pakker eller skjulte kostnader."}</p>
        </div>
        <div className="trial-intro centered">
          {active ? <p>Registrer deg innen 31. oktober og behold early bird-prisen så lenge abonnementet ditt er aktivt.</p> : <p>Prøv Stemna gratis i 30 dager. Ingen bindingstid.</p>}
        </div>
        <div className="pricing-grid">
          <article className={`pricing-card ${styles.card}`}>
            {active && <div className={styles.offer}><span className={styles.badge}>EARLY BIRD</span><span>Lanseringstilbud</span></div>}
            <div className={styles.countdown}>
              {expired ? <p role="status">Early bird-tilbudet er avsluttet.</p> : <>
                <p>{active ? "Early bird avsluttes om" : "Henter tilbudsstatus …"}</p>
                <div className={styles.units} role="timer" aria-live="off" aria-label="Tid igjen til early bird-tilbudet avsluttes">
                  {["DAGER", "TIMER", "MIN", "SEK"].map((label, index) => <div key={label}><strong>{values[index] === null ? "––" : String(values[index]).padStart(2, "0")}</strong><span>{label}</span></div>)}
                </div>
                <p className={styles.deadline}>Frist: <time dateTime="2026-10-31T23:59:59+01:00">31. oktober 2026 kl. 23:59</time> (norsk tid)</p>
              </>}
            </div>
            {active && <div className={styles.regular}><span className={styles.srOnly}>Ordinær pris: </span><s>{regularPrice} kr / mnd</s></div>}
            <div className={`price ${styles.price}`}><strong>{now === null ? "—" : price} kr</strong><span>/ mnd</span></div>
            {active && <div className={styles.saving}>Du sparer {regularPrice - EARLY_PRICE} kr/mnd</div>}
            {active && <p className={styles.retention}>Behold prisen så lenge abonnementet er aktivt.</p>}
            {reassurance}
            <Action className="button" ctaLocation="pricing">{active ? "Få early bird-pris" : "Prøv gratis i 30 dager"} {arrow}</Action>
            <p className={styles.payment}>{now === null ? "0 kr i dag. 30 dager gratis." : `0 kr i dag. Deretter ${price} kr/mnd etter prøveperioden.`}</p>
            <div className="price-divider" />
            {features}
          </article>
        </div>
      </div>
    </section>
  );
}
