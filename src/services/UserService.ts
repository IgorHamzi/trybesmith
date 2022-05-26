import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import UserModel from '../models/UserModel';
import { IToken, IUser } from '../interfaces/UserInterface';

dotenv.config();
const JWTSECRET = process.env.JWT_SECRET || 'senha';

export default class UserService {
  public model = new UserModel();

  public getAllUser = async (): Promise<IUser[]> => {
    const users = await this.model.getAllUser();
    return users;
  };

  public createUser = async (user: IUser): Promise<IToken> => {
    const User = await this.model.createUser(user);

    const token = jwt.sign({ id: User.id }, JWTSECRET, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });

    return { token };
  };
}