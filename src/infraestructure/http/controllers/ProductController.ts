import { Request, Response } from 'express';
import { ProductRepository } from '../../../domain/repositories/ProductRepository';
import { CreateProduct } from '../../../application/use-cases/product/CreateProduct';
import { GetProducts } from '../../../application/use-cases/product/GetProducts';
import { getProductById } from '../../../application/use-cases/product/GetProductById';
import { DeleteProduct } from '../../../application/use-cases/product/DeleteProduct';
import { UpdateProduct } from '../../../application/use-cases/product/UpdateProduct';

export class ProductController {
    static async create(req: Request, res: Response): Promise<void> {
        try {
            const { description, quantity } = req.body;

            if (!description || !quantity) {
                res.status(400).json({ message: 'Faltan campos requeridos.' });
            }

            const productRepo = new ProductRepository;
            const createProduct = new CreateProduct(productRepo);

            const _product = {
                description,
                quantity,
            }

            await createProduct.execute(_product);

            res.status(201).json({ message: 'OK' });

        } catch (error: any) {
            
            res.status(500).json({ message: error.message || 'Error interno del servidor' });
    
        }
    }

    static async get(req: Request, res: Response): Promise<void> {
        try {

            const productRepo = new ProductRepository;
            const getProducts = new GetProducts(productRepo);

            const products = await getProducts.execute();
            
            res.status(200).json({ message: 'OK', products });

        } catch (error: any) {
            
            res.status(500).json({ message: error.message || 'Error interno del servidor' });
    
        }
    }
    
    static async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            if (!id) {
                res.status(400).json({ message: 'Faltan campos requeridos.' });
                return;
            }
            
            const productRepo = new ProductRepository;
            const productById = new getProductById(productRepo);

            const product = await productById.execute(id);
            
            res.status(200).json({ message: 'OK', product });

        } catch (error: any) {
            
            res.status(500).json({ message: error.message || 'Error interno del servidor' });
    
        }
    }

    static async update(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            
            const { description, quantity } = req.body;
            
            if (!id) {
                res.status(400).json({ message: 'Faltan campos requeridos.' });
                return;
            }

            if (!description || !quantity) {
                res.status(400).json({ message: 'Faltan campos requeridos.' });
            }

            const productRepo = new ProductRepository;
            const updateProduct = new UpdateProduct(productRepo);

            const _product = {
                description,
                quantity
            }

            await updateProduct.execute(id, _product);
            
            res.status(200).json({ message: 'OK' });

        } catch (error: any) {
            
            res.status(500).json({ message: error.message || 'Error interno del servidor' });
    
        }
    }
    
    static async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            if (!id) {
                res.status(400).json({ message: 'Faltan campos requeridos.' });
                return;
            }
            
            const productRepo = new ProductRepository;
            const productById = new DeleteProduct(productRepo);

            await productById.execute(id);
            
            res.status(200).json({ message: 'OK' });

        } catch (error: any) {
            
            res.status(500).json({ message: error.message || 'Error interno del servidor' });
    
        }
    }
}
