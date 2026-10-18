# C12 Landing Page: end-to-end build plan

**Goal:** a fast, honest marketing page for the Damaged Product Evidence Assistant that explains the product to marketplace support teams, shows the review workflow, and collects pilot sign-ups. It is separate from the reviewer app.

**Owner suggestion:** Person 3 (frontend) builds it; Person 1 writes the copy facts and legal/limits text and reviews claims; Person 2 supplies one real analysis output for the demo section. Start only after core app gate G4, or in parallel if P3 has spare time.

**Style reference:** https://nexstudio.demos.tailgrids.com/ ("NexStudio", a Tailgrids React agency template built with Tailwind, with services, projects, testimonials and blog pages). My fetch returned only the page metadata, not the rendered page, so I could not inspect its layout or visuals. Task L1 below captures the reference properly before any design work.

## 0. Rules for this page

| # | Rule |
|---|------|
| W1 | **Do not copy the template.** Tailgrids templates may be paid or licensed. Either buy and follow the licence, or recreate a similar *style and layout pattern* with your own code, own colours, own copy and own assets. Never copy its code, images, text or logo. |
| W2 | **No invented proof.** No fake customer logos, testimonials, ratings, revenue, "trusted by", or accuracy numbers. All data is synthetic and demand is unproven; say "pilot" and "early access". |
| W3 | Claims must match the product rules: the tool separates claims, observations, metadata and unknowns; it never approves refunds or judges fraud or authenticity; a human confirms. |
| W4 | Any number on the page is labelled (`assumption`, `measured`, `example`) or removed. Example outputs are marked "Example, synthetic data". |
| W5 | No secrets, no API keys, no real customer data in the landing code. |
| W6 | Accessible by default: keyboard, contrast, alt text, reduced motion. |

## 1. What the page must achieve
- **Visitor:** a marketplace support lead or reviewer.
- **One job:** understand in 10 seconds what it does and request a pilot or try the demo.
- **Primary CTA:** "Request a pilot". **Secondary:** "See how it works" / "Open demo".
- **Success metrics (to measure, not assume):** CTA click rate, sign-ups, demo opens, scroll depth to the workflow section.

## 2. Stack and repo placement
- React + TypeScript + Vite + Tailwind CSS (same toolchain as the app, so P3 is not learning anything new).
- Lives in `landing/` in the repo, deployed separately (Vercel/Netlify/Cloudflare Pages). The app stays on its own domain or sub-path; landing links to it.
- Animation: CSS transitions first; `framer-motion` only if really needed. Icons: `lucide-react`. Fonts: self-hosted or Google Fonts, max two families.
- Content in one file `landing/src/content.ts` so copy changes never touch components.
- Sign-up form: a small `POST /api/waitlist` on the existing backend (table `waitlist(id, email, company, role, message, consent, created_at)`), or a hosted form service if you do not want backend changes. Store consent and show a privacy line.

```
landing/
  src/
    components/  Nav, Hero, ProblemStrip, HowItWorks, EvidenceDemo, Features,
                 RulesAndLimits, UseCases, Pricing, Faq, CtaBand, Footer, SignupForm
    content.ts   all copy, nav links, FAQ, pricing hypotheses
    styles/      tokens.css (colours, radii, spacing), index.css
    assets/      own illustrations/screenshots only
    pages/       Home.tsx, Privacy.tsx, Terms.tsx, NotFound.tsx
  public/        favicon, og-image.png, robots.txt, sitemap.xml
  index.html     meta, OG tags, JSON-LD
```

## 3. Page structure (maps to the pattern of an agency/product template)

| # | Section | Content for C12 |
|---|---|---|
| 1 | **Sticky nav** | Logo/wordmark, links (How it works, Features, Limits, Pricing, FAQ), CTA button, mobile menu |
| 2 | **Hero** | Headline, one-line subhead, two CTAs, product screenshot or illustrated review panel |
| 3 | **Problem strip** | 3 short pain points: statements mixed with evidence, slow reviews, inconsistent escalation |
| 4 | **How it works** | 4 steps: Submit complaint + photos, AI-assisted summary, Reviewer edits and confirms, Saved report/export |
| 5 | **Evidence demo** | Interactive or static example: the same case shown as Claim / Observation / Metadata / Unknown / Missing evidence, labelled "Example, synthetic data" |
| 6 | **Features** | Uncertainty flags, reviewer confirmation, audit trail, exact customer quotes, evidence requests, JSON/CSV export, API (coming) |
| 7 | **Rules and limits** | "What it will never do": no automatic refunds, no fraud or authenticity verdicts, no unsupported conclusions. Plain statement of limits |
| 8 | **Use cases** | Damaged item, "item does not work", packaging damage, no photo, blurry photo (from the C12 edge cases) |
| 9 | **Pricing (hypotheses)** | Three options: Standard (₹1,999/mo, 200 cases), Growth (₹5,999/mo, 600 cases), Custom ("Contact us", from ₹7,999, agreed cases). Scaled by monthly order volume. |
| 10 | **FAQ** | Accuracy, data/privacy, does it decide refunds, how are photos stored, can it connect to our tools |
| 11 | **CTA band + sign-up form** | Email, company, role, optional message, consent checkbox |
| 12 | **Footer** | Links, Privacy, Terms, contact, "Prototype built on synthetic data" note |

