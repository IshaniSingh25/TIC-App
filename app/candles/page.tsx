import type { Metadata } from "next";
import Link from "next/link";
import MoodFilters from "@/components/sections/MoodFilters";
import ProductGrid from "@/components/sections/ProductGrid";
import Reveal from "@/components/ui/Reveal";
import { filterByMoods } from "@/lib/filter";
import { MOOD_BY_ID, type MoodId } from "@/lib/moods";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Candles",
  description:
    "All twelve AURVI candles, filterable by mood — from Hearthsmoke to Stillwater.",
};

/** Keeps unknown `?mood=` values from reaching the filter. */
function parseMoods(raw: string | string[] | undefined): MoodId[] {
  const values = Array.isArray(raw) ? raw : raw ? [raw] : [];
  return values.filter((value): value is MoodId => MOOD_BY_ID.has(value as MoodId));
}

export default async function CandlesPage({
  searchParams,
}: PageProps<"/candles">) {
  const params = await searchParams;
  const selected = parseMoods(params.mood);
  const products = filterByMoods(PRODUCTS, selected);

  return (
    <div className="px-(--spacing-gutter) pb-(--spacing-section) pt-16 md:pt-24">
      <Reveal>
        <p className="text-eyebrow text-stone">The full range</p>
        <h1 className="text-display-lg mt-5 max-w-[14ch] font-display font-light text-balance">
          Twelve candles, six moods.
        </h1>
      </Reveal>

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
    </div>
  );
}
