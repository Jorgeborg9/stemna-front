# Stemna landing page

Norwegian landing page built with Next.js 16, TypeScript, App Router and Tailwind CSS 4. Frontend only; no authentication, API, database or payment integration.

## Development

```sh
npm install
npm run dev
```

Open the local URL printed by Next.js. To verify and run production:

```sh
npm run lint
npm run build
npm run start
```

## Structure

- `src/app/page.tsx`: page composition.
- `src/components/landing.tsx`: Header, Hero, HelfoSection, FeatureStrip, ProblemSolution, SwitchingSection, WebPlatformSection, AudienceSection, TrustSection, Testimonials, Pricing and Footer, plus shared logo/icon/list helpers.
- `src/components/actions.tsx`: accessible native availability dialogs and mobile navigation.
- `src/lib/landing-data.ts`: navigation, features, comparisons, steps, testimonials, pricing and destination URLs.
- `src/app/globals.css`: brand tokens, section styles and responsive layouts.
- `src/app/layout.tsx`: Norwegian language, font, page metadata and supplied brand favicon.

## Before public launch

1. Replace the explicitly labeled example testimonials with approved, authentic quotes. All testimonial data is in `landing-data.ts`.
2. Replace `ProductPreview` with a real anonymized screenshot. Its current interface and patient entries are fictional and static.
3. Launch price is one Stemna plan at 499 kr/month, with a 30-day trial and no commitment. Do not add claims about tax treatment or migration capabilities without confirmation.
4. Set verified signup, login, contact, privacy and terms destinations in `destinations`. Until configured, these actions open honest availability messages; no data is collected and no fake registration is performed.
5. The hero and target-group sections use the supplied `dame jobber.webp` and `logoped.jpg` assets.
6. The 30-day trial CTA is shared through `trial`. Card-free signup is deliberately not claimed because it is unconfirmed. No 24/7 support, certification or absolute compliance claims are made. The trust section describes the intended Norwegian product requirements, not verified security guarantees.

## Assets and reference

All three supplied files in `public/Brand/` are used without modifying or recreating them. The actual visual reference is `public/Reference/landing reference.png` (its folder and filename differ from the original brief).

Image paths, Norwegian alt text and crop positions are centralized in `photography` in `landing-data.ts`. `TherapyPhoto` preserves the original image slots and uses `next/image` with local files, responsive sizes, object-cover and hero preloading. No remote domain configuration is needed.

- Hero: `public/images/dame jobber.webp` — supplied image of a woman at a laptop.
- Target group: `public/images/logoped.jpg` — supplied image of a language exercise with a child.

The code-rendered workflow and dashboard remain illustrative. Shared `FooterCTA` retains its dark green photographic background.

The brand palette is defined in CSS variables: primary `#44A295`, secondary `#2F7A6D`, dark `#103433`, white `#FFFFFF`, with mint tints for backgrounds.

## SEO landing pages

Four static App Router routes share `src/components/seo-landing.tsx` and its scoped CSS module:

- `/journalsystem-logoped`: HELFO reimbursement preparation for logopeds.
- `/journalsystem-audiopedagog`: HELFO reimbursement preparation for audiopedagogs.
- `/helfo-oppgjor`: preparing, generating and downloading a reimbursement file; the practitioner uploads it to HELFO independently.
- `/journalsystem-privat-praksis`: patient, appointment and rate information for reimbursement preparation.

`src/lib/seo-pages.ts` holds the tailored copy, unique metadata, four FAQs per page, fictional testimonials and the shared trial offer. Prices continue to come from the original pricing config. Each page uses the same hero, feature row, desktop product illustration, value section, testimonial, large trial CTA and FAQ components. Copy follows the launch product brief: patient information, calendar, rate selection and reimbursement file generation/download. Static product images still require correction; see `CONTENT_ACCURACY.md`.

The header uses keyboard-accessible native disclosure menus for **Produkt** and **For hvem**, plus **Om oss**. Mobile navigation exposes the same links in simple groups. Existing homepage links use root-relative fragments so they work from all routes. No resource section existed, so no empty menu was added.

`Book en demo` uses the `demo` destination in `landing-data.ts`; until a verified booking URL is supplied, it opens an availability dialog. The unverified storage claim is gated by `seoOffer.storageInNorwayVerified` and is not displayed. Do not enable it without documented hosting/security details. Testimonials remain visibly labeled examples. No rating/review schema is emitted for fictional content.

The new styles use existing Stemna CSS color tokens only, and the page visuals are desktop browser concepts, never mobile phone mockups. The product video CTA is disabled with `showProductVideo` until a real video is available.
# stemna-front
