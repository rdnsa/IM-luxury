"use client";

import { useMemo, useState } from "react";
import { ProductCategory } from "@/domain/entities/product";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductVariantSelector } from "@/components/product/product-variant-selector";
import { formatCurrency } from "@/presentation/utils/format-currency";

type ProductDetailShowcaseProps = {
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  image: string;
  sizes?: string[];
  colors?: string[];
  colorImages?: Record<string, string>;
};

export function ProductDetailShowcase({
  name,
  category,
  description,
  price,
  image,
  sizes,
  colors,
  colorImages
}: ProductDetailShowcaseProps) {
  const [selectedColor, setSelectedColor] = useState<string | null>(colors?.[0] ?? null);

  const activeImage = useMemo(() => {
    if (!selectedColor || !colorImages?.[selectedColor]) {
      return image;
    }

    return colorImages[selectedColor];
  }, [colorImages, image, selectedColor]);

  return (
    <div className="grid gap-7 md:gap-10 lg:grid-cols-2 lg:gap-14">
      <ProductGallery name={name} image={activeImage} />
      <section className="space-y-5 md:space-y-7">
        <p className="text-[11px] uppercase tracking-[0.24em] text-luxury-gold md:text-xs md:tracking-[0.3em]">
          {category}
        </p>
        <h1 className="font-[var(--font-serif)] text-3xl leading-tight md:text-5xl">{name}</h1>
        <p className="text-base text-luxury-white/70 md:text-lg">{description}</p>
        <div className="gold-line" />
        <div className="space-y-3">
          <p className="text-2xl font-semibold md:text-3xl">{formatCurrency(price)}</p>
          <p className="text-xs uppercase tracking-[0.14em] text-luxury-white/60 md:text-sm md:tracking-[0.18em]">
            Handcrafted Premium Collection
          </p>
        </div>
        <ProductVariantSelector
          productName={name}
          priceLabel={formatCurrency(price)}
          sizes={sizes}
          colors={colors}
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
        />
        <p className="text-xs uppercase tracking-[0.16em] text-luxury-white/45">
          Complimentary premium packaging and priority handling.
        </p>
      </section>
    </div>
  );
}
