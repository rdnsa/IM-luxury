"use client";

import { useMemo, useState } from "react";
import { PRODUCT_CATEGORIES } from "@/domain/entities/product";
import type { ProductCardModel } from "@/presentation/view-models/product-view-model";

export type ProductFilter = "all" | (typeof PRODUCT_CATEGORIES)[number];
export type ProductSort = "featured" | "price-asc" | "price-desc" | "name-asc";

export const PRODUCT_FILTERS = ["all", ...PRODUCT_CATEGORIES] as const satisfies readonly ProductFilter[];

export const PRODUCT_SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" }
] as const satisfies readonly { value: ProductSort; label: string }[];

type FilterProductsParams = {
  activeFilter: ProductFilter;
  searchQuery: string;
  sortBy: ProductSort;
};

export function filterProducts(
  products: readonly ProductCardModel[],
  { activeFilter, searchQuery, sortBy }: FilterProductsParams
): ProductCardModel[] {
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

  switch (sortBy) {
    case "price-asc":
      return [...searched].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...searched].sort((a, b) => b.price - a.price);
    case "name-asc":
      return [...searched].sort((a, b) => a.name.localeCompare(b.name));
    case "featured":
    default:
      return [...searched];
  }
}

export function useProductFilter(products: ProductCardModel[]) {
  const [activeFilter, setActiveFilter] = useState<ProductFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<ProductSort>("featured");

  const filteredProducts = useMemo(() => {
    return filterProducts(products, { activeFilter, searchQuery, sortBy });
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
