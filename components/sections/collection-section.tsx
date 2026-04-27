import Link from "next/link";
import { ProductCardModel } from "@/presentation/view-models/product-view-model";
import { ProductCard } from "@/components/product/product-card";

type CollectionSectionProps = {
  title: string;
  subtitle: string;
  products: ProductCardModel[];
};

export function CollectionSection({ title, subtitle, products }: CollectionSectionProps) {
  return (
    <section className="section-spacing bg-gradient-to-b from-black via-luxury-slate to-black">
      <div className="luxury-container">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-luxury-gold">Featured</p>
            <h2 className="font-[var(--font-serif)] text-3xl md:text-5xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-luxury-white/70">{subtitle}</p>
          </div>
          <Link
            href="/products"
            className="text-xs uppercase tracking-[0.25em] text-luxury-gold transition hover:text-luxury-beige"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
