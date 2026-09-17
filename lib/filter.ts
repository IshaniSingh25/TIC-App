import type { MoodId } from "./moods";
import type { Product } from "./products";

/**
 * How the /candles shop page narrows the catalogue by mood.
 *
 * This is the one genuinely debatable piece of logic in the site. Products
 * carry an ORDERED mood list (`moods[0]` is the defining mood, the rest are
 * honest secondary fits), so there are at least three defensible behaviours:
 *
 *   1. Strict   — only match `product.moods[0]`. Small, clean result sets;
 *                 "Ember Hour" disappears from Lowlight even though it belongs.
 *   2. Inclusive— match any entry in `product.moods` (what is implemented
 *                 below). Nothing that fits is hidden, but a mood can return
 *                 most of the catalogue and stop feeling curated.
 *   3. Scored   — match any entry, then sort so primary matches come first.
 *                 Best of both, at the cost of a result order that shifts
 *                 under the user as they change filters.
 *
 * Swap the body of `matchesMood` / `sortForSelection` to change the feel of the
 * whole shop page. Everything downstream already handles multiple selections.
 */

/** Does this product belong under `mood`? */
export function matchesMood(product: Product, mood: MoodId): boolean {
  return product.moods.includes(mood);
}

/**
 * Filter the catalogue. An empty selection means "show everything" rather than
 * "show nothing" — an empty shop page reads as a bug, not as a filter state.
 */
export function filterByMoods(
  products: Product[],
  selected: MoodId[],
): Product[] {
  if (selected.length === 0) return products;
  const matched = products.filter((product) =>
    selected.some((mood) => matchesMood(product, mood)),
  );
  return sortForSelection(matched, selected);
}

/**
 * Order within a filtered set. Currently: candles whose PRIMARY mood is
 * selected float to the top, so a filtered view still leads with its most
 * representative products. Stable for equal ranks.
 */
export function sortForSelection(
  products: Product[],
  selected: MoodId[],
): Product[] {
  if (selected.length === 0) return products;
  const rank = (product: Product) =>
    selected.includes(product.moods[0]) ? 0 : 1;
  return [...products].sort((a, b) => rank(a) - rank(b));
}

/** Number of candles a mood would return — shown on the filter chips. */
export function countForMood(products: Product[], mood: MoodId): number {
  return products.filter((product) => matchesMood(product, mood)).length;
}
