import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { BLUR, photo } from "@/lib/images";
import { MOODS } from "@/lib/moods";

/**
 * Six mood tiles. The note list is stacked under the name and revealed on
 * hover/focus by animating its max-height — so it stays in the DOM for screen
 * readers and for anyone browsing by keyboard.
 */
export default function MoodGrid() {
  return (
    <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {MOODS.map((mood, index) => (
        <Reveal key={mood.id} delay={index * 60}>
          <Link
            href={{ pathname: "/candles", query: { mood: mood.id } }}
            className="group block"
          >
            <div className="relative aspect-[5/4] overflow-hidden bg-sand-deep">
              <Image
                src={photo(mood.image, 900, 720)}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL={BLUR}
                className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.05]"
              />
            </div>

            <h3 className="mt-5 font-display text-2xl font-light">
              {mood.name}
            </h3>
            <p className="mt-1 text-sm text-stone">{mood.tagline}</p>

            <p className="mt-2 max-h-0 overflow-hidden text-sm text-terracotta opacity-0 transition-all duration-500 ease-[var(--ease-out-soft)] group-hover:max-h-16 group-hover:opacity-100 group-focus-visible:max-h-16 group-focus-visible:opacity-100">
              {mood.notes.join(" · ")}
            </p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
