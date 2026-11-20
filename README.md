# Business Match Minsk

A Russian-language static landing page for a free monthly community of entrepreneurs and experts in Minsk.

## Quick start

Requirements: Node.js `>=22.23.4`.

1. Install the locked dependencies: `npm ci --ignore-scripts`
2. Start the local site: `npm run dev`
3. Open the local URL printed by Astro (usually `http://localhost:4321`).

## Configuration

There are no runtime environment variables. The site is static and uses no server-side secrets.

## Usage

Edit `src/content/site.json` to update page copy, FAQ, meeting details, registration URL and contacts. Only use HTTPS links. Empty meeting fields keep registration disabled until the team supplies complete, current details. Replace the meeting details together so the page never publishes an incomplete event.

Add real, consent-approved meeting photos under `src/assets/meetings/` and reference them from the gallery in `src/pages/index.astro`. Do not use generated people or photos without participant consent.

The production landing page is `/`. Compare the preserved first-screen concepts at `/hero-a` and `/hero-b`; both routes are marked `noindex`.

## Project structure

- `src/content/site.json` — editable Russian site content and current meeting configuration.
- `src/components/LandingHero.astro` — production landing hero; `HeroGlossy.astro` and `HeroCalm.astro` power the preserved A/B previews.
- `src/pages/` — landing page, concept previews and privacy-policy draft.
- `src/layouts/` — shared document metadata and security policy.
- `src/styles/` — shared design tokens and base styles.
- `sources/` — materials supplied by the team; not published directly.
- `public/` — static files, crawler instructions and `llms.txt`.
- `ROADMAP.md` and `STATUS.md` — project direction and current state.

## Development

- Type and template checks: `npm run check`
- Static production build: `npm run build`
- Dependency advisory check: `npm run audit`
- Secret scanning hook: `pre-commit install`

The npm configuration disables package install scripts. Dependencies are pinned exactly in `package.json` and `package-lock.json`. Review lockfile changes and audit advisories before updating dependencies.

## Deployment

`npm run build` generates the static site in `dist/`. A preview can be deployed to a static host for review. Before public launch, the team still needs confirmed meeting/registration details, contact links, consent-approved club photos, a lawyer-reviewed privacy policy, a permanent domain and hosting headers. `public/robots.txt` blocks indexing during review; update it and add the final-domain sitemap at launch.
