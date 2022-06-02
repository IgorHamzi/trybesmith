import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import {
  validateLoginUsername,
  validateLoginPassword,
  UserExist,
} from '../middlewares/LoginMiddlewares';

const router = Router();

router.post(
  '/',
  validateLoginUsername,
  validateLoginPassword,
  UserExist,
  LoginController.create,
);

export default router; 