# Roadmap

## Context

Бизнес Мэтч is a free monthly meeting club in Minsk (2 hours, circles of ~10 people, three rounds: introduction, project and request, joint project proposals). Season 1: 5 meetings, 6 registered joint projects, 2 successful, 1 monetized. Season 2 is running. The club has no own site or Instagram and is not findable by name. Search alone will not bring people quickly, so the site is the hub that every channel links to: announcements, flyer QR code, event listings, Telegram.

## Goal (next MVP)

A live landing page on the club's own domain that a stranger can find, read in 2 minutes and act on: sign up for the next meeting or message the team. The next meeting's date and the form link can be changed by a non-technical team member without the author.

Success check: the page is reachable on the domain and works on a phone; a team member changes the meeting date through the editor without help; sign-ups show where people came from.

## Milestones

### Milestone 1 — Landing v1

- Design in the club's colors, restrained (see `CLAUDE.md` → Visual style).
- Blocks: first screen with the next meeting and sign-up button; what the club is; for whom; how a meeting goes (three rounds); season 1 results; what a participant gets; values and honest disclaimer; real photos; FAQ; next meeting again; footer with Telegram, phone, privacy policy.
- Sign-up: button to the existing Google Form with a source parameter, so the form records where the person came from.
- SEO/GEO minimum, privacy-friendly analytics.
- Editing: a git-based CMS for the next meeting, texts, FAQ and photos.
- Structure allows adding a "cases / post-releases" section later without a rewrite.

### Milestone 2 — Distribution and hand-off

- Listings: club and every meeting on Minsk event listings and partner Telegram channels, each link with UTM tags.
- Two or three team members trained to edit content; short Russian how-to for them.
- Monthly routine: new date in the CMS → site updates → same data used for the announcement.

### Later (not planned now)

Own sign-up form, CRM, admin panel, personal accounts, resident and project catalog. The strategy document (`sources/philosophy.md`, 2027–2029) mentions resident cards, CRM and a catalog of residents and projects; revisit after v1 shows real traffic.

## Open decisions

- [ ] Stack and editing: Astro + git CMS (free, needs a GitHub account per editor) vs Tilda (visual editor, own domain only on a paid plan). Future editor is unknown and non-technical, so the editor UX matters more than the code.
- [ ] Domain: name, zone, who buys and pays. Buy before launch so the site is indexed on the final address.
- [ ] Visual style: keep the current glossy style or agree a calmer version with the manager. Ask the manager for a vector or larger logo; only small PNGs exist now.
- [ ] Official name on the first screen: «Бизнес Мэтч» and/or «Клуб успешных коллабораций»; whether to mention X10 at all.
- [ ] Real photos from past meetings: get them from the manager.
- [ ] Main question wording: «Чем я могу помочь…» (flyer) or «Как я могу помочь…» (strategy, section 5).
- [ ] Season 1 numbers: is 85 unique people or total visits over 5 meetings? Wording on the site must be exact.
- [ ] Venue: always «Дом Силы Сообществ», ул. Коллекторная, 3А, or changes (affects the meeting block and `Event` markup).
- [ ] Contacts: which Telegram (group or person) and whose phone, with that person's consent.
- [ ] Personal data: data operator, consent text in the Google Form, privacy policy; agree with a lawyer.
- [ ] Analytics: cookie-free counter (no banner) vs Yandex Metrica (goals, but cookies and likely a banner).
- [ ] Photo consent from participants of past meetings.
