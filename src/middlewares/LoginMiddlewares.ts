import { NextFunction, Request, Response } from 'express';
import { IUser } from '../interfaces/UserInterface';
import UsersService from '../services/UserService';

export function validateLoginUsername(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }

  next();
}

export function validateLoginPassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  next();
}

export async function UserExist(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;

  const userService = new UsersService();

  const users = await userService.getAllUser();

  const usernameExist = users.some((u: IUser) => u.username === username);
  const passwordExist = users.some((u: IUser) => u.password === password);

  if (!usernameExist || !passwordExist) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  next();
} 