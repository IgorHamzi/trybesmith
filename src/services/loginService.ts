import { IUser } from '../interfaces/UserInterface';
import createToken from '../token/token';

class LoginService {
  static create(user: IUser) : string {
    const token = createToken(user);

    return token;
  }
}

export default LoginService; 
