import express, { Request, Response } from 'express';
import ProductRoutes from './Routes/ProductRoutes';

const app = express();
// require('dotenv').config();

app.use(express.json());

app.use('/products', ProductRoutes);

app.get('/', (_request: Request, response: Response) => response.send({ status:
   'OK' }));

export default app;
