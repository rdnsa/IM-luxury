export const PRODUCT_CATEGORIES = ["bag"] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export type Product = Readonly<{
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  image: string;
  sizes?: readonly string[];
  colors?: readonly string[];
  colorImages?: Readonly<Record<string, string>>;
  featured?: boolean;
}>;
