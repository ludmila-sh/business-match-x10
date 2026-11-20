# Status

Updated: 2026-11-20

## Works end-to-end

- Static Astro site builds four pages: main landing, two first-screen concepts and a privacy-policy draft.
- Main landing has its own full-page design, separate from the preserved `/hero-a` and `/hero-b` previews. It includes club description, audience, meeting format, first-season results, benefits, values, honest disclaimer and FAQ.
- Hero uses an explicitly labelled temporary Pexels photo; the primary CTA leads to the confirmed registration link when configured, otherwise to the meeting information section.
- Meeting registration and Telegram links remain safely inactive until verified URLs and complete current meeting details are supplied.
- Sitemap and search indexing are intentionally disabled until a permanent domain is selected.

## Verified

- `npm run check`: 0 errors, warnings or hints.
- `npm run build`: succeeds; generated all four static routes in `dist/` and optimized local images.
- `npm audit --audit-level=high`: 0 vulnerabilities reported by npm registry.
- Astro content schema rejects non-HTTPS contact/registration links and invalid meeting dates/times.
- npm install scripts are disabled in `.npmrc`; dependencies are pinned exactly and locked.

## Not done / blockers to publication

- Manager/team still needs to approve the production visual style and logo treatment.
- Need current meeting date/time/place and working registration link, plus Telegram URL.
- Real photos exist with the manager but are not in the repository; consent must be confirmed.
- `/privacy` is explicitly a draft, not an approved legal policy. Identify the data operator and get lawyer review.
- Need permanent domain, hosting and account owner.
- Need a tested content-editing workflow for a non-technical future editor. No CMS has been selected or installed.
- Do not publish the “85 participants” figure until its meaning is confirmed.
- No sitemap or analytics yet; add after domain and privacy decisions.

## Next

Show the landing and both preserved hero concepts to the manager. Ask for the missing event/contact data, consent-cleared photos, logo source files and feedback on the visual direction. See `ROADMAP.md` for launch decisions and follow-up.
