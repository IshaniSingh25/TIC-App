"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import MoodFilters from "@/components/sections/MoodFilters";
import ProductGrid from "@/components/sections/ProductGrid";
import Reveal from "@/components/ui/Reveal";
import { filterByMoods } from "@/lib/filter";
import { MOOD_BY_ID, type MoodId } from "@/lib/moods";
import { PRODUCTS } from "@/lib/products";

/** Keeps unknown `?mood=` values from reaching the filter. */
function parseMoods(values: string[]): MoodId[] {
  return values.filter((value): value is MoodId => MOOD_BY_ID.has(value as MoodId));
}

/**
 * The site is a static export, so there is no server to read `?mood=` at
 * request time. The query is read in the browser instead; the prerendered HTML
 * is the unfiltered catalogue (see `CatalogueView` fallback in the page).
 */
export default function CandleCatalogue() {
  const searchParams = useSearchParams();
  return <CatalogueView selected={parseMoods(searchParams.getAll("mood"))} />;
}

export function CatalogueView({ selected }: { selected: MoodId[] }) {
  const products = filterByMoods(PRODUCTS, selected);

  return (
    <>
      <Reveal delay={80} className="mt-12 border-t border-line pt-8">
        <MoodFilters selected={selected} />
      </Reveal>

      <p className="text-eyebrow mt-8 text-stone">
        {products.length} {products.length === 1 ? "candle" : "candles"}
        {selected.length > 0 && (
          <>
            {" in "}
            {selected.map((id) => MOOD_BY_ID.get(id)?.name).join(" + ")}
            {" · "}
            <Link href="/candles" className="link-rule text-terracotta">
              Clear
            </Link>
          </>
        )}
      </p>

      <div className="mt-10">
        <ProductGrid products={products} priorityFirst />
      </div>
    </>
  );
}
