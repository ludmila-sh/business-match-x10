@PERSONAL.md

# Project

Landing site for **Бизнес Мэтч** («Клуб успешных коллабораций»): free monthly meetings of entrepreneurs and experts in Minsk. The club has no site and no Instagram of its own; announcements go out through someone else's account and a Telegram group, and the club cannot be found by name in search.

Goal: make the club findable and grow attendance from ~8–12 to a stable 18–20 people per meeting (later 30). On the site people should be able to: understand what the club is, sign up for the next meeting, contact the team (Telegram, phone).

Volunteer project: the author is a team member, unpaid. There are no other technical people in the team and the future editor is unknown, so content must be editable by any non-technical team member without the author (see `ROADMAP.md`).

The repo name "X10" refers to the Russian business community X10: Бизнес Мэтч was created separately from it but is loosely related. Do not use "X10" on the site unless the team decides so.

## Sources

- `sources/philosophy.md` — values, cultural code, mission, strategy 2027–2030 (written by the project manager). The primary source for all texts.
- `sources/logo.jpg`, `sources/logo-removebg*.png` — current logo (raster only, small; no vector yet). `sources/flyer.jpg` — a meeting flyer (time, venue, season results).
- Real photos from past meetings exist at the manager's; not in the repo yet.
- Read `sources/` before writing any site text.

## Stack

- Static site, Russian only, mobile-first (traffic comes from Instagram/Telegram).
- Proposed: Astro + git-based CMS, free static hosting. Not approved yet, see `ROADMAP.md` → Open decisions.
- All editable content (next meeting, form link, block texts, numbers, FAQ) lives in content files, never in markup.

## Structure

- `sources/` — raw materials from the team, not published as is.
- `docs/` — notes for humans.
- `credentials/` — local access files, not committed, the agent does not read them.
- `ROADMAP.md` — goal, milestones, open decisions. `STATUS.md` — current state, overwritten.

## Content rules

- Never invent facts, numbers, testimonials, names, dates, addresses. Anything missing from `sources/` becomes a `TODO:` placeholder saying what to clarify.
- Tone: warm, supportive, plain; address the reader as «вы». No infobusiness hype, no income promises.
- Keep the honest disclaimer on the site: the club does not promise anyone a ready business or guaranteed income; it creates conditions in which joint results become possible.
- Terminology: «круг» = a group of ~10 people sitting together; «раунд» = a stage of the meeting. Do not mix them.
- Photos of people only real ones and only with their consent; no AI-generated people.
- Decisions that affect later stages (stack, data storage, domain) are not made silently: record them in `ROADMAP.md` → Open decisions.

## Visual style

- Keep the brand anchors: logo, navy + gold, motto «От действий к совместным результатам!».
- Use them in a restrained, flat way: light background, navy/gold as accents, real photos, readable Cyrillic typography. No glossy 3D, lens flares, stock-like imagery or emoji headings.

## SEO / GEO (required in v1)

- Semantic HTML, one `h1`, meaningful `title` and `meta description` with keywords: «бизнес мэтч минск», «нетворкинг для предпринимателей Минск», «бизнес-клуб Минск», «совместные проекты предпринимателей».
- Open Graph / Twitter Card, JSON-LD (`Organization`, `Event` from content files, `FAQPage`), `sitemap.xml`, `robots.txt`, `llms.txt`.
- Key facts (what, where, when, free, for whom) stated in text, never only in images. Images: WebP, `alt`, lazy-load.

## Personal data

- Sign-up collects personal data (Law of the Republic of Belarus No. 99-З). The site needs a privacy policy and the form needs a consent text; the data operator and wording are agreed with a lawyer. Do not add new data collection without raising this.

## README

I do not write READMEs by hand: you maintain it following the structure already laid out in `README.md`. Rules:
- Write in English, briefly: a README is read to start the project quickly and understand what it does.
- Sections: one-sentence description, Quick start (install, run), Configuration, Usage (how to edit content), Project structure, Development (checks, hooks), Deployment. Delete an empty section, do not add extra ones.
- Update the README when the way to run, the configuration or the structure change. Do not duplicate what is in `ROADMAP.md` and `STATUS.md`.
