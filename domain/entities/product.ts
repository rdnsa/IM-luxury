export type ProductCategory = "bag" | "shoe";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  image: string;
  sizes?: string[];
  colors?: string[];
  colorImages?: Record<string, string>;
  featured?: boolean;
};
