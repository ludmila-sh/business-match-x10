# Roadmap

## Context and goal

Бизнес Мэтч is a free monthly community meeting for entrepreneurs, specialists and experts in Minsk. The website is the hub linked from announcements, partner channels and event listings. Its main goals are to make the club easier to find, explain how it works and help interested people register or contact the team.

Attendance target: 18–20 participants per meeting, later up to 30. The club does not promise income or a ready-made business.

## Current state

The Astro static site and a complete landing page are built. The production page has its own implementation; `/hero-a` and `/hero-b` remain separate, noindex design previews. A preview can be deployed for review, but public launch still needs confirmed meeting details, active contacts, approved photos, a permanent domain, an editor workflow and approved legal copy.

## Milestone 1 — Reviewable landing page

- [x] Astro static build; all content is in `src/content/site.json`.
- [x] Mobile-first Russian landing page: club, audience, three rounds, first-season results, benefits, values, disclaimer, FAQ and contact/registration areas.
- [x] Two first-screen visual concepts at `/hero-a` and `/hero-b`.
- [x] Semantic HTML, page metadata, Open Graph/Twitter metadata, Organization and FAQPage JSON-LD; conditional Event JSON-LD.
- [x] `robots.txt` blocks indexing during review; `llms.txt` contains concise factual information.
- [x] Install scripts disabled for npm dependencies; package versions pinned; production build and dependency audit checked.
- [ ] Get client/manager feedback on the calm visual and confirm whether it should be the production direction.
- [ ] Request real photos and explicit permission for publication.
- [ ] Confirm accurate first-season number wording; do not publish the ambiguous “85 participants” yet.

## Milestone 2 — Publish v1

- [ ] Agree the official name and whether the relationship to X10 should be mentioned (current default: do not mention X10 on the website).
- [ ] Add the next meeting’s confirmed date, time, place and registration link to `src/content/site.json`.
- [ ] Add the team’s Telegram link and decide whether a phone number should be public.
- [ ] Determine the personal-data operator; have the privacy policy and external-form consent reviewed by a Belarusian lawyer. The current `/privacy` page is explicitly a draft, not an approved policy.
- [ ] Choose and buy the permanent domain; select static hosting and confirm who owns the accounts.
- [ ] Decide how a non-technical teammate will update monthly content. Astro is approved; a CMS/editor has not been chosen or installed. Test the update workflow with the actual future editor before promising hand-off.
- [ ] Add approved photos; prepare final Open Graph preview image and favicon from brand source files.
- [ ] Set launch `robots.txt`, canonical domain, sitemap and hosting security headers. Enable analytics only after the team chooses a privacy-appropriate counter and confirms any legal notice requirements.
- [ ] Verify the deployed page on phone and desktop, links, structured data and registration tracking.

## Milestone 3 — Distribution and hand-off

- [ ] Add UTM-tagged links to partner Telegram channels and Minsk event listings.
- [ ] Agree how registration source will be recorded in the existing form (for example, a source field or separate links); do not assume form prefill behavior without testing it.
- [ ] Document a simple monthly content update process and train two or three team members.
- [ ] Review attendance and registrations after each meeting and adjust the page based on evidence.

## Later (not planned now)

Own registration form, CRM, admin panel, member accounts, resident directory, project catalog and Telegram bot. Revisit only after the landing page and distribution show a real need.

## Open decisions

- [ ] Domain: name, zone, payer and account owner.
- [ ] Hosting provider and account owner.
- [ ] Production visual direction: the project author prefers the calmer concept; the manager/team has not approved it yet.
- [ ] Future content editor: person, comfort with GitHub, and whether a git CMS or hosted visual builder is suitable.
- [ ] Confirm exact public name and whether X10 is mentioned.
- [ ] Confirm the main question wording with the team: “Чем я могу помочь…” or “Как я могу помочь…”.
- [ ] Verify first-season “85” as unique participants or total visits; omit it until confirmed.
- [ ] Confirm next meeting’s date/time/place and current registration link.
- [ ] Confirm Telegram contact and whether to publish a phone number.
- [ ] Obtain consent-cleared real photos and higher-resolution/vector logo files if available.
- [ ] Identify personal-data operator and approve the privacy policy and registration-form consent with a lawyer.
- [ ] Choose privacy-friendly analytics and confirm whether a cookie notice is needed.
