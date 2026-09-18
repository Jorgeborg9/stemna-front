export type TrialCtaLocation =
  | "header"
  | "hero"
  | "product_overview"
  | "pricing"
  | "final_cta"
  | "seo_hero"
  | "seo_value"
  | "seo_trial";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function trackTrialCtaClick(location: TrialCtaLocation) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "trial_cta_click",
    cta_location: location,
  });
}
