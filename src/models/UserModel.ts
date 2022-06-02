import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces/UserInterface';

export default class UserModel {
  public getAllUser = async (): Promise<IUser[]> => {
    const query = 'SELECT * FROM Trybesmith.Users';
    const [users] = await connection.execute(query);
    return users as IUser[];
  };

  public createUser = async (username: string, classe: string, level: number, password: string):
  Promise<IUser> => {
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

  public findByNameAndPassword = async (username: string, password: string): Promise<IUser> => {
    const query = `SELECT * FROM Trybesmith.Users
      WHERE username = ? AND password = ?`;
    const result = await connection.execute(query, [username, password]);
    const [rows] = result;
    const [user] = rows as IUser[];
    return user;
  };
}
