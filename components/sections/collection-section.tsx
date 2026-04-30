import Link from "next/link";
import type { ProductCardModel } from "@/presentation/view-models/product-view-model";
import { ProductCard } from "@/components/product/product-card";

type CollectionSectionProps = {
  title: string;
  subtitle: string;
  products: ProductCardModel[];
};

export function CollectionSection({ title, subtitle, products }: CollectionSectionProps) {
  return (
    <section className="section-spacing border-t border-white/10 bg-[#060606]">
      <div className="luxury-container">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-luxury-gold">The Edit</p>
            <h2 className="font-[var(--font-serif)] text-4xl leading-tight text-luxury-white md:text-6xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-luxury-white/68">{subtitle}</p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center rounded-full border border-luxury-gold/55 px-6 py-2 text-xs uppercase tracking-[0.22em] text-luxury-gold transition hover:border-luxury-gold hover:bg-luxury-gold hover:text-luxury-black"
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
