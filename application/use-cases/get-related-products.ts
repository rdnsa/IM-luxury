import type { Product } from "@/domain/entities/product";
import type { ProductRepository } from "@/domain/repositories/product-repository";

export async function getRelatedProducts(
  repository: ProductRepository,
  product: Product,
  limit = 3
): Promise<Product[]> {
  const products = await repository.findAll();
  const otherProducts = products.filter((item) => item.slug !== product.slug);

  return [
    ...otherProducts.filter((item) => item.category === product.category),
    ...otherProducts.filter((item) => item.category !== product.category)
  ].slice(0, limit);
}
