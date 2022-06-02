import { Router } from 'express';
import OrdersController from '../controllers/OrdersController';
import TokenVerify from '../middlewares/TokenVerify';
import validateCreateOrder from '../middlewares/ValidationCreateOrder';

const OrderController = new OrdersController();

const Route = Router();

Route.get('/', OrderController.getAll);
Route.post('/', TokenVerify, validateCreateOrder, OrderController.create);

export default Route;