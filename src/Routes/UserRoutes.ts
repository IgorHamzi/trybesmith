import { Router } from 'express';
import UserController from '../controllers/UserController';
import validateCreateUser from '../middlewares/ValidationCreateUser';

const userController = new UserController();

const route = Router();

route.post('/', validateCreateUser, userController.create);

export default route; 