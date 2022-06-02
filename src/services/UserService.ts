import UserModel from '../models/UserModel';
import { IUser } from '../interfaces/UserInterface';
import tokenGenerate from '../helpers/tokenGenerate';

export default class UserService {
  public model = new UserModel();

  public getAllUser = async (): Promise<IUser[]> => {
    const users = await this.model.getAllUser();
    return users;
  };

  public create = async (username: string, classe: string, level: number, password: string):
  Promise<string> => {
    const { id } = await this.model.createUser(username, classe, level, password);
    const userToken = tokenGenerate(id, username);
    return userToken;
  };
}