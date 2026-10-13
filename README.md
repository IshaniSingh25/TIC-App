# AURVI

A marketing site for a fictional small-batch candle brand, built as a design
study. Visual language inspired by [misa.in](https://www.misa.in) — original
brand, palette, typography, copy and structure.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · `next/font` (Fraunces +
Inter). No database, no API routes, no cart. Built as a static export for
GitHub Pages; `/candles` reads its mood filter from the query string in the
browser.

## Layout

```
app/        routes — /, /candles, /candles/[slug], /collections, /story, /contact
components/ layout (header, footer, newsletter) · sections · ui primitives
lib/        products, moods, filter logic, image helper
docs/       the design spec this was built from
```

## Where to change things

| Want to change | File |
| --- | --- |
| Colours, type scale, section rhythm | `app/globals.css` (`@theme` block) |
| Products, prices, notes | `lib/products.ts` |
| Mood names and copy | `lib/moods.ts` |
| How the shop filter behaves | `lib/filter.ts` |
| Homepage section order | `app/page.tsx` |

## Imagery

Photos are pinned Unsplash CDN ids (not the deprecated random `source.unsplash`
endpoint), so builds are reproducible. `lib/images.ts` builds the URLs and
supplies a warm-sand blur placeholder. To use your own photography, drop files
in `public/` and swap the `image` field on each product for a local path.

## Note

AURVI is not a real company. Prices, addresses, the testimonial and the studio
story are invented. The contact and newsletter forms validate input and then say
so — nothing is transmitted or stored.
