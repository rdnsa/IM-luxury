export type ProductCategory = "bag" | "shoe";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  image: string;
  featured?: boolean;
};
