import { ProductEntity } from "../../../domain/entities/ProductEntity";
import { IProductRepository , ProductRepository } from "../../../domain/repositories/ProductRepository";

export class GetProducts {
    constructor(private productRepository: IProductRepository) {}
    async execute(): Promise<ProductEntity[]> {
        const _products = await this.productRepository.getProducts();

        if (!_products) {
            throw new Error('No existen productos creados.');
        }

        return _products
    }
}