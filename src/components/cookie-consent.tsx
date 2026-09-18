"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  getGoogleConsentState,
  isConsentPreferences,
  type ConsentPreferences,
} from "@/lib/cookie-consent";
import styles from "./cookie-consent.module.css";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const defaultPreferences: ConsentPreferences = {
  version: CONSENT_VERSION,
  analytics: false,
  marketing: false,
};

const SERVER_SNAPSHOT = "__server__";
const NO_CONSENT_SNAPSHOT = "__no-consent__";
const CONSENT_CHANGE_EVENT = "stemna:consent-changed";

function subscribeToConsent(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  };
}

function getConsentSnapshot() {
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY) ?? NO_CONSENT_SNAPSHOT;
  } catch {
    return NO_CONSENT_SNAPSHOT;
  }
}

function readStoredConsent() {
  try {
    const stored = JSON.parse(
      window.localStorage.getItem(CONSENT_STORAGE_KEY) ?? "null",
    );
    return isConsentPreferences(stored) ? stored : null;
  } catch {
    return null;
  }
}

function readSnapshotConsent(snapshot: string) {
  if (snapshot === NO_CONSENT_SNAPSHOT || snapshot === SERVER_SNAPSHOT) {
    return null;
  }
  try {
    const stored = JSON.parse(snapshot);
    return isConsentPreferences(stored) ? stored : null;
  } catch {
    return null;
  }
}

function updateGoogleConsent(preferences: ConsentPreferences) {
  window.gtag?.("consent", "update", getGoogleConsentState(preferences));
}

export function CookieSettingsLink() {
  return (
    <button
      type="button"
      className="text-link"
      onClick={() =>
        window.dispatchEvent(new CustomEvent("stemna:open-cookie-settings"))
      }
    >
      Innstillinger for informasjonskapsler
    </button>
  );
}

export function CookieConsent() {
  const consentSnapshot = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    () => SERVER_SNAPSHOT,
  );
  const storedConsent = readSnapshotConsent(consentSnapshot);
  const [isDismissed, setIsDismissed] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [view, setView] = useState<"banner" | "customize">("banner");
  const [preferences, setPreferences] = useState(defaultPreferences);
  const firstToggleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const openSettings = () => {
      const current = readStoredConsent();
      setPreferences(current ?? defaultPreferences);
      setView("customize");
      setSettingsOpen(true);
    };
    window.addEventListener("stemna:open-cookie-settings", openSettings);
    return () =>
      window.removeEventListener("stemna:open-cookie-settings", openSettings);
  }, []);

  useEffect(() => {
    if (settingsOpen && view === "customize") firstToggleRef.current?.focus();
  }, [settingsOpen, view]);

  const isOpen =
    consentSnapshot !== SERVER_SNAPSHOT &&
    (settingsOpen || (!storedConsent && !isDismissed));

  if (!isOpen) return null;

  function save(nextPreferences: ConsentPreferences) {
    try {
      window.localStorage.setItem(
        CONSENT_STORAGE_KEY,
        JSON.stringify(nextPreferences),
      );
    } catch {
      // Consent still applies for the current visit if storage is unavailable.
    }
    updateGoogleConsent(nextPreferences);
    setPreferences(nextPreferences);
    setIsDismissed(true);
    setSettingsOpen(false);
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
  }

  const acceptAll = () =>
    save({ version: CONSENT_VERSION, analytics: true, marketing: true });
  const rejectOptional = () =>
    save({ version: CONSENT_VERSION, analytics: false, marketing: false });

  return (
    <aside
      className={styles.panel}
      role="dialog"
      aria-labelledby="cookie-consent-heading"
    >
      <h2 id="cookie-consent-heading">Vi bruker informasjonskapsler</h2>
      <p className={styles.body}>
        Vi bruker nødvendige informasjonskapsler for at Stemna skal fungere. Med
        ditt samtykke bruker vi også analyse for å forstå hvordan nettsiden
        brukes og markedsføring for å måle og forbedre annonseringen.
      </p>

      {view === "customize" && (
        <div className={styles.settings}>
          <h3>Tilpass informasjonskapsler</h3>
          <div className={styles.setting}>
            <div className={styles.settingCopy}>
              Nødvendige
              <span>Informasjonskapsler som trengs for at nettsiden skal fungere.</span>
            </div>
            <span className={styles.always}>Alltid aktivert</span>
          </div>
          <div className={styles.setting}>
            <label htmlFor="analytics-cookies">
              Analyse
              <span>Hjelper oss å forstå hvordan nettsiden brukes.</span>
            </label>
            <input
              ref={firstToggleRef}
              id="analytics-cookies"
              type="checkbox"
              checked={preferences.analytics}
              onChange={(event) =>
                setPreferences({
                  ...preferences,
                  analytics: event.target.checked,
                })
              }
            />
          </div>
          <div className={styles.setting}>
            <label htmlFor="marketing-cookies">
              Markedsføring
              <span>Hjelper oss å måle og forbedre annonseringen.</span>
            </label>
            <input
              id="marketing-cookies"
              type="checkbox"
              checked={preferences.marketing}
              onChange={(event) =>
                setPreferences({
                  ...preferences,
                  marketing: event.target.checked,
                })
              }
            />
          </div>
        </div>
      )}

      <div className={styles.actions}>
        {view === "customize" ? (
          <>
            <button
              type="button"
              className={styles.primary}
              onClick={() => save(preferences)}
            >
              Lagre valg
            </button>
            <button
              type="button"
              className={styles.secondary}
              onClick={acceptAll}
            >
              Godta alle
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className={styles.primary}
              onClick={acceptAll}
            >
              Godta alle
            </button>
            <button
              type="button"
              className={styles.secondary}
              onClick={rejectOptional}
            >
              Kun nødvendige
            </button>
            <button
              type="button"
              className={styles.link}
              onClick={() => {
                setView("customize");
                setSettingsOpen(true);
              }}
            >
              Tilpass
            </button>
          </>
        )}
      </div>
    </aside>
  );
}
