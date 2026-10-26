# Ameenu Musa — Portfolio

Personal portfolio for Ameenu Musa, a full-stack developer based in Nigeria. The site presents four products — Bevis, LEL Store, Oron, and DevAssist — with the same case-study structure: context, what was built, technical notes, and a live link.

## Stack

- Next.js 16 (App Router)
- React 19 and TypeScript
- Tailwind CSS v4
- Schibsted Grotesk and Fragment Mono via `next/font`
- No UI kit, icon library, form service, or animation library

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production checks:

```bash
npm run lint
npm run build
npm run start
```

## Content

- `src/content/projects.ts` — project copy, stack, and live links
- `src/content/experience.ts` — roles and education
- `src/content/skills.ts` — capability matrix
- `src/content/site.ts` — profile, navigation, and social links

Project pages are anchored sections on the home page: `#bevis`, `#lel-store`, `#oron`, and `#devassist`.

## Assets

- `public/work/*.webp` — screenshots captured from the live products in October 2026
- `public/og.png` — social preview image
- `src/app/icon.svg` — favicon

The project screenshots are real captures, not mockups. If a live product changes substantially, replace its image rather than editing the screenshot.

## Environment

Set the public site URL for canonical, Open Graph, sitemap, and JSON-LD URLs:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

Without it, the site falls back to `http://localhost:3000`, which is correct for local work but not for production metadata.

## Notes

- LEL Store is client-owned, single-vendor work. The live site is [lelstore.com](https://lelstore.com/).
- Bevis, Oron, and DevAssist are personal products.
- Only live project links are shown. Private repositories are not linked.
- No usage, revenue, or testimonial claims are made on the site.
