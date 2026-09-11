"use client";
import Link from "next/link";
import { EarlyAccessAction } from "./early-access-dialog";
import { useRef, useState } from "react";
import { destinations, navigationGroups, trial } from "@/lib/landing-data";
import navStyles from "./site-navigation.module.css";

const messages = {
  demo: {
    title: "Se Stemna i bruk",
    text: "Vi gjør klart for å vise deg Stemna. Demobooking er ikke tilgjengelig ennå. Her vil du kunne avtale en gjennomgang når vi åpner.",
  },
  login: {
    title: "Logg inn i Stemna",
    text: "Innlogging er ikke tilgjengelig ennå. Her vil du finne veien til praksisen din når Stemna åpner.",
  },
  contact: {
    title: "Personlig hjelp, på norsk",
    text: "Vi vil hjelpe deg med spørsmål, oppstart og refusjonsarbeidet i Stemna. Kontaktinformasjon kommer her før vi åpner for registrering.",
  },
  privacy: {
    title: "Personvern",
    text: "Personvernerklæringen blir tilgjengelig her før vi åpner for registrering. Denne siden har ikke noe registreringsskjema.",
  },
  terms: {
    title: "Vilkår",
    text: "Fullstendige vilkår og bekreftede priser blir tilgjengelige før du kan opprette konto eller bestille Stemna.",
  },
};
export function Action({
  kind = "signup",
  children,
  className = "button",
}: {
  kind?: "signup" | keyof typeof messages;
  children: React.ReactNode;
  className?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  if (kind === "signup") return <EarlyAccessAction className={className}>{children}</EarlyAccessAction>;
  if (destinations[kind])
    return (
      <Link className={className} href={destinations[kind]!}>
        {children}
      </Link>
    );
  return (
    <>
      <button className={className} onClick={() => dialog.current?.showModal()}>
        {children}
      </button>
      <dialog
        ref={dialog}
        className="info-dialog"
        aria-label={messages[kind].title}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="dialog-inner">
          <span className="eyebrow">STEMNA</span>
          <h2>{messages[kind].title}</h2>
          <p>{messages[kind].text}</p>
          <button className="button" onClick={() => dialog.current?.close()}>
            Lukk
          </button>
        </div>
      </dialog>
    </>
  );
}
export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-navigation">
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? "Lukk" : "Meny"}
        <span aria-hidden="true">{open ? "×" : "☰"}</span>
      </button>
      {open && (
        <nav id="mobile-menu" aria-label="Mobilmeny">
          {navigationGroups.map((group) => (
            <div className={navStyles.mobileGroup} key={group.label}>
              <span>{group.label}</span>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <Link href="/#om-oss" onClick={() => setOpen(false)}>
            Om oss
          </Link>
          <Action kind="login" className="text-link">
            Logg inn
          </Action>
          <Action>
            {trial.cta} <span aria-hidden="true">↗</span>
          </Action>
        </nav>
      )}
    </div>
  );
}

export function DesktopNavigation() {
  const nav = useRef<HTMLElement>(null);
  return (
    <nav
      ref={nav}
      className="desktop-nav"
      aria-label="Hovedmeny"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          const open =
            nav.current?.querySelector<HTMLDetailsElement>("details[open]");
          if (open) {
            open.open = false;
            open.querySelector("summary")?.focus();
            event.preventDefault();
          }
        }
      }}
    >
      {navigationGroups.map((group) => (
        <details
          name="main-navigation"
          className={navStyles.dropdown}
          key={group.label}
          onBlur={(event) => {
            if (
              !event.currentTarget.contains(event.relatedTarget as Node | null)
            )
              event.currentTarget.open = false;
          }}
        >
          <summary>
            {group.label}
            <span aria-hidden="true">⌄</span>
          </summary>
          <div className={navStyles.menu}>
            {group.items.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                onClick={(event) => {
                  const details = event.currentTarget.closest("details");
                  if (details) details.open = false;
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      ))}
      <Link href="/#om-oss">Om oss</Link>
    </nav>
  );
}
