import Jwt from 'jsonwebtoken';

const SECRET = 'projectTrybeSmitch';

const jwtConfig: Jwt.SignOptions = { algorithm: 'HS256', expiresIn: '1d' };

const createToken = (data: 
{ username: string, classe: string, level: number, password: string, id?: number }):string => {
  const token = Jwt.sign(data, SECRET, jwtConfig);
  return token;
};

export default createToken;
