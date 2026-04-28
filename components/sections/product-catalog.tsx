"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CategoryFilter } from "@/components/product/category-filter";
import { ProductCard } from "@/components/product/product-card";
import {
  PRODUCT_SORT_OPTIONS,
  type ProductSort,
  useProductFilter
} from "@/presentation/hooks/use-product-filter";
import type { ProductCardModel } from "@/presentation/view-models/product-view-model";

type ProductCatalogProps = {
  products: ProductCardModel[];
};

export function ProductCatalog({ products }: ProductCatalogProps) {
  const {
    activeFilter,
    setActiveFilter,
    filteredProducts,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy
  } = useProductFilter(products);

  return (
    <section className="space-y-6 md:space-y-8">
      <div className="space-y-4 rounded-lg border border-white/10 bg-[#0b0b0a] p-4 sm:space-y-5 sm:p-5 md:p-6">
        <div className="grid gap-3 md:grid-cols-[1fr_auto] md:gap-4">
          <label className="relative block">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-luxury-white/55 sm:tracking-[0.24em]">Search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Find tote, clutch, loafer..."
              className="w-full rounded-lg border border-white/20 bg-black/60 px-4 py-2.5 text-sm text-luxury-white outline-none transition focus:border-luxury-gold sm:px-5 sm:py-3"
            />
          </label>
          <label className="block md:min-w-60">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-luxury-white/55 sm:tracking-[0.24em]">Sort by</span>
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as ProductSort)}
              className="w-full rounded-lg border border-white/20 bg-black/60 px-4 py-2.5 text-sm text-luxury-white outline-none transition focus:border-luxury-gold sm:px-5 sm:py-3"
            >
              {PRODUCT_SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <CategoryFilter active={activeFilter} onChange={setActiveFilter} />
      </div>
      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {filteredProducts.length === 0 && (
        <p className="text-center text-luxury-white/60">No products found in this category.</p>
      )}
    </section>
  );
}
