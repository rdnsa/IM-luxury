import { CollectionSection } from "@/components/sections/collection-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ValuePropositionSection } from "@/components/sections/value-proposition-section";
import { ClientLoveSection } from "@/components/sections/client-love-section";
import { PrivateClientSection } from "@/components/sections/private-client-section";
import { getFeaturedProducts } from "@/application/use-cases/get-featured-products";
import { getProductRepository } from "@/infrastructure/container";
import { mapProductToCardModel } from "@/presentation/view-models/product-view-model";

export default async function HomePage() {
  const products = await getFeaturedProducts(getProductRepository());
  const featuredProducts = products.map(mapProductToCardModel);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <CollectionSection
        title="Featured Collection"
        subtitle="Curated icons crafted to define modern luxury."
        products={featuredProducts}
      />
      <ValuePropositionSection />
      <ClientLoveSection />
      <PrivateClientSection />
    </main>
  );
}
