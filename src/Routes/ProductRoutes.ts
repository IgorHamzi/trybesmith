import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import Namevalidate from '../middlewares/productMiddlewares/NameValidation';
import AmountValidation from '../middlewares/productMiddlewares/AmountValidation';

const productController = new ProductController();

const Route = Router();

Route.get('/', productController.getAll);
Route.post(
  '/',
  Namevalidate,
  AmountValidation,
  productController.create,
);

export default Route;