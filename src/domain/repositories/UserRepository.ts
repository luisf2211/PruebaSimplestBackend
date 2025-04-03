import MySQLConnection from "../../infraestructure/db/MySQLClient";
import { UserEntity } from "../entities/UserEntity";
import bcrypt from 'bcryptjs';

export interface IUserRepository {
    getUserByEmail(email: any): Promise<UserEntity | null>;
    createUser(user: any): Promise<void | null>;
}


export class UserRepository implements IUserRepository {
    async getUserByEmail(email: string): Promise<UserEntity | null> {
        try {
            const connection = MySQLConnection.getInstance();
            const [row]: any = await connection.query('SELECT * FROM users WHERE email = ?', [email]);

            if (row.length === 0) {
                throw new Error;
            }

            const user = new UserEntity(
                row[0]['id'],
                row[0]['name'],
                row[0]['email'],
                row[0]['password'],
                row[0]['user_role'],
                row[0]['isActive'],
                row[0]['created_at'],
                row[0]['modified_at'],
            )

            return user;

        } catch (error) {

            return null

        }
    }

    async createUser(user: any): Promise<void | null> {
        try {
            const connection = MySQLConnection.getInstance();
            
            const hashedPassword = await bcrypt.hash(user.password, 10);

            const [row]: any = await connection.query(`
                    INSERT INTO users (
                        name,
                        email,
                        password
                    ) VALUES (
                        ?,
                        ?,
                        ?
                    )                
                `, [user.name, user.email, hashedPassword]);
            
            if (row['affectedRows']) {
                return;
            }

            console.error('createUser', row);
            return null;

        } catch (error) {
            console.error(error);
            return null;
        }
    }

}