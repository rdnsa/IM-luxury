import type { Product, ProductCategory } from "@/domain/entities/product";
import { formatCurrency } from "@/presentation/utils/format-currency";

export type ProductCardModel = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  image: string;
  description: string;
  price: number;
  priceLabel: string;
};

export function mapProductToCardModel(product: Product): ProductCardModel {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    category: product.category,
    image: product.image,
    description: product.description,
    price: product.price,
    priceLabel: formatCurrency(product.price)
  };
}
