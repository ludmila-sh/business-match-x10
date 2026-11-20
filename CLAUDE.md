@PERSONAL.md

# Project

Static Russian-language landing page for **Бизнес Мэтч** («Клуб успешных коллабораций»), a free monthly meeting community for entrepreneurs, specialists and experts in Minsk.

The website should help people understand the club and contact or register for a current meeting. Attendance goal: 18–20 per meeting, later 30. The repo name X10 refers to a separate Russian business community; do not put X10 on the site unless the team explicitly approves it.

This is unpaid volunteer work. The author currently maintains the site; no future editor is known. Plan for content to be maintainable by a non-technical teammate, but do not claim that is solved until an editor/CMS workflow is chosen and tested.

## Sources

- Read `sources/philosophy.md` before writing or revising public-facing text. It contains values, the cultural code, the mission and a proposed strategy for 2027–2030.
- `sources/flyer.jpg` contains the existing visual direction and meeting details, but its depicted people are not real club photos and must not be used on the site.
- `sources/logo*.{jpg,png}` are small raster images. Ask the team for vector/high-resolution originals if needed.
- Real photos exist with the manager but are not in the repository. Confirm consent before publication.

## Stack and structure

- Astro static output; Node.js `>=22.23.4`; exact dependencies in `package.json` and `package-lock.json`.
- Do not add a server, database, signup form, CMS or analytics without a roadmap decision.
- `src/content/site.json` is the source of all editable site copy, FAQs, current event details and contact URLs.
- `src/components/` contains the two first-screen concepts; `/hero-a` and `/hero-b` are noindex review routes. The main page currently uses the calm concept; the manager has not approved the final direction.
- `src/pages/` contains the main landing and privacy draft. `public/robots.txt` blocks indexing during review.
- `sources/` contains raw team materials and is not published as-is. `ROADMAP.md` tracks decisions; `STATUS.md` records current state.

## Content rules

- Never invent facts, numbers, testimonials, names, dates, addresses, contact details or outcomes. Put missing information into `ROADMAP.md` and use a clearly inactive/fallback state on the page.
- Tone: warm, supportive and plain; address the reader as «вы». Avoid infobusiness hype and promises of income.
- Keep the honest disclaimer: the club does not promise each participant a ready-made business or guaranteed income; it creates conditions in which joint results become possible.
- Terminology: «круг» means a group of about ten people sitting together; «раунд» means a stage of the meeting.
- Publish only real photos with permission. Never use AI-generated people or stock imagery presented as club members.
- The first-season results supported by the sources are 6 registered projects, 2 successful projects and 1 project that reached monetization. Do not publish “85 participants” until the team confirms whether it means unique people or visits.
- Keep registration disabled until a complete current meeting record and valid HTTPS registration URL are present. Telegram and phone links must be supplied by the team, not guessed.
- `/privacy` is a draft and must not be presented as an approved policy. The data operator and legal wording need team and lawyer approval.

## Visual style

- Preserve brand anchors: current logo, navy and gold, and motto «От действий к совместным результатам!».
- Main prototype uses a calm, light layout with readable Cyrillic typography and restrained brand color. `/hero-a` preserves a flyer-like concept for comparison; the manager/team decides the production style.
- Do not use glossy 3D, lens flares, AI-looking stock scenes or emoji headings in the main site.

## Security and accessibility

- The production site is static and must not collect personal data directly. No client-side JavaScript unless a clear need is approved.
- Keep dependencies pinned, review lockfile changes, and run `npm audit` before dependency updates. `.npmrc` disables dependency install scripts; do not enable them casually.
- External URLs must use HTTPS and links opening a new tab must include `rel="noopener noreferrer"`.
- Preserve semantic HTML, keyboard-visible focus, meaningful image alt text and mobile layout. Do not put essential facts only in images.
- Keep `robots.txt` disallowing crawling until the final domain and launch materials are ready. Add canonical URL, sitemap and deployment security headers only after the domain/host is chosen.

## Checks

- `npm run check`
- `npm run build`
- `npm run audit`

Update `README.md`, `ROADMAP.md` and `STATUS.md` when the way to run, major decisions or delivery state changes. Do not edit `PERSONAL.md`, `rules/`, `dispatcher/` or `.claude/settings.json` unless explicitly requested.
