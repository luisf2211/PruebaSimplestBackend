import { Router } from 'express';
import { verifyToken } from '../middleware/verifyToken';
import { ProductController } from '../controllers/ProductController';

const productRouter = Router();


productRouter.get('/getProducts', verifyToken, ProductController.get);
productRouter.get('/getProductById/:id', verifyToken, ProductController.getById);
productRouter.post('/create', verifyToken, ProductController.create);
productRouter.put('/update/:id', verifyToken, ProductController.update);
productRouter.delete('/delete/:id', verifyToken, ProductController.delete);

export { productRouter };
