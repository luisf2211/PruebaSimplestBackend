import { IProductRepository , ProductRepository } from "../../../domain/repositories/ProductRepository";

export class DeleteProduct {
    constructor(private productRepository: IProductRepository) {}
    async execute(productId: number | string): Promise<void> {
        const _product = await this.productRepository.deleteProduct(productId);

        if (_product === null) {
            throw new Error('El producto no pudo ser eliminado.');
        }
    }
}