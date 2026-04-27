"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CategoryFilter } from "@/components/product/category-filter";
import { ProductCard } from "@/components/product/product-card";
import { useProductFilter } from "@/presentation/hooks/use-product-filter";
import { ProductCardModel } from "@/presentation/view-models/product-view-model";

type ProductCatalogProps = {
  products: ProductCardModel[];
};

export function ProductCatalog({ products }: ProductCatalogProps) {
  const { activeFilter, setActiveFilter, filteredProducts, searchQuery, setSearchQuery, sortBy, setSortBy } =
    useProductFilter(products);

  return (
    <section className="space-y-8">
      <div className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
        <div className="grid gap-4 md:grid-cols-[1fr_auto]">
          <label className="relative block">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-luxury-white/55">Search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Find tote, clutch, loafer..."
              className="w-full rounded-full border border-white/20 bg-black/60 px-5 py-3 text-sm text-luxury-white outline-none transition focus:border-luxury-gold"
            />
          </label>
          <label className="block md:min-w-60">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-luxury-white/55">Sort by</span>
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as typeof sortBy)}
              className="w-full rounded-full border border-white/20 bg-black/60 px-5 py-3 text-sm text-luxury-white outline-none transition focus:border-luxury-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
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
