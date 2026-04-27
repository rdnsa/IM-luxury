import { Product } from "@/domain/entities/product";
import { ProductRepository } from "@/domain/repositories/product-repository";

export async function getProductBySlug(
  repository: ProductRepository,
  slug: string
): Promise<Product | null> {
  return repository.findBySlug(slug);
}
