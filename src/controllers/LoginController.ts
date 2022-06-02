import { Request, Response } from 'express';
import LoginService from '../services/loginService';

class LoginController {
  static create = (req: Request, res: Response) => {
    const login = req.body;
    const token = LoginService.create(login);

    res.status(200).json({ token });
  };
}

export default LoginController; 