# Simbi Portal

The public website for **[Simbi](https://simbi.monkeyandres.com)** — a privacy-first AI memory that lives on the user's own hardware, not on someone else's cloud.

This repo is the website itself: bilingual ES/EN, plain HTML/CSS/Vite, no tracking, no analytics.

## What's inside

| Page | What it is |
|---|---|
| [`/`](https://simbi.monkeyandres.com/) | Landing — what Simbi is, in 30 seconds. |
| [`/about.html`](https://simbi.monkeyandres.com/about.html) | The long-form essay: why it exists, the philosophy. |
| [`/business.html`](https://simbi.monkeyandres.com/business.html) | Public business plan — pricing, where the money goes, four promises, today's facts, roadmap, risks. Living document. |
| [`/colabora.html`](https://simbi.monkeyandres.com/colabora.html) | Four ways to collaborate (try it, share, connect, expert eyes) plus sponsor tiers. |
| [`/faq.html`](https://simbi.monkeyandres.com/faq.html) | Plain-language FAQ for non-technical readers (mums, grandparents, anyone). |

## Sponsorship

GitHub Sponsors is live: **[github.com/sponsors/MonkeyAndres](https://github.com/sponsors/MonkeyAndres)**

The full breakdown of tiers and what each one includes is on the public page:
**[simbi.monkeyandres.com/colabora.html#apoyo](https://simbi.monkeyandres.com/colabora.html#apoyo)**

Quick reference:

| Tier | Monthly | What you get |
|---|---|---|
| 🌱 Seed   | 5 €   | Name in `SUPPORTERS.md` (optional) |
| 🌿 Sprout | 25 €  | + private monthly newsletter, voice in priority polls |
| 🌳 Tree   | 100 € | + quarterly 1-on-1 (1h) |
| 🏛️ Pillar | 500 € | + monthly 1-on-1, logo on Patrons page, early access |
| 🦦 Patron | 1,500 € | + 2h monthly strategic channel. No vote on decisions: Simbi stays independent. |

100% of the money goes back into the project. No outside shareholders, no exit. If the project grows enough, non-profit foundation. Full reasoning in the [public business plan](https://simbi.monkeyandres.com/business.html).

## Tech

- **Plain HTML + CSS + Vite** — no framework, intentionally minimal.
- **TypeScript** for the small landing-page i18n script.
- **Bun** for tooling (build, screenshots).
- **Playwright** to capture full-page screenshots of every page in both languages.

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
```

## Build & preview

```bash
npm run build
npm run preview      # http://localhost:4173
```

The built site goes to `dist/` and deploys automatically to GitHub Pages on push to `main`. CNAME points to `simbi.monkeyandres.com`.

## Screenshots of every page

```bash
npm run preview &
npm run screenshots  # outputs PNGs of every page (desktop + mobile, ES + EN)
```

Files land in `./screenshots/` (gitignored).

## License

[AGPL-3.0](LICENSE) for the portal source. The prose, copy and structure of the website are part of the same license — you can fork, adapt, run your own version. If you do, please don't pretend it's the original.

---

Built by [Andrés Martín Angulo](https://monkeyandres.com). One person, working in the open. No company, no board, no exit.
