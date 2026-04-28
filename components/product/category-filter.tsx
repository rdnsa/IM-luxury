"use client";

import { PRODUCT_FILTERS, type ProductFilter } from "@/presentation/hooks/use-product-filter";

type CategoryFilterProps = {
  active: ProductFilter;
  onChange: (value: ProductFilter) => void;
};

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {PRODUCT_FILTERS.map((filter) => {
        const isActive = active === filter;
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.16em] transition duration-300 sm:px-5 sm:text-xs sm:tracking-[0.2em] ${
              isActive
                ? "border-luxury-gold bg-luxury-gold text-luxury-black"
                : "border-white/20 text-luxury-white/70 hover:border-luxury-gold hover:text-luxury-gold"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
