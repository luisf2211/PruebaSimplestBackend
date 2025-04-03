// backend/src/main.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { authRouter } from './infraestructure/http/routes/auth.routes';
import { productRouter } from './infraestructure/http/routes/product.routes';

// import { authRouter } from './infrastructure/http/routes/auth.routes';
// import { taskRouter } from './infrastructure/http/routes/task.routes';
// import { verifyToken } from './infrastructure/http/middleware/verifyToken';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/product', productRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
