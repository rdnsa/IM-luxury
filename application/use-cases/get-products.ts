import type { Product } from "@/domain/entities/product";
import type { ProductRepository } from "@/domain/repositories/product-repository";

export async function getProducts(repository: ProductRepository): Promise<Product[]> {
  return repository.findAll();
}
