// import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import UserModel from '../models/UserModel';
import { IUser } from '../interfaces/UserInterface';

dotenv.config();
// const JWTSECRET = process.env.JWT_SECRET || 'minhasenha';

export default class UserService {
  public model = new UserModel();

  public getAllUser = async (): Promise<IUser[]> => {
    const users = await this.model.getAllUser();
    return users;
  };

  public createUser = async (
    username: string,
    classe: string,
    level: number,
    password: string,
  ): Promise<IUser> => {
    const newUser = await this.model.createUser(username, classe, level, password);

    //    const token = jwt.sign({ id: newUser.id }, JWTSECRET, {
    //      expiresIn: '7d',
    //      algotirthm: 'HS256',
    //    });

    return newUser;
  };
}