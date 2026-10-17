# Mariam Ben Abdallah — Portfolio

A bilingual (EN/FR) single-page portfolio with light/dark themes: journey
timeline, internships, selected projects (AgriRisk, QoSBuddy, Concrete Strength
Optimization, Diacure, Solvey, DressMe), toolkit, CV download and contact.
Built with Vite + React + TypeScript. No backend, no environment variables.

## Deploy (GitHub → Vercel)

1. Push this folder to a GitHub repository.
2. On [Vercel](https://vercel.com): **Add New → Project** → import the repository.
3. Click **Deploy** — the framework is auto-detected, no configuration needed.

## Local development

```bash
npm install
npm run dev      # dev server
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## What to edit

Everything you may want to change lives in one file:

- **`src/content.ts`** — links (LinkedIn, GitHub, email), CV paths, profile,
  journey, internships, projects and every piece of EN/FR text.

Images:

- `public/agririsk.png` — AgriRisk interface screenshot (featured project card).

CV files served by the site (replace the files, keep the same names):

- `public/cv/cv-mariam-ben-abdallah-en.pdf`
- `public/cv/cv-mariam-ben-abdallah-fr.pdf`
