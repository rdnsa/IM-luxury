"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProductCardModel } from "@/presentation/view-models/product-view-model";

type ProductCardProps = {
  product: ProductCardModel;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-black/55 shadow-luxury backdrop-blur-sm"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative h-72 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
        <div className="space-y-3 p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-luxury-gold">{product.category}</p>
          <h3 className="font-[var(--font-serif)] text-2xl">{product.name}</h3>
          <p className="line-clamp-2 text-sm text-luxury-white/65">{product.description}</p>
          <div className="flex items-center justify-between pt-3">
            <p className="text-lg font-semibold">{product.priceLabel}</p>
            <span className="text-xs uppercase tracking-[0.2em] text-luxury-white/70 transition group-hover:text-luxury-gold">
              Details
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
