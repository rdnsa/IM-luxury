import type { Product } from "@/domain/entities/product";
import type { ProductRepository } from "@/domain/repositories/product-repository";

export async function getFeaturedProducts(
  repository: ProductRepository,
  limit = 6
): Promise<Product[]> {
  const products = await repository.findAll();
  const featuredProducts = products.filter((product) => product.featured);
  const remainingProducts = products.filter((product) => !product.featured);

  return [...featuredProducts, ...remainingProducts].slice(0, limit);
}
