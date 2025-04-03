import { Request, Response } from 'express';
import { RegisterUser } from '../../../application/use-cases/auth/RegisterUser';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import { LoginUser } from '../../../application/use-cases/auth/LoginUser';

export class AuthController {
    static async login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                res.status(400).json({ message: 'Faltan campos requeridos.' });
            }

            const userRepo = new UserRepository;
            const loginUser = new LoginUser(userRepo);

            const token = await loginUser.execute({
                email,
                password
            });

            res.status(200).json({ message: 'OK', accessToken: token });

        } catch (error: any) {
            
            res.status(500).json({ message: error.message || 'Error interno del servidor' });
    
        }
    }
    
    static async register(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, password } = req.body;

            if (!name || !email || !password) {
                res.status(400).json({ message: 'Faltan campos requeridos.' });
            }

            const userRepo = new UserRepository;
            const registerUser = new RegisterUser(userRepo);

            const newUser = {
                name,
                email,
                password
            }

            await registerUser.execute(newUser);

            res.status(201).json({ message: 'Usuario registrado exitosamente.' });
        } catch (error: any) {
            res.status(500).json({ message: error.message || 'Error interno del servidor' });
        }
    }
}
