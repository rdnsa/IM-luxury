import type { Product } from "@/domain/entities/product";
import type { ProductRepository } from "@/domain/repositories/product-repository";

export async function getProductBySlug(
  repository: ProductRepository,
  slug: string
): Promise<Product | null> {
  return repository.findBySlug(slug);
}
