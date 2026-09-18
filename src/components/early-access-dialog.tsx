"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { duplicateMessage, failureMessage, professions } from "@/lib/early-access";
import { trackTrialCtaClick, type TrialCtaLocation } from "@/lib/tracking";
import styles from "./early-access-dialog.module.css";

export function EarlyAccessAction({ children, className = "button", ctaLocation }: { children: ReactNode; className?: string; ctaLocation?: TrialCtaLocation }) {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" className={className} onClick={() => { if (ctaLocation) trackTrialCtaClick(ctaLocation); setOpen(true); }}>{children}</button>
    {open && <InterestDialog onClose={() => setOpen(false)} />}
  </>;
}

function InterestDialog({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const pending = useRef(false);
  const id = useId();
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<"success" | "duplicate" | null>(null);
  const [error, setError] = useState("");
  useEffect(() => { dialog.current?.showModal(); }, []);
  useEffect(() => { if (result) title.current?.focus(); }, [result]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    pending.current = true;
    setSending(true);
    setError("");
    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      const body = await response.json();
      if (!response.ok || !["success", "duplicate"].includes(body.status)) throw new Error();
      setResult(body.status);
    } catch { setError(failureMessage); }
    finally { pending.current = false; setSending(false); }
  }

  return <dialog ref={dialog} className={`info-dialog ${styles.dialog}`} aria-labelledby={`${id}-title`} onClose={onClose} onClick={event => {
    if (event.target === event.currentTarget) dialog.current?.close();
  }}>
    <div className="dialog-inner">
      <button type="button" className={styles.close} aria-label="Lukk" onClick={() => dialog.current?.close()}>×</button>
      <span className="eyebrow">{result ? "DU ER PÅ LISTEN" : "EARLY BIRD"}</span>
      <h2 id={`${id}-title`} ref={title} tabIndex={-1}>{result ? "Takk for interessen!" : "Få early bird-prisen"}</h2>
      {result ? <>
        <p role="status">{result === "duplicate" ? duplicateMessage : "Vi gir deg beskjed så snart Stemna åpner for registrering."}</p>
        <button className="button" onClick={() => dialog.current?.close()}>Lukk</button>
      </> : <>
        <p>Meld interesse nå, så gir vi deg beskjed så snart Stemna åpner. Registrerer du deg i early bird-perioden, får du Stemna til 349 kr/mnd og beholder prisen så lenge abonnementet er aktivt.</p>
        <form onSubmit={submit} className={styles.form} aria-busy={sending}>
          <label htmlFor={`${id}-name`}>Navn</label>
          <input id={`${id}-name`} name="name" type="text" autoComplete="name" required maxLength={120} pattern=".*\S.*" />
          <label htmlFor={`${id}-email`}>E-post</label>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={254} />
          <label htmlFor={`${id}-profession`}>Jeg er</label>
          <select id={`${id}-profession`} name="profession" required defaultValue="">
            <option value="" disabled>Velg yrke</option>
            {professions.map(profession => <option key={profession}>{profession}</option>)}
          </select>
          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor={`${id}-website`}>Nettside</label>
            <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          {error && <p className={styles.error} role="alert">{error}</p>}
          <button type="submit" className="button" disabled={sending}>{sending ? "Sender..." : "Meld interesse"}</button>
          <p className={styles.support}>30 dager gratis · Ingen bindingstid</p>
        </form>
      </>}
    </div>
  </dialog>;
}
