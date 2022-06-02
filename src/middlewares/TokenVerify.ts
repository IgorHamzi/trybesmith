import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { IToken } from '../interfaces/UserInterface';

const tokenVerify = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const secretKey = 'xablau';
    const payload = verify(token, secretKey);
    const newPayload = payload as IToken;
    req.body.user = newPayload.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default tokenVerify;