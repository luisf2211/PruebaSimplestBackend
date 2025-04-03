import { IUserRepository, UserRepository } from "../../../domain/repositories/UserRepository";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class LoginUser {
    constructor(private userRepository: IUserRepository) {}
    async execute(user: any): Promise<string> {
        const _user = await this.userRepository.getUserByEmail(user.email);
        
        if (!_user) {
            throw new Error('El usuario no se encuentra registrado.');
        }

        const validatePassword = await bcrypt.compare(user.password, _user.password);

        if (!validatePassword) {
            throw new Error('Credenciales incorrectas.');
        }

        const payload = {
            id: _user.id,
            email: _user.email,
            rol: _user.user_role,
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
            expiresIn: '1h'
        })

        return token
    }
}