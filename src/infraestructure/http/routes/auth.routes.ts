import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { verifyToken } from '../middleware/verifyToken';

const authRouter = Router();


authRouter.post('/login', AuthController.login);
authRouter.post('/register', AuthController.register);

export { authRouter };
