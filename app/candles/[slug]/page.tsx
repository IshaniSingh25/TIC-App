import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGrid from "@/components/sections/ProductGrid";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { BLUR, photo } from "@/lib/images";
import { MOOD_BY_ID } from "@/lib/moods";
import { formatPrice, PRODUCTS, PRODUCT_BY_SLUG } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/candles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCT_BY_SLUG.get(slug);
  if (!product) return { title: "Not found" };
  return { title: product.name, description: product.blurb };
}

export default async function ProductPage({
  params,
}: PageProps<"/candles/[slug]">) {
  const { slug } = await params;
  const product = PRODUCT_BY_SLUG.get(slug);
  if (!product) notFound();

  const moods = product.moods
    .map((id) => MOOD_BY_ID.get(id))
    .filter((mood) => mood !== undefined);

  // Related = shares any mood, excluding itself. Three is enough to suggest
  // without turning the page into another shop grid.
  const related = PRODUCTS.filter(
    (other) =>
      other.slug !== product.slug &&
      other.moods.some((mood) => product.moods.includes(mood)),
  ).slice(0, 3);

  const specs = [
    { label: "Wax", value: product.wax },
    { label: "Weight", value: `${product.weightGrams} g` },
    { label: "Burn time", value: `${product.burnHours} hours` },
    { label: "Wick", value: "Braided cotton, lead-free" },
  ];

  return (
    <div className="pb-(--spacing-section)">
      <nav className="text-eyebrow px-(--spacing-gutter) pt-10 text-stone">
        <Link href="/candles" className="link-rule">
          Candles
        </Link>
        <span className="mx-3">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] bg-sand-deep md:aspect-auto md:min-h-[38rem]">
          <Image
            src={photo(product.image, 1200, 1500)}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL={BLUR}
            className="object-cover"
          />
        </div>

        <div className="px-(--spacing-gutter) md:pl-0 md:pr-(--spacing-gutter)">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {moods.map((mood) => (
                <Link
                  key={mood.id}
                  href={{ pathname: "/candles", query: { mood: mood.id } }}
                  className="text-eyebrow border border-line px-3 py-2 text-stone transition-colors hover:border-terracotta hover:text-terracotta"
                >
                  {mood.name}
                </Link>
              ))}
            </div>

            <h1 className="text-display-lg mt-6 font-display font-light text-balance">
              {product.name}
            </h1>

            <p className="mt-4 text-lg text-stone">{product.blurb}</p>

            <p className="mt-6 font-display text-2xl text-terracotta tabular-nums">
              {formatPrice(product.price)}
            </p>

            <p className="mt-8 max-w-prose leading-relaxed text-ink-soft">
              {product.story}
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8">
              {specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="text-eyebrow text-stone">{spec.label}</dt>
                  <dd className="mt-2 text-sm">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 border-t border-line pt-8">
              <p className="text-eyebrow text-stone">The blend</p>
              <ul className="mt-5 space-y-3 text-sm">
                <NoteRow label="Top" values={product.notes.top} />
                <NoteRow label="Heart" values={product.notes.heart} />
                <NoteRow label="Base" values={product.notes.base} />
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Enquire about this candle</ButtonLink>
              <ButtonLink href="/candles" variant="outline">
                Back to all
              </ButtonLink>
            </div>

            <p className="mt-6 text-sm text-stone">
              This is a design study — there is no checkout behind that button.
            </p>
          </Reveal>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-(--spacing-section) px-(--spacing-gutter)">
          <SectionHeading eyebrow="Goes well with" title="In the same mood." />
          <ProductGrid products={related} columns={3} />
        </section>
      )}
    </div>
  );
}

function NoteRow({ label, values }: { label: string; values: string[] }) {
  return (
    <li className="flex gap-6">
      <span className="w-16 shrink-0 text-stone">{label}</span>
      <span>{values.join(", ")}</span>
    </li>
  );
}
