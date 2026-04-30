"use client";

import { useMemo, useState } from "react";
import { BRAND_NAME } from "@/presentation/config/contact";
import { buildWhatsAppUrl } from "@/presentation/utils/whatsapp";

type ProductVariantSelectorProps = {
  productName: string;
  priceLabel: string;
  sizes?: readonly string[];
  colors?: readonly string[];
  selectedColor?: string | null;
  onColorChange?: (color: string) => void;
};

export function ProductVariantSelector({
  productName,
  priceLabel,
  sizes,
  colors,
  selectedColor,
  onColorChange
}: ProductVariantSelectorProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(sizes?.[0] ?? null);
  const [internalSelectedColor, setInternalSelectedColor] = useState<string | null>(colors?.[0] ?? null);

  const activeColor = selectedColor ?? internalSelectedColor;

  const handleSelectColor = (color: string) => {
    if (onColorChange) {
      onColorChange(color);
      return;
    }

    setInternalSelectedColor(color);
  };

  const whatsappUrl = useMemo(() => {
    const variantParts: string[] = [];

    if (selectedSize) {
      variantParts.push(`Size: ${selectedSize}`);
    }

    if (activeColor) {
      variantParts.push(`Color: ${activeColor}`);
    }

    const variantText = variantParts.length ? ` ${variantParts.join(" | ")}.` : "";

    return buildWhatsAppUrl(
      `Hello ${BRAND_NAME}, I am interested in ${productName} (${priceLabel}).${variantText} Please share availability details.`
    );
  }, [activeColor, priceLabel, productName, selectedSize]);

  return (
    <>
      {(sizes?.length || colors?.length) && (
        <div className="space-y-4 rounded-lg border border-luxury-gold/25 bg-luxury-white/[0.03] p-4 backdrop-blur md:p-5">
          {sizes?.length ? (
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-luxury-white/60 md:text-xs">Sizes</p>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => {
                  const isActive = selectedSize === size;

                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      aria-pressed={isActive}
                      className={`rounded-lg border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] transition duration-300 md:text-xs ${
                        isActive
                          ? "border-luxury-gold bg-luxury-gold text-luxury-black shadow-luxury"
                          : "border-luxury-gold/35 bg-luxury-white/[0.02] text-luxury-white/90 hover:border-luxury-gold/70"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}

          {colors?.length ? (
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-luxury-white/60 md:text-xs">Colors</p>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => {
                  const isActive = activeColor === color;

                  return (
                    <button
                      key={color}
                      type="button"
                      onClick={() => handleSelectColor(color)}
                      aria-pressed={isActive}
                      className={`rounded-lg border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] transition duration-300 md:text-xs ${
                        isActive
                          ? "border-luxury-gold bg-luxury-gold text-luxury-black shadow-luxury"
                          : "border-luxury-gold/35 bg-luxury-white/[0.02] text-luxury-white/90 hover:border-luxury-gold/70"
                      }`}
                    >
                      {color}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center rounded-full border border-luxury-gold bg-luxury-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-luxury-black transition duration-500 hover:scale-[1.03] hover:shadow-luxury md:px-8 md:text-sm md:tracking-[0.22em]"
      >
        Inquire via WhatsApp
      </a>
    </>
  );
}
