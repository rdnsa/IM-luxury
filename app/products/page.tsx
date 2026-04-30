import { getProducts } from "@/application/use-cases/get-products";
import { getProductRepository } from "@/infrastructure/container";
import { ProductCatalog } from "@/components/sections/product-catalog";
import { mapProductToCardModel } from "@/presentation/view-models/product-view-model";

export default async function ProductsPage() {
  const products = await getProducts(getProductRepository());
  const cards = products.map(mapProductToCardModel);

  return (
    <main className="luxury-container pb-14 pt-[calc(env(safe-area-inset-top)+7.5rem)] sm:pt-28 md:pb-24 md:pt-32">
      <header className="mb-8 space-y-4 border-b border-luxury-gold/25 pb-8 md:mb-10 md:pb-10">
        <p className="text-[11px] uppercase tracking-[0.26em] text-luxury-gold sm:text-sm sm:tracking-[0.35em]">Product Showcase</p>
        <h1 className="font-[var(--font-serif)] text-[2.2rem] leading-[0.95] text-luxury-white sm:text-5xl md:text-6xl">Signature Bags</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-luxury-white/70 sm:text-base md:text-lg">
          Explore a focused luxury bag collection with clear product details, refined finishes, and personal concierge
          support before checkout.
        </p>
        <div className="inline-flex w-full flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.16em] text-luxury-white/65 sm:w-auto sm:tracking-[0.2em]">
          <span>Curated Totes</span>
          <span className="hidden text-luxury-gold sm:inline">|</span>
          <span>Elegant Clutches</span>
          <span className="hidden text-luxury-gold sm:inline">|</span>
          <span>Private Bag Styling</span>
        </div>
      </header>
      <ProductCatalog products={cards} />
    </main>
  );
}
