import { Request, Response, NextFunction } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  public service = new UserService();

  public getAllUser = async (req: Request, res: Response, _next: NextFunction):
  Promise<Response> => {
    const Users = await this.service.getAllUser();
    return res.status(200).json(Users);
  };

  public createUser = async (req: Request, res: Response, _next: NextFunction):
  Promise<Response | void> => {
    const user = req.body;
    try {
      const newUser = await this.service.createUser(user);
      return res.status(201).json(newUser);
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('Product already exists')) {
        return res.status(409).json({ message: error.message });
      }
    }
  };
}