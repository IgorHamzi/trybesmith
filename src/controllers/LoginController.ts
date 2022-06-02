import { Request, Response, NextFunction } from 'express';
import LoginService from '../services/loginService';

class LoginController {
  public service = new LoginService();

  public login = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const { username, password } = req.body;

      const token = await this.service.login(username, password);

      if (token === 'error') {
        return res.status(401)
          .json({ message: 'Username or password invalid' });
      }
      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  };
}

export default LoginController; 