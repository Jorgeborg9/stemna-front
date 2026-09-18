export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "stemna-cookie-consent";

export type ConsentPreferences = {
  version: typeof CONSENT_VERSION;
  analytics: boolean;
  marketing: boolean;
};

export function isConsentPreferences(
  value: unknown,
): value is ConsentPreferences {
  if (!value || typeof value !== "object") return false;

  const consent = value as Partial<ConsentPreferences>;
  return (
    consent.version === CONSENT_VERSION &&
    typeof consent.analytics === "boolean" &&
    typeof consent.marketing === "boolean"
  );
}

export function getGoogleConsentState(preferences: ConsentPreferences) {
  return {
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_storage: preferences.marketing ? "granted" : "denied",
    ad_user_data: preferences.marketing ? "granted" : "denied",
    ad_personalization: preferences.marketing ? "granted" : "denied",
  } as const;
}
