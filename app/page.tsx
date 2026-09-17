import Hero from "@/components/sections/Hero";
import MoodGrid from "@/components/sections/MoodGrid";
import ProductGrid from "@/components/sections/ProductGrid";
import StoryStrip from "@/components/sections/StoryStrip";
import Testimonial from "@/components/sections/Testimonial";
import SectionHeading from "@/components/ui/SectionHeading";
import { BESTSELLERS, NEW_ARRIVALS } from "@/lib/products";

/**
 * The homepage is only a composition of sections — the rhythm (dense grid →
 * airy editorial → dense grid) lives here and nowhere else, so it can be
 * reordered in one place.
 */
export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="px-(--spacing-gutter)">
        <SectionHeading
          index="01"
          eyebrow="Bestsellers"
          title="What everyone keeps coming back for."
          link={{ href: "/candles", label: "View all" }}
        />
        <ProductGrid products={BESTSELLERS} priorityFirst />
      </section>

      <section className="mt-(--spacing-section) px-(--spacing-gutter)">
        <SectionHeading
          index="02"
          eyebrow="Shop by mood"
          title="Pick a feeling. We will find the scent."
          link={{ href: "/collections", label: "All collections" }}
        />
        <MoodGrid />
      </section>

      <StoryStrip />

      <section className="mt-(--spacing-section) px-(--spacing-gutter)">
        <SectionHeading
          index="03"
          eyebrow="New arrivals"
          title="Poured this season."
        />
        <ProductGrid products={NEW_ARRIVALS} columns={3} />
      </section>

      <Testimonial />
    </>
  );
}
