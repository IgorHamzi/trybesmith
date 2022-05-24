import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import Namevalidate from '../middlewares/NameValidation';
import AmountValidation from '../middlewares/AmountValidation';

const productController = new ProductController();

const Route = Router();

Route.get('/', productController.getAll);
Route.post('/', Namevalidate, AmountValidation, productController.create);

export default Route;