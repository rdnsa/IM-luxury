import type { Product } from "@/domain/entities/product";
import type { ProductRepository } from "@/domain/repositories/product-repository";
import { MOCK_PRODUCTS } from "@/infrastructure/data/mock-products";

function cloneProduct(product: Product): Product {
  return {
    ...product,
    sizes: product.sizes ? [...product.sizes] : undefined,
    colors: product.colors ? [...product.colors] : undefined,
    colorImages: product.colorImages ? { ...product.colorImages } : undefined
  };
}

class MockProductRepository implements ProductRepository {
  async findAll(): Promise<Product[]> {
    return MOCK_PRODUCTS.map(cloneProduct);
  }

  async findBySlug(slug: string): Promise<Product | null> {
    const product = MOCK_PRODUCTS.find((item) => item.slug === slug);

    return product ? cloneProduct(product) : null;
  }
}

export function createMockProductRepository(): ProductRepository {
  return new MockProductRepository();
}