Skip blog and team sections in v1 unless you have real content. Do not add a testimonials section without real, permissioned quotes.

## 4. Visual direction (set after L1; defaults below)
Aim for the clean, modern agency/SaaS look the reference suggests: generous whitespace, large confident headline, soft rounded cards, subtle shadows or borders, one strong accent colour, high-contrast text, light and dark modes.

| Token | Starting value (change freely) |
|---|---|
| Accent | one saturated colour you choose (not the template's) |
| Neutrals | gray-50 to gray-900 scale |
| Radius | 12-16 px cards, 999 px pills |
| Type | one display/sans family for headings, one for body; sizes: hero 48-64, h2 32-40, body 16-18 |
| Spacing | 8-pt scale; sections 80-120 px vertical on desktop, 48-64 on mobile |
| Motion | fade/slide on scroll, 200-300 ms, disabled under `prefers-reduced-motion` |
| Imagery | your own product screenshots (from the real app with synthetic data) or simple original illustrations. No stock photos of fake customers |

## 5. Copy bank (starting drafts, edit to your voice)

- **Headline:** "Separate what customers say from what the evidence shows."
- **Subhead:** "An AI-assisted review workspace for damaged-product claims. It summarises photos and complaints, flags what is uncertain, and leaves every decision to your reviewer."
- **Hero CTAs:** "Request a pilot" / "See how it works"
- **Problem strip:** "Claims and evidence get mixed together." / "Reviews are slow and inconsistent." / "Unsupported assumptions lead to unfair outcomes."
- **How it works:** 1 "Submit the complaint and photos" 2 "Get a provisional summary" 3 "Reviewer edits, requests evidence, confirms" 4 "Save and export the report"
- **Rules band:** "Never decides refunds. Never labels a customer as fraudulent. Never states a cause it cannot see. A person always confirms."
- **Footer note:** "Prototype. Demonstrated with synthetic data. Not a production service."
- **FAQ answers must repeat the limits:** accuracy on real photos is unproven; photos are stored privately; retention is configurable; no customer data is used to train models (state only if true for your Gemini setup, check Google's terms before writing it).

## 6. Tasks in order

### L1. Capture the reference (0.5 day, you)
Open the reference site in a browser. For each section take a screenshot, note layout (columns, card style, spacing), font sizes, colours, animation and mobile behaviour. Save to `landing/reference/notes.md` and `landing/reference/shots/`. Do **not** copy HTML/CSS/images into the repo. Decide: license the template, or recreate the pattern.
DoD: one page of notes + screenshots per section; licensing decision recorded.

### L2. Content and message (0.5 day, P1 + P3)
Fill `content.ts` from the copy bank. P1 checks every sentence against rules W2-W4 and the limits in `docs/KNOWN_LIMITS.md`.
DoD: no unsupported claim; every number labelled or removed.

### L3. Design tokens and wireframe (0.5 day)
Pick accent, fonts, radius, spacing; sketch desktop and mobile wireframes of the 12 sections (paper, Figma or Canva). Light and dark token sets.
DoD: wireframes approved by the team; `tokens.css` written.

### L4. Scaffold (0.25 day)
`landing/` with Vite + React + TS + Tailwind, ESLint, `typecheck`, Prettier. Router with Home, Privacy, Terms, 404. Global layout, skip link, dark-mode toggle (respects system, stored in `localStorage` inside try/catch).
DoD: builds and deploys a blank page.

### L5. Build sections top to bottom (2 days)
Nav and hero first, then How it works, Evidence demo, Features, Rules and limits, Use cases, Pricing, FAQ, CTA, Footer. Each section is a component reading from `content.ts`. Mobile first, then tablet and desktop. Build the **Evidence demo** from a real exported example (`contracts/examples/case_detail_damage01.json` or a real run) rendered with the same section names as the app, labelled "Example, synthetic data".
DoD: all 12 sections render at 360, 768, 1280 px with no horizontal scroll.

### L6. Sign-up flow (0.5-1 day)
`SignupForm`: email (required), company, role, message, consent checkbox (required). Client validation and clear error/success states. Backend `POST /api/waitlist` with validation, honeypot field, per-IP rate limit, no logging of full form data; or a hosted form service. Thank-you state with what happens next. Test with an empty form, bad email, and double submit.
DoD: submission appears in the table (or form service); spam honeypot works; consent stored.

### L7. Interactions and motion (0.5 day)
Sticky nav shrink, smooth anchor scroll with offset, mobile menu focus trap, FAQ accordion, scroll fade-ins, button hover/focus states. Respect `prefers-reduced-motion`.
DoD: keyboard-only user can use every control; no motion when reduced-motion is on.

### L8. Accessibility, performance, SEO (1 day)
- Accessibility: semantic landmarks, one `h1`, heading order, labels, focus rings, contrast AA, alt text, `aria-expanded` on accordion/menu. Run axe or Lighthouse accessibility.
- Performance: images in WebP/AVIF with width/height, lazy-load below the fold, code-split, self-host fonts with `font-display: swap`. Targets to check (not assume): Lighthouse Performance 90+, LCP under 2.5 s on mobile.
- SEO: title, meta description, canonical, Open Graph and Twitter images, `robots.txt`, `sitemap.xml`, JSON-LD `SoftwareApplication`/`Organization` (only true fields).
DoD: Lighthouse report saved in `docs/`; failures fixed or listed.

### L9. Legal and trust pages (0.5 day)
Privacy policy (what the form collects, why, retention, contact, no sale of data), Terms (prototype, no warranty), cookie note if you add analytics. Use a template and get a proper review before collecting real emails commercially.
DoD: pages linked in footer and next to the form; consent text matches what you store.

### L10. Analytics and measurement (0.25 day)
Privacy-friendly analytics (Plausible, Umami, or none). Events: CTA click, form submit, demo open, scroll depth to How it works. No personal data in events.
DoD: events appear in the dashboard; a note in Privacy mentions it.

### L11. Cross-browser/device QA (0.5 day)
Chrome, Safari, Firefox, iOS Safari, Android Chrome; 320 px to 1920 px; slow 3G throttle; dark mode; no console errors; broken-link check; form test.
DoD: checklist in section 8 ticked.

### L12. Deploy (0.5 day)
Vercel/Netlify/Cloudflare Pages from the `landing/` folder, env var for the app URL and API base, HTTPS, custom domain optional, preview deployments for PRs, redirect `www`. Add `landing` build and typecheck to CI.
DoD: production URL live; CTA opens the app/demo; form works against the deployed backend with CORS configured for the landing origin.

### L13. Launch and iterate (ongoing)
Share with the MBA partner and 3-5 target users for feedback; record changes in `docs/change_log/`. After one week review CTA rate and sign-ups; change one thing at a time (headline, hero image, CTA text). Treat results as experiment data for the business documents, not proof of demand.

## 7. Timeline
About 7-8 working days for one person; 4-5 days if P1 handles copy/legal in parallel. If time is short, cut in this order: dark mode, motion, analytics, use-cases section, pricing section (use "Talk to us"). Never cut: honest limits band, consent on the form, accessibility basics, privacy page.

## 8. Final checklist
- [ ] Template not copied; licence or own-build decision recorded
- [ ] No fake logos, testimonials, ratings or unlabelled numbers
- [ ] Rules band states: no auto refunds, no fraud/authenticity verdict, human confirms
- [ ] Example outputs labelled synthetic
- [ ] Form validates, stores consent, resists spam; privacy page linked
- [ ] Works at 360/768/1280 px, light and dark, keyboard only
- [ ] Lighthouse accessibility and performance reports saved
- [ ] Meta, OG image, sitemap, robots in place
- [ ] No API key or secret in the bundle (`dist/` checked)
- [ ] CTA opens the live demo or app; CORS set for the landing origin
- [ ] CI builds and typechecks `landing/`
- [ ] Feedback from MBA partner and target users recorded

## 9. Self-checks before every PR
- Does any sentence promise more than the product does (accuracy, savings, "trusted by")?
- Is anything copied from the reference template?
- Is every image mine or properly licensed, with alt text?
- Does it still work with images off, JS slow, and reduced motion on?
