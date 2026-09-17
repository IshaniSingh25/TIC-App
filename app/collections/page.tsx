import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { BLUR, photo } from "@/lib/images";
import { MOODS } from "@/lib/moods";
import { matchesMood } from "@/lib/filter";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Six moods — Hearthsmoke, First Rain, Nightbloom, Lowlight, Stillwater and Understory.",
};

export default function CollectionsPage() {
  return (
    <div className="px-(--spacing-gutter) pb-(--spacing-section) pt-16 md:pt-24">
      <Reveal>
        <p className="text-eyebrow text-stone">Collections</p>
        <h1 className="text-display-lg mt-5 max-w-[18ch] font-display font-light text-balance">
          We sort by feeling, not by fragrance family.
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
          Nobody walks into a room wanting an oriental-woody. They want it to
          feel like something. Six moods, and the candles that belong to each.
        </p>
      </Reveal>

      <div className="mt-20 space-y-24">
        {MOODS.map((mood, index) => {
          const products = PRODUCTS.filter((product) =>
            matchesMood(product, mood.id),
          );
          // Alternate which side the image sits on, so the page has a gait.
          const imageFirst = index % 2 === 0;

          return (
            <Reveal key={mood.id}>
              <section className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div
                  className={`relative aspect-[5/4] bg-sand-deep ${
                    imageFirst ? "" : "md:order-2"
                  }`}
                >
                  <Image
                    src={photo(mood.image, 1000, 800)}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL={BLUR}
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-eyebrow text-terracotta">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-display-md mt-4 font-display font-light">
                    {mood.name}
                  </h2>
                  <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
                    {mood.description}
                  </p>

                  <p className="mt-6 text-sm text-stone">
                    {mood.notes.join(" · ")}
                  </p>

                  <ul className="mt-8 space-y-2 border-t border-line pt-6 text-sm">
                    {products.map((product) => (
                      <li key={product.slug}>
                        <Link
                          href={`/candles/${product.slug}`}
                          className="link-rule"
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={{ pathname: "/candles", query: { mood: mood.id } }}
                    className="link-rule text-eyebrow mt-8 inline-block text-terracotta"
                  >
                    Shop {mood.name}
                  </Link>
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
