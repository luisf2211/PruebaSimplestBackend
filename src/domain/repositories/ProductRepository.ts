import MySQLConnection from "../../infraestructure/db/MySQLClient";
import { ProductEntity } from "../entities/ProductEntity";

export interface IProductRepository {
    createProduct(product: any): Promise<void | null>;
    updateProduct(productId: string | number, product: any): Promise<void | null>;
    getProducts(): Promise<ProductEntity[] | null>;
    getProductById(productId: number | string): Promise<ProductEntity | null>;
    deleteProduct(productId: string | number): Promise<void | null>;
}


export class ProductRepository implements IProductRepository {
    async createProduct(product: any): Promise<void | null> {
        try {
            const connection = MySQLConnection.getInstance();
            
            const [row]: any = await connection.query(`
                    INSERT INTO products (
                        description, 
                        quantity
                    ) 
                    VALUES (
                        ?,
                        ?
                    )               
                `, [product.description, product.quantity]);
            
            if (row['affectedRows']) {
                return;
            }

            console.error('createProduct', row);
            return null;

        } catch (error) {
            console.error(error);
            return null;
        }
    }
    
    async updateProduct(productId: number | string, product: any): Promise<void | null> {
        try {
            const connection = MySQLConnection.getInstance();
            
            const [row]: any = await connection.query(`
                    UPDATE products
                    SET
                        description = ?,
                        quantity = ?
                    WHERE id = ?;             
                `, [product.description, product.quantity, productId]);
            
            if (row['affectedRows']) {
                return;
            }

            console.error('createProduct', row);
            return null;

        } catch (error) {
            console.error(error);
            return null;
        }
    }
    
    async deleteProduct(productId: number | string): Promise<void | null> {
        try {
            const connection = MySQLConnection.getInstance();
            
            const [row]: any = await connection.query(`
                    UPDATE products
                    SET
                        isActive = 0
                    WHERE id = ?;             
                `, [productId]);
            
            if (row['affectedRows']) {
                return;
            }

            console.error('deleteProduct', row);
            return null;

        } catch (error) {
            console.error(error);
            return null;
        }
    }
    
    async getProducts(): Promise<ProductEntity[] | null> {
        try {
            const connection = MySQLConnection.getInstance();
            
            const [rows]: any = await connection.query(`
                    SELECT 
                        * 
                    FROM 
                        products
                    WHERE 
                        isActive = 1
                    ORDER BY id DESC
                `);


            if (rows.length === 0) {
                throw new Error('No hay existen registrados.');
            }

            const _products: ProductEntity[] = [];

            rows.forEach((row: ProductEntity) => {
                _products.push(new ProductEntity(
                    row.id,
                    row.description,
                    row.quantity,
                    row.isActive,
                    row.user_id,
                    row.created_at,
                    row.modified_at
                ));
            });

            return _products;

        } catch (error) {
            console.error(error);
            return null;
        }
    }
    
    async getProductById(productId: number | string): Promise<ProductEntity | null> {
        try {
            const connection = MySQLConnection.getInstance();
            
            const [row]: any = await connection.query(`
                    SELECT 
                        * 
                    FROM 
                        products
                    WHERE 
                        id = ?
                    AND
                        isActive = 1
                `, [productId]);

            if (row.length === 0) {
                throw new Error('El producto no se encuentra registrado.');
            }

            const product = new ProductEntity(
                row[0].id,
                row[0].description,
                row[0].quantity,
                row[0].isActive,
                row[0].user_id,
                row[0].created_at,
                row[0].modified_at
            );

            return product;

        } catch (error) {
            console.error(error);
            return null;
        }
    }

}