import { notFound } from "next/navigation";
import { getProductBySlug } from "@/application/use-cases/get-product-by-slug";
import { getProducts } from "@/application/use-cases/get-products";
import { createMockProductRepository } from "@/infrastructure/repositories/mock-product-repository";
import { ProductGallery } from "@/components/product/product-gallery";
import { CollectionSection } from "@/components/sections/collection-section";
import { formatCurrency } from "@/presentation/utils/format-currency";
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

  const whatsappMessage = encodeURIComponent(
    `Hello I'M LUXURY BAG, I am interested in ${product.name} (${formatCurrency(product.price)}). Please share availability details.`
  );

  return (
    <main className="pt-24 md:pt-28">
      <div className="luxury-container pb-16 pt-3 md:pb-24 md:pt-6">
        <div className="grid gap-7 md:gap-10 lg:grid-cols-2 lg:gap-14">
          <ProductGallery name={product.name} image={product.image} />
          <section className="space-y-5 md:space-y-7">
            <p className="text-[11px] uppercase tracking-[0.24em] text-luxury-gold md:text-xs md:tracking-[0.3em]">
              {product.category}
            </p>
            <h1 className="font-[var(--font-serif)] text-3xl leading-tight md:text-5xl">{product.name}</h1>
            <p className="text-base text-luxury-white/70 md:text-lg">{product.description}</p>
            <div className="gold-line" />
            <div className="space-y-3">
              <p className="text-2xl font-semibold md:text-3xl">{formatCurrency(product.price)}</p>
              <p className="text-xs uppercase tracking-[0.14em] text-luxury-white/60 md:text-sm md:tracking-[0.18em]">
                Handcrafted Premium Collection
              </p>
            </div>
            <a
              href={`https://wa.me/6281234567890?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-luxury-gold bg-luxury-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-luxury-black transition duration-500 hover:scale-[1.03] hover:shadow-luxury md:px-8 md:text-sm md:tracking-[0.22em]"
            >
              Inquire via WhatsApp
            </a>
            <p className="text-xs uppercase tracking-[0.16em] text-luxury-white/45">
              Complimentary premium packaging and priority handling.
            </p>
          </section>
        </div>
      </div>
      <CollectionSection
        title="You May Also Love"
        subtitle="Pasangan sempurna untuk melengkapi gaya luxury Anda."
        products={relatedProducts}
      />
    </main>
  );
}
