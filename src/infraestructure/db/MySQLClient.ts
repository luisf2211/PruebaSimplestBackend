import mysql, { Pool } from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

class MySQLConnection {
  private static pool: Pool;

  static getInstance(): Pool {
    if (!MySQLConnection.pool) {
      MySQLConnection.pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        port: 3306
      });
    }
    return MySQLConnection.pool;
  }
}

export default MySQLConnection;