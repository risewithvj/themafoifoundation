# The Ma Foi Foundation — Website

A modern, responsive, static marketing site for **The Ma Foi Foundation** (the CSR arm of CIEL HR),
built with [Astro](https://astro.build/). It presents the Foundation's story, impact and its
30+ skilling programmes across 10 verticals, with real programme photography throughout.

- **Static output** — deploys to any static host (Vercel, Netlify, GitHub Pages, S3, …).
- **One layout + data-driven programme pages** — all programme pages are generated from
  `src/data/programs.js` via `src/pages/programs/[slug].astro`.
- **Design tokens locked in `src/styles/global.css`** — brand colours (only) and the
  Playfair Display + Montserrat type pairing.

## Requirements

- **Node.js 18.20.8+, 20.3.0+, or 22+** (Astro 5). Developed on Node 22 LTS.
- npm (ships with Node).

## Run locally

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:4321
npm run build      # produce the static site in dist/
npm run preview    # serve the built dist/ locally
```

Deploy by publishing the generated `dist/` folder (build command `npm run build`, output
directory `dist`).

## Project structure

```
src/
  components/   reusable UI (Header mega-menu, Footer, Gallery, StatBadges, Timeline, …)
  data/         site config, programme content, image manifest
  layouts/      base Layout (head, fonts, header, footer)
  pages/        routes — home, about, programmes index + [slug], impact, gallery, etc.
  styles/       global.css (design tokens + base styles)
public/
  images/       optimised programme photography, brand logos and partner tiles
```

## Editing content

- **Add/edit a programme:** edit `src/data/programs.js` — the page regenerates automatically.
- **Add photos:** drop files in `public/images/<folder>/` and add the paths to
  `src/data/images.json`.
- **Colours / fonts:** `src/styles/global.css` (the only place brand tokens are defined).
