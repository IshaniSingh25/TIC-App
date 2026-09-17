import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { BLUR, photo } from "@/lib/images";

/**
 * Deliberately asymmetric rather than a full-bleed carousel: the copy column
 * holds the left 45%, the image runs to the right edge of the viewport and is
 * allowed to bleed past the gutter.
 */
export default function Hero() {
  return (
    <section className="grid items-center gap-12 pt-16 pb-(--spacing-section) md:grid-cols-[0.9fr_1.1fr] md:gap-0 md:pt-24">
      <div className="px-(--spacing-gutter) md:pr-16">
        <Reveal>
          <p className="text-eyebrow text-stone">Est. 2021 · Small batch</p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-display-xl mt-7 font-display font-light text-balance">
            Slow light for the everyday.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-md text-base leading-relaxed text-ink-soft">
            Twelve scents, six moods, poured by hand in coconut and apricot wax.
            Made to be burned on a Tuesday — not saved for an occasion that
            never quite arrives.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href="/candles">Shop all candles</ButtonLink>
            <ButtonLink href="/collections" variant="outline">
              Find your mood
            </ButtonLink>
          </div>
        </Reveal>
      </div>

      <Reveal className="relative aspect-[4/5] w-full md:aspect-[5/6]">
        <Image
          src={photo("photo-1603006905003-be475563bc59", 1400, 1700)}
          alt="A lit candle on a linen-covered table in low evening light"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          placeholder="blur"
          blurDataURL={BLUR}
          className="object-cover"
        />
      </Reveal>
    </section>
  );
}
