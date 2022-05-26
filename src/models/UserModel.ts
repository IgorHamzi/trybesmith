import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces/UserInterface';

export default class UserModel {
  public getAllUser = async (): Promise<IUser[]> => {
    const query = 'SELECT * FROM Trybesmith.Users';
    const [users] = await connection.execute(query);
    return users as IUser[];
  };

  public createUser = async (user: IUser): Promise<IUser> => {
    const { username, classe, level, password } = user;
    const query = 'INSERT INTO Trybesmith.Users(username,classe,level,password) VALUES(?, ?, ?, ?)';
    const [newUser] = await connection.execute<ResultSetHeader>(
      query,
      [username, classe, level, password],
    );
    return {
      id: newUser.insertId,
      username,
      classe,
      level,
      password,
    };
  };
}
