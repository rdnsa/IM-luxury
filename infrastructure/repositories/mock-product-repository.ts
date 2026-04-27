import { Product } from "@/domain/entities/product";
import { ProductRepository } from "@/domain/repositories/product-repository";
import { MOCK_PRODUCTS } from "@/infrastructure/data/mock-products";

class MockProductRepository implements ProductRepository {
  async findAll(): Promise<Product[]> {
    return MOCK_PRODUCTS;
  }

  async findBySlug(slug: string): Promise<Product | null> {
    return MOCK_PRODUCTS.find((product) => product.slug === slug) ?? null;
  }
}

export function createMockProductRepository(): ProductRepository {
  return new MockProductRepository();
}
