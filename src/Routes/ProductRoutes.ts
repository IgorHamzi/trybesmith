import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import validateCreateProduct from '../middlewares/ValidationCreateProduct';

const productController = new ProductController();

const route = Router();

route.get('/', productController.getAll);
route.post('/', validateCreateProduct, productController.create);

export default route; 