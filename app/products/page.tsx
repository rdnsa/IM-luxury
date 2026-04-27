import { getProducts } from "@/application/use-cases/get-products";
import { createMockProductRepository } from "@/infrastructure/repositories/mock-product-repository";
import { ProductCatalog } from "@/components/sections/product-catalog";
import { mapProductToCardModel } from "@/presentation/view-models/product-view-model";

export default async function ProductsPage() {
  const products = await getProducts(createMockProductRepository());
  const cards = products.map(mapProductToCardModel);

  return (
    <main className="luxury-container section-spacing pt-32">
      <header className="mb-10 space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-luxury-gold">Product Showcase</p>
        <h1 className="font-[var(--font-serif)] text-4xl text-luxury-white md:text-5xl">Bags & Shoes</h1>
        <p className="max-w-2xl text-luxury-white/70">
          Explore curated luxury collections with personal concierge support and exclusive weekly drops.
        </p>
        <div className="inline-flex flex-wrap gap-3 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-luxury-white/65">
          <span>Limited Releases</span>
          <span className="text-luxury-gold">•</span>
          <span>Premium Packaging</span>
          <span className="text-luxury-gold">•</span>
          <span>Fast Consultation</span>
        </div>
      </header>
      <ProductCatalog products={cards} />
    </main>
  );
}
