import type { ProductRepository } from "@/domain/repositories/product-repository";
import { createMockProductRepository } from "@/infrastructure/repositories/mock-product-repository";

const productRepository = createMockProductRepository();

export function getProductRepository(): ProductRepository {
  return productRepository;
}
