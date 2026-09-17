import Image from "next/image";
import Link from "next/link";
import { BLUR, photo } from "@/lib/images";
import { moodName } from "@/lib/moods";
import { formatPrice, type Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  /** Feeds `sizes` so the browser downloads an appropriately sized crop. */
  columns?: 3 | 4;
  priority?: boolean;
};

export default function ProductCard({
  product,
  columns = 4,
  priority = false,
}: ProductCardProps) {
  const sizes =
    columns === 3
      ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw";

  return (
    <Link href={`/candles/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand-deep">
        <Image
          src={photo(product.image, 800, 1000)}
          alt={product.name}
          fill
          sizes={sizes}
          placeholder="blur"
          blurDataURL={BLUR}
          priority={priority}
          className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
        />
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg font-normal">{product.name}</h3>
        <span className="text-sm text-terracotta tabular-nums">
          {formatPrice(product.price)}
        </span>
      </div>

      <p className="mt-1 text-sm leading-relaxed text-stone">
        {product.blurb}
      </p>

      <p className="text-eyebrow mt-3 text-stone/80">
        {moodName(product.moods[0])}
      </p>
    </Link>
  );
}
