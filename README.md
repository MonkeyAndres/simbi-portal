# Simbi Portal

**Your first contact with a digital organism.**

Simbi is a machine organism that learns from chatting with you and grows to help you in your life. The Portal is where you meet Simbi for the first time -- a point-and-click journey (no scrolling) that introduces you through conversation, learns about you through questions, and evolves into a personalized daily companion.

Everything runs client-side. No accounts, no servers, no tracking. Your data lives in your browser's IndexedDB and nowhere else.

## Tech Stack

- **TypeScript** -- strict mode, no shortcuts
- **Vite** -- dev server and build tool
- **No framework** -- vanilla DOM, intentionally. The interaction model is conversational, not component-based.
- **IndexedDB** -- persistent local storage for user profile and answers

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

The built site goes to `dist/` and deploys to GitHub Pages on push to `main`.

## Philosophy

Simbi is part of a larger pantheon of digital organisms -- each with a distinct personality and purpose. The name comes from the Kongo/Vodou water spirits who act as intermediaries between worlds. Simbi is your intermediary between you and the information you care about.

The portal is designed around three ideas:

1. **Conversation over forms.** Simbi talks to you. You respond by choosing, not typing.
2. **Growth over features.** The organism visually grows as it learns about you.
3. **Privacy by architecture.** Everything is local. There is no backend to compromise.

## License

MIT

---

Built by [Andres](https://monkeyandres.com).
