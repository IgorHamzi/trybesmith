import { Router } from 'express';
import UserController from '../controllers/UserController';
import UsernameValidation from '../middlewares/userMiddlewares/UsernameValidation';
import ClasseValidation from '../middlewares/userMiddlewares/ClasseValidation';
import LevelValidation from '../middlewares/userMiddlewares/LevelValidation';
import PasswordValidation from '../middlewares/userMiddlewares/PasswordValidation';

const userController = new UserController();

const Route = Router();

Route.get('/', userController.getAllUser);
Route.post(
  '/',
  UsernameValidation,
  ClasseValidation,
  LevelValidation,
  PasswordValidation,
  userController.createUser,
);

export default Route;