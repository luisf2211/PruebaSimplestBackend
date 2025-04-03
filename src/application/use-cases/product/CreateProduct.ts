import { IProductRepository , ProductRepository } from "../../../domain/repositories/ProductRepository";

export class CreateProduct {
    constructor(private productRepository: IProductRepository) {}
    async execute(product: any): Promise<void> {
        const _product = await this.productRepository.createProduct(product);

        if (_product === null) {
            throw new Error('El producto ya existe');
        }
    }
}