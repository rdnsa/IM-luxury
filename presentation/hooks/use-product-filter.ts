"use client";

import { useMemo, useState } from "react";
import { ProductCardModel } from "@/presentation/view-models/product-view-model";

export type ProductFilter = "all" | "bag" | "shoe";
export type ProductSort = "featured" | "price-asc" | "price-desc" | "name-asc";

export function useProductFilter(products: ProductCardModel[]) {
  const [activeFilter, setActiveFilter] = useState<ProductFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<ProductSort>("featured");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const categoryFiltered =
      activeFilter === "all"
        ? products
        : products.filter((product) => product.category === activeFilter);

    const searched = normalizedQuery
      ? categoryFiltered.filter((product) => {
          return (
            product.name.toLowerCase().includes(normalizedQuery) ||
            product.description.toLowerCase().includes(normalizedQuery)
          );
        })
      : categoryFiltered;

    if (sortBy === "featured") {
      return searched;
    }

    if (sortBy === "price-asc") {
      return [...searched].sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-desc") {
      return [...searched].sort((a, b) => b.price - a.price);
    }

    return [...searched].sort((a, b) => a.name.localeCompare(b.name));
  }, [activeFilter, products, searchQuery, sortBy]);

  return {
    activeFilter,
    setActiveFilter,
    filteredProducts,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy
  };
}
