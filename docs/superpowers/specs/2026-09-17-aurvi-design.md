# AURVI — design spec

Date: 2026-09-17
Status: implemented

## What this is

A marketing site for AURVI, a fictional small-batch candle brand. Design
reference: misa.in — a luxury scented-candle retailer. We take its *rhythm*
(deep whitespace, one accent colour, alternating dense-grid / airy-editorial
sections, mood-based product taxonomy) and build an original brand on top of it.
Nothing is cloned: different name, palette, typography, copy, mood names,
product names, and a different hero structure.

## Decisions

| Decision | Choice | Why |
| --- | --- | --- |
| Domain | Own candle brand | Keeps Misa's category so the mood taxonomy idea transfers, without reusing their identity |
| Scope | Marketing site only | No cart, no checkout, no payment. Pure design showcase |
| Stack | Next.js 16 App Router, TypeScript, Tailwind v4 | Routed multi-page site, image optimisation, static prerendering |
| Palette | Warm sand & ink + terracotta | Artisanal and warm; diverges from Misa's cool neutral grey |
| Imagery | Pinned Unsplash CDN URLs | Photoreal without shipping assets. Each id verified 200 before commit |
| Brand | AURVI, "Slow light for the everyday" | Short, ownable, reads Indian-luxury and suits ₹ pricing |

## Design system

Tokens live in `app/globals.css` under Tailwind v4 `@theme`.

| Token | Value | Use |
| --- | --- | --- |
| `--color-sand` | `#faf7f2` | Page ground |
| `--color-sand-deep` | `#f1ebe1` | Alternate section bands |
| `--color-ink` | `#1a1a18` | Headings, body |
| `--color-ink-soft` | `#3d3a35` | Long-form body copy |
| `--color-terracotta` | `#b5714f` | Accent, prices, active state |
| `--color-stone` | `#8a8177` | Meta, captions |
| `--color-line` | `#e4ddd3` | Hairline rules |

Type: Fraunces (display) + Inter (body) via `next/font/google`. Four custom
fluid utilities — `text-display-xl/lg/md` and `text-eyebrow` — carry every
heading size, so nothing sets a raw font-size.

Divergence from the reference, deliberately:

- Section headers are a hairline rule carrying a numeral and eyebrow
  (`01 — Bestsellers`), not a centred title.
- The hero is a 45/55 asymmetric split, not a full-bleed carousel.
- Sections reveal on scroll via one `IntersectionObserver` component.

## Routes

| Route | Rendering | Contents |
| --- | --- | --- |
| `/` | Static | Hero → Bestsellers (4-up) → Mood grid (6) → Story strip → New arrivals (3-up) → Testimonial |
| `/candles` | Dynamic (reads `?mood=`) | All 12, mood filter chips, result count |
| `/candles/[slug]` | SSG, 12 paths | Gallery image, notes pyramid, specs, related by shared mood |
| `/collections` | Static | Six moods, alternating image side, product list per mood |
| `/story` | Static | Brand editorial, full-bleed image, three principles |
| `/contact` | Static | Studio details + client-validated form |
| `not-found` | Static | 404 |

## Data model

`lib/products.ts` — 12 products. Each carries an **ordered** `moods` array:
`moods[0]` is the defining mood, the rest are honest secondary fits. This is
what makes filtering a design decision rather than a lookup.

`lib/moods.ts` — six moods with AURVI's own names (Hearthsmoke, First Rain,
Nightbloom, Lowlight, Stillwater, Understory), each with tagline, description,
representative notes and an image.

`lib/images.ts` — `photo(id, w, h)` builds a pinned Unsplash CDN URL; `BLUR` is
a warm-sand SVG data URI used as every image's blur placeholder.

`lib/filter.ts` — the shop filter. Documents three defensible behaviours
(strict primary-only, inclusive, scored) and currently implements inclusive
matching with primary matches sorted first. Filter state lives in the URL, so a
filtered view is shareable and the page stays a server component.

## Error handling

- Unknown `?mood=` values are dropped by `parseMoods` before reaching the filter.
- An empty mood selection shows the whole catalogue, not an empty page.
- Unknown product slug → `notFound()` → the branded 404.
- Both forms validate client-side and state plainly that nothing is sent.

## Verification performed

- `npx next build` — clean, 20 routes, all 12 product pages prerendered.
- `npx tsc --noEmit` — clean.
- All 24 Unsplash CDN ids checked for HTTP 200 before being committed.
- Every route served 200 from `next start`; an unknown path served 404.
- Rendered in Chrome: desktop (4-up grid, mood grid, hero, footer) and 390px
  mobile via iframe (hamburger nav, single column, wrapping filter chips).
- DOM audit: 15 images loaded, 0 broken, no horizontal overflow.

## Known limitations

- Photography is stock, so a few frames show other makers' vessels. One shot
  with a legible competitor label was replaced; the Stillwater mood tile still
  shows a lightly labelled jar and should be swapped if the site is ever used
  for anything real.
- Desktop screenshots were taken at a 1920px CSS viewport (the test browser was
  zoom-locked); 1440px specifically was not visually captured, though it falls
  in the same `lg` breakpoint band.
