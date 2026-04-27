"use client";

import { ProductFilter } from "@/presentation/hooks/use-product-filter";

const FILTERS: ProductFilter[] = ["all", "bag", "shoe"];

type CategoryFilterProps = {
  active: ProductFilter;
  onChange: (value: ProductFilter) => void;
};

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {FILTERS.map((filter) => {
        const isActive = active === filter;
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition duration-300 ${
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
