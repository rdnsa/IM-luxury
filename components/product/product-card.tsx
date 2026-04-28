import Image from "next/image";
import Link from "next/link";
import type { ProductCardModel } from "@/presentation/view-models/product-view-model";

type ProductCardProps = {
  product: ProductCardModel;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-[#0b0b0a] shadow-[0_28px_70px_-45px_rgba(0,0,0,0.95)] transition duration-500 ease-out hover:-translate-y-1 hover:border-luxury-gold/45">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-black">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/82 to-transparent" />
          <p className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.24em] text-luxury-beige">
            {product.category}
          </p>
        </div>
        <div className="space-y-4 p-5 md:p-6">
          <div>
            <h3 className="font-[var(--font-serif)] text-[1.75rem] leading-none text-luxury-white md:text-[1.9rem]">
              {product.name}
            </h3>
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-luxury-white/62">{product.description}</p>
          </div>
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <p className="text-lg font-semibold text-luxury-beige">{product.priceLabel}</p>
            <span className="text-[11px] uppercase tracking-[0.2em] text-luxury-white/55 transition group-hover:text-luxury-gold">
              Details
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
