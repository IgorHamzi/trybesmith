import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import validateUserLogin from '../middlewares/ValidationUserLogin';

const router = Router();

const loginController = new LoginController();

router.post(
  '/',
  validateUserLogin,
  loginController.login,
);

export default router; 