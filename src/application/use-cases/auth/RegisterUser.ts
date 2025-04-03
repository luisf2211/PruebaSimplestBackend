import { IUserRepository, UserRepository } from "../../../domain/repositories/UserRepository";

export class RegisterUser {
    constructor(private userRepository: IUserRepository) {}
    async execute(user: any): Promise<void> {
        const _user = await this.userRepository.getUserByEmail(user.email);
        
        if (_user) {
            throw new Error('El usuario ya se encuentra registrado.');
        }

        const newUser = await this.userRepository.createUser(user);

        if (newUser === null) {
            throw new Error('Ha ocurrido un error al intentar crear el usuario.');
        }
    }
}