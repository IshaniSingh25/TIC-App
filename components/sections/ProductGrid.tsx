import ProductCard from "@/components/ui/ProductCard";
import Reveal from "@/components/ui/Reveal";
import type { Product } from "@/lib/products";

type ProductGridProps = {
  products: Product[];
  columns?: 3 | 4;
  /** Only true for the first grid on the homepage. */
  priorityFirst?: boolean;
};

export default function ProductGrid({
  products,
  columns = 4,
  priorityFirst = false,
}: ProductGridProps) {
  const columnClass =
    columns === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`grid gap-x-6 gap-y-12 ${columnClass}`}>
      {products.map((product, index) => (
        <Reveal key={product.slug} delay={(index % 4) * 70}>
          <ProductCard
            product={product}
            columns={columns}
            priority={priorityFirst && index === 0}
          />
        </Reveal>
      ))}
    </div>
  );
}
