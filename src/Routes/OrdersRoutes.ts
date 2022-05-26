import { Router } from 'express';
import OrdersController from '../controllers/OrdersController';

const OrderController = new OrdersController();

const Route = Router();

Route.get('/', OrderController.getAllOrders);

export default Route;