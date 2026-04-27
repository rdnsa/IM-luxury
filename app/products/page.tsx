import { getProducts } from "@/application/use-cases/get-products";
import { createMockProductRepository } from "@/infrastructure/repositories/mock-product-repository";
import { ProductCatalog } from "@/components/sections/product-catalog";
import { mapProductToCardModel } from "@/presentation/view-models/product-view-model";

export default async function ProductsPage() {
  const products = await getProducts(createMockProductRepository());
  const cards = products.map(mapProductToCardModel);

  return (
    <main className="luxury-container pb-14 pt-[calc(env(safe-area-inset-top)+7.5rem)] sm:pt-28 md:pb-24 md:pt-32">
      <header className="mb-8 space-y-4 rounded-[1.75rem] border border-white/10 bg-gradient-to-r from-[#15120e] via-[#0e0e0e] to-[#15120e] p-5 sm:p-6 md:mb-10 md:rounded-[2rem] md:p-8">
        <p className="text-[11px] uppercase tracking-[0.26em] text-luxury-gold sm:text-sm sm:tracking-[0.35em]">Product Showcase</p>
        <h1 className="font-[var(--font-serif)] text-[2.2rem] leading-[0.95] text-luxury-white sm:text-5xl md:text-6xl">Bags & Shoes</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-luxury-white/70 sm:text-base md:text-lg">
          Explore curated luxury collections with personal concierge support and exclusive weekly drops.
        </p>
        <div className="inline-flex w-full flex-wrap items-center gap-x-3 gap-y-2 rounded-[1.5rem] border border-white/15 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-luxury-white/65 sm:w-auto sm:rounded-full sm:tracking-[0.2em]">
          <span>Limited Releases</span>
          <span className="hidden text-luxury-gold sm:inline">|</span>
          <span>Premium Packaging</span>
          <span className="hidden text-luxury-gold sm:inline">|</span>
          <span>Fast Consultation</span>
        </div>
      </header>
      <ProductCatalog products={cards} />
    </main>
  );
}
