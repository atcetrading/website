# ATCE (الأرض الطيبة)

Website for الأرض الطيبة للاستيراد و التصدير و تجارة الكيماويات — an import, export and trading company (salt is the main product for now; fruits & vegetables export is a possible next category). English brand name: ATCE.

- Languages: English, Arabic (RTL); German later
- Stack: [Astro](https://astro.build) + React + Tailwind CSS, static output for GitHub Pages
- Requires Node 22 (`fnm use` reads `.nvmrc`)

## Commands

```sh
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # static site into dist/
npm run preview   # serve dist/
```

## Structure

- `src/pages/[lang]/` — pages (home, industries, products, about, contact); `/` redirects to `/en/`
- `src/i18n/` — UI strings (`en.json`, `ar.json`) and helpers (`utils.ts`)
- `src/data/` — industries and products (bilingual dummy content)
- `src/layouts`, `src/components` — layout and shared components
- `src/styles/global.css` — Tailwind theme tokens (colours, fonts)

## Adding a language

Add the code to `languages` in `src/i18n/utils.ts` and to `i18n.locales` in `astro.config.mjs`, create `src/i18n/<code>.json`, and add the field to each entry in `src/data/*`.

## TODO

- Set `site` (and `base`) in `astro.config.mjs` once the repo/domain exist
- Replace dummy copy, contact details and approvals wording with real content
- Connect the contact form to a form service
