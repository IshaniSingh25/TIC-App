import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { BLUR, photo } from "@/lib/images";

/**
 * The full-bleed breather between the two product grids. Breaking out of the
 * page gutter here is what stops the homepage reading as one long grid.
 */
export default function StoryStrip() {
  return (
    <section className="mt-(--spacing-section) grid items-stretch md:grid-cols-2">
      <div className="relative min-h-[22rem] md:min-h-[34rem]">
        <Image
          src={photo("photo-1605718699793-075babe700f3", 1200, 1400)}
          alt="Wax being poured by hand into a ceramic vessel"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          placeholder="blur"
          blurDataURL={BLUR}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center bg-sand-deep px-(--spacing-gutter) py-16 md:py-24">
        <Reveal>
          <p className="text-eyebrow text-terracotta">Our story</p>
          <h2 className="text-display-md mt-5 max-w-[20ch] font-display font-light text-balance">
            Forty candles a day, and not one more.
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-ink-soft">
            AURVI began in a two-room studio in Bengaluru with a hotplate, a
            secondhand scale, and a stubborn belief that a candle should smell
            like a memory rather than a marketing brief.
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-ink-soft">
            We still pour in batches of forty. Every blend is aged two weeks
            before it is wicked, and anything that does not throw properly at
            arm&apos;s length gets melted down and started again.
          </p>
          <div className="mt-9">
            <ButtonLink href="/story" variant="outline">
              Read the long version
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
