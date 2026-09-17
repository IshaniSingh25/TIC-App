import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { BLUR, photo } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How AURVI got from a two-room studio in Bengaluru to forty candles a day.",
};

const PRINCIPLES = [
  {
    title: "Forty at a time",
    body: "Batch size is a quality decision, not a marketing one. Forty is what two people can pour before the wax drops out of its temperature window.",
  },
  {
    title: "Two weeks of nothing",
    body: "Every blend cures for a fortnight before it is wicked. Fragrance oil and wax need time to stop being two things.",
  },
  {
    title: "Arm's length or nothing",
    body: "If a candle cannot be smelled from a metre away after twenty minutes, the batch is melted down and reformulated.",
  },
];

export default function StoryPage() {
  return (
    <div className="pb-(--spacing-section)">
      <div className="px-(--spacing-gutter) pt-16 md:pt-24">
        <Reveal>
          <p className="text-eyebrow text-stone">Our story</p>
          <h1 className="text-display-xl mt-6 max-w-[14ch] font-display font-light text-balance">
            We are slower than we need to be.
          </h1>
        </Reveal>
      </div>

      <Reveal className="relative mt-16 aspect-[16/10] w-full md:aspect-[21/9]">
        <Image
          src={photo("photo-1596433809571-baab6e05bb9b", 1800, 900)}
          alt="The AURVI studio bench, mid-pour"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR}
          className="object-cover"
        />
      </Reveal>

      <div className="mt-20 grid gap-12 px-(--spacing-gutter) md:grid-cols-[1fr_1.3fr] md:gap-20">
        <Reveal>
          <p className="text-eyebrow sticky top-28 text-stone">
            Bengaluru, 2021
          </p>
        </Reveal>

        <Reveal delay={80} className="max-w-prose space-y-6 leading-relaxed text-ink-soft">
          <p className="text-display-md font-display font-light text-ink">
            It started because a gifted candle smelled like a taxi air
            freshener.
          </p>
          <p>
            The first hundred pours went in the bin. So did the second hundred.
            What finally worked was not a better fragrance oil — it was
            patience: lower pour temperatures, longer cures, and the willingness
            to throw away a batch that was merely fine.
          </p>
          <p>
            Our blends are built with perfumers in Grasse and in Mumbai, then
            tested here, in ordinary rooms with ordinary ceilings. A candle that
            only performs in a showroom is not a candle, it is a photograph.
          </p>
          <p>
            Everything is poured into stoneware that can outlive the wax. When
            the candle is finished, wash the vessel out with hot water and keep
            it. That is the whole sustainability programme — no badge, no
            certificate, just a jar worth keeping.
          </p>
        </Reveal>
      </div>

      <section className="mt-(--spacing-section) px-(--spacing-gutter)">
        <div className="grid gap-10 border-t border-line pt-12 md:grid-cols-3 md:gap-16">
          {PRINCIPLES.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 80}>
              <p className="text-eyebrow text-terracotta">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 font-display text-2xl font-light">
                {principle.title}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                {principle.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-(--spacing-section) px-(--spacing-gutter) text-center">
        <Reveal>
          <h2 className="text-display-md mx-auto max-w-[20ch] font-display font-light text-balance">
            Start with the small one.
          </h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-stone">
            Ninety grams of our house scent, for the price of a decent coffee
            habit. It is the honest way to find out if we are for you.
          </p>
          <div className="mt-9">
            <ButtonLink href="/candles/the-small-one">
              See The Small One
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
