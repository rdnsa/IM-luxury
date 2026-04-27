"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductCardModel } from "@/presentation/view-models/product-view-model";

type ProductCardProps = {
  product: ProductCardModel;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group luxury-panel overflow-hidden rounded-[1.8rem] transition-transform duration-500 ease-out hover:-translate-y-2">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative h-72 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 to-transparent" />
          <p className="absolute left-4 top-4 rounded-full border border-luxury-gold/55 bg-black/45 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-luxury-gold">
            {product.category}
          </p>
        </div>
        <div className="space-y-3 p-6">
          <h3 className="font-[var(--font-serif)] text-[1.9rem] leading-none">{product.name}</h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-luxury-white/65">{product.description}</p>
          <div className="flex items-center justify-between pt-3">
            <p className="text-lg font-semibold text-luxury-beige">{product.priceLabel}</p>
            <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.19em] text-luxury-white/75 transition group-hover:border-luxury-gold group-hover:text-luxury-gold">
              View Details
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
