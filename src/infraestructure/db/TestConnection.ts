// src/infrastructure/db/TestConnection.ts
import MySQLConnection from './MySQLClient';

(async () => {
  try {
    const db = MySQLConnection.getInstance();
    const [rows] = await db.query('SELECT NOW() as now');
    console.log('Conectado correctamente. Fecha del servidor:', rows);
  } catch (error) {
    console.error('Error al conectar a MySQL:', error);
  }
})();
