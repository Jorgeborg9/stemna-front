# Launch copy audit

Source of truth: the supplied launch product brief. Stemna prepares reimbursement information, lets practitioners select relevant rates, generates the reimbursement file and makes it available for download. The practitioner uploads/submits it to HELFO themselves. One plan: 499 kr/month, 30 days free, no commitment.

All five marketing routes, metadata, feature and benefit lists, pricing, FAQ answers, contextual anchors, example testimonials, action dialogs and code-rendered previews were reviewed. No direct submission, invoice, accounting, Helsenett access, automatic processing or full journal-system capability is claimed in active text. Legacy route names remain for link continuity. The `invoice` icon identifier denotes an existing SVG reused for rates; it is not visible copy or an invoicing feature. The direct-submission FAQ explicitly answers “Nei”. Video CTA rendering is disabled by `showProductVideo`; booking-dialog support is retained.

## Static-image exceptions — unchanged as requested

These are illustrations, not reliable representations of the launch feature set. Baked-in text cannot be corrected by changing React copy:

| Active asset | Where used | Remaining unsupported implication |
| --- | --- | --- |
| `public/Reference/pasientjournal.png` | Logoped/audiopedagog product sections | Journal functionality, Fakturering navigation and “Send til HELFO”/“Generer faktura” actions. |
| `public/images/stemna-main.png` | Private-practice product section | Journal and invoicing views, financial totals, “Send HELFO-krav”, claim/payment status. |
| `public/images/Helfo3.png` | HELFO product section | Submission/status controls, payment totals, invoicing navigation; some rendered labels are garbled. |
| `public/Reference/Helfo2.png` | Shared SEO free-trial CTA | Laptop UI suggests sending reimbursement claims to HELFO from Stemna. |
| `public/images/Helfo4.png` | Homepage web-based section | Laptop UI suggests direct HELFO submission. |
| `public/images/Helfo5.png` | Shared dark footer CTA background | Laptop UI suggests direct HELFO submission, although subdued by the overlay. |

Older unused files `public/Reference/Helfo.png` and `public/images/stemna-laptop-placeholder.png`, plus the design reference images, also depict broader/unsupported UI. They are not used as current page visuals. No static images were edited or replaced in this pass.

## Conservative boundaries

No claims added for clinical journal authoring, invoicing/accounting, claim-status synchronization, automatic rate updates, reminders, imports/migration, payment collection, Helsenett provision or integrations. No new storage-location, certification, guaranteed compliance or tax claims. Existing signup/login/contact/booking URLs remain unconfigured and retain honest availability dialogs. Fictional testimonial labels remain visible; these are not verified customer claims.
