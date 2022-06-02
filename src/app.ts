import express, { Request, Response } from 'express';
import ProductRoutes from './Routes/ProductRoutes';
import UserRoutes from './Routes/UserRoutes';
import OrdersRoutes from './Routes/OrdersRoutes';
import LoginRoutes from './Routes/LoginRoutes';
import ErrorHandler from './middlewares/ErrorHandler';

const app = express();
// require('dotenv').config();

app.use(express.json());

app.use('/products', ProductRoutes);
app.use('/users', UserRoutes);
app.use('/orders', OrdersRoutes);
app.use('/login', LoginRoutes);
app.use(ErrorHandler);

app.get('/', (_request: Request, response: Response) => response.send({ status:
   'OK' }));

export default app;
