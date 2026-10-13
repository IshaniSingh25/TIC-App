import type { Metadata } from "next";
import { Suspense } from "react";
import CandleCatalogue, { CatalogueView } from "@/components/sections/CandleCatalogue";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Candles",
  description:
    "All twelve AURVI candles, filterable by mood — from Hearthsmoke to Stillwater.",
};

export default function CandlesPage() {
  return (
    <div className="px-(--spacing-gutter) pb-(--spacing-section) pt-16 md:pt-24">
      <Reveal>
        <p className="text-eyebrow text-stone">The full range</p>
        <h1 className="text-display-lg mt-5 max-w-[14ch] font-display font-light text-balance">
          Twelve candles, six moods.
        </h1>
      </Reveal>

      {/* useSearchParams needs a Suspense boundary in a static export; the
          fallback is what gets prerendered — the full, unfiltered range. */}
      <Suspense fallback={<CatalogueView selected={[]} />}>
        <CandleCatalogue />
      </Suspense>
    </div>
  );
}
