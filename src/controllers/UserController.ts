import { Request, Response, NextFunction } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  public service = new UserService();

  public getAllUser = async (req: Request, res: Response, _next: NextFunction):
  Promise<Response> => {
    const Users = await this.service.getAllUser();
    return res.status(200).json(Users);
  };

  public create = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const { username, classe, level, password } = req.body;
      const token = await this.service.create(username, classe, level, password);
      return res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  };
}