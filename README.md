# Bridget Beatty Consulting — Website

A single-page marketing site for Bridget Beatty Consulting, built and maintained by Aex Meridian LLC.

## Tech stack

- **Framework:** [Astro](https://astro.build) (static site — no server, no database)
- **Styling:** Plain CSS in component `<style>` blocks + `src/styles/global.css` and `src/styles/tokens.css` for shared variables
- **JavaScript:** Vanilla JS only, in `src/scripts/`
- **Hosting:** Cloudflare Pages, connected to this GitHub repo — every push to `main` auto-deploys
- **Images:** Optimized automatically at build time by Astro's `<Image>` component (`astro:assets`)

## Project structure

```
src/
  components/   Header, Footer, and all homepage sections
  data/site.ts  All site copy, contact info, and content arrays in one place
  layouts/      Layout.astro — shared <head>, fonts, meta tags, JSON-LD
  pages/        index.astro (homepage), 404.astro, terms-of-service.astro
  scripts/      Small vanilla JS files (nav toggle, scroll reveal, back-to-top, etc.)
  styles/       tokens.css (colors/spacing/type), global.css, buttons.css
public/         Static files served as-is: favicons, robots.txt, sitemap.xml, _headers
```

## Making changes

- **Wording changes** (headlines, service descriptions, testimonials, etc.) mostly live in `src/data/site.ts` — check there first before hunting through component files.
- **Adding/removing a homepage section** — sections are assembled in `src/pages/index.astro`.
- **Colors/fonts** — edit the CSS variables at the top of `src/styles/tokens.css`; everything else references those.

## Before going live

- Update the placeholder domain in `astro.config.mjs` (`site:` field) to the real production domain once it's registered, and update the matching URLs in `public/robots.txt` and `public/sitemap.xml`.
- `src/pages/terms-of-service.astro` is a draft pending legal review — do not treat as final without a lawyer's sign-off.

## Local development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # production build to ./dist
npm run preview   # preview the production build locally
```

## Who owns what

- Domain, GitHub repo, and Cloudflare Pages project: owned by the client (Bridget Beatty Consulting), not the agency.
- Requests for changes: routed through Aex Meridian LLC (Caleb).
