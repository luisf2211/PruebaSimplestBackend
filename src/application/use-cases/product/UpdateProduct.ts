import { IProductRepository , ProductRepository } from "../../../domain/repositories/ProductRepository";

export class UpdateProduct {
    constructor(private productRepository: IProductRepository) {}
    async execute(productId: number | string, product: any): Promise<void> {
        const _product = await this.productRepository.updateProduct(productId, product);

        if (_product === null) {
            throw new Error('El producto ya existe');
        }
    }
}