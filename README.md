# Leandro Zanardo — Portfolio

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css&logoColor=white)

**Full-stack software engineer** portfolio — a fast, accessible, multilingual site that doubles as a **live code sample**: component-driven UI, strict TypeScript, and production-minded UX (themes, i18n, resume download).

> **For recruiters & hiring managers:** If you want a quick signal beyond the résumé — how I structure front-end code, care for accessibility, and ship polished experiences — this repository is it.

---

## Highlights

| What you’ll notice | Why it matters |
| ------------------ | -------------- |
| **React 18 + TypeScript + Vite** | Modern toolchain, fast feedback, type-safe UI |
| **Tailwind CSS** | Consistent design system, responsive layout |
| **i18next** — PT-BR, EN, ES | International-ready product thinking |
| **Light / dark theme** with persistence | Real-world UX details |
| **Accessibility** — skip link, semantic sections, ARIA where it counts | Inclusive, professional delivery |
| **Case studies & experience** | Clear narrative of impact and stack |

---

## Live site & contact

| | |
| --- | --- |
| **Repository** | [github.com/leandrozanardo/portfolio](https://github.com/leandrozanardo/portfolio) |
| **LinkedIn** | [linkedin.com/in/leandro-zanardo](https://www.linkedin.com/in/leandro-zanardo/) |
| **GitHub** | [github.com/leandrozanardo](https://github.com/leandrozanardo/) |

_Add your production URL here after deploy (e.g. Vercel, Netlify, GitHub Pages)._

---

## Tech stack (this project)

- **UI:** React 18, Tailwind CSS  
- **Language:** TypeScript (strict build via `tsc --noEmit`)  
- **Build:** Vite 6  
- **i18n:** i18next + react-i18next  
- **Quality:** ESLint 9  

---

## Getting started

**Requirements:** Node.js **18+** (LTS recommended).

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (typically `http://localhost:5173`).

### Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start dev server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## Project structure (overview)

```
src/
  components/     # Layout, sections, controls, UI primitives
  context/        # Theme provider
  data/           # Portfolio content & assets mapping
  i18n/           # i18next configuration
  locales/        # pt-BR, en, es JSON strings
  lib/            # Shared constants (contact, CV path, etc.)
public/
  images/         # Case study & about imagery
  docs/CV.docx    # Résumé for download CTA (Word)
```

---

## Deploy

Build output is emitted to `dist/`. Point any static host at that folder after `npm run build`.  
If you use **GitHub Pages** with a project URL, set Vite `base` to your repo path (e.g. `/portfolio/`) in `vite.config.ts`.

---

## License

This project is **private** / personal portfolio code. All rights reserved unless you explicitly choose to add an open-source license.
