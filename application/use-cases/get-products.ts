import { Product } from "@/domain/entities/product";
import { ProductRepository } from "@/domain/repositories/product-repository";

export async function getProducts(repository: ProductRepository): Promise<Product[]> {
  return repository.findAll();
}
