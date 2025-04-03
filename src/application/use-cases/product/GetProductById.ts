import { ProductEntity } from "../../../domain/entities/ProductEntity";
import { IProductRepository , ProductRepository } from "../../../domain/repositories/ProductRepository";

export class getProductById {
    constructor(private productRepository: IProductRepository) {}
    async execute(productId: number | string ): Promise<ProductEntity> {
        const _product = await this.productRepository.getProductById(productId);

        if (!_product) {
            throw new Error('No existe el producto solicitado.');
        }

        return _product
    }
}