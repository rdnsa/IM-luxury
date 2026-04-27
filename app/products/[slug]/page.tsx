import { notFound } from "next/navigation";
import { getProductBySlug } from "@/application/use-cases/get-product-by-slug";
import { getProducts } from "@/application/use-cases/get-products";
import { createMockProductRepository } from "@/infrastructure/repositories/mock-product-repository";
import { ProductDetailShowcase } from "@/components/product/product-detail-showcase";
import { CollectionSection } from "@/components/sections/collection-section";
import { mapProductToCardModel } from "@/presentation/view-models/product-view-model";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const repository = createMockProductRepository();
  const product = await getProductBySlug(repository, slug);
  const allProducts = await getProducts(repository);

  if (!product) {
    notFound();
  }

  const relatedProducts = allProducts
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3)
    .map(mapProductToCardModel);

  return (
    <main className="pt-24 md:pt-28">
      <div className="luxury-container pb-16 pt-3 md:pb-24 md:pt-6">
        <ProductDetailShowcase
          name={product.name}
          category={product.category}
          description={product.description}
          price={product.price}
          image={product.image}
          sizes={product.sizes}
          colors={product.colors}
          colorImages={product.colorImages}
        />
      </div>
      <CollectionSection
        title="You May Also Love"
        subtitle="Pasangan sempurna untuk melengkapi gaya luxury Anda."
        products={relatedProducts}
      />
    </main>
  );
}
