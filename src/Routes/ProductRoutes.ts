import { Router } from 'express';

import ProductController from '../controllers/ProductController';

const productController = new ProductController();

const Route = Router();

Route.get('/', productController.getAll);
// Route.post('/', productController.create);

export default Route;