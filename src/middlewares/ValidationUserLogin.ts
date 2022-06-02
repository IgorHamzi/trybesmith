import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const productSchema = Joi.object({
  username: Joi.required(),
  password: Joi.required(),
});

const validateUserLogin = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
    const { error } = productSchema.validate({ username, password });
    if (error) return res.status(400).json({ message: error.message });

    next();
  } catch (error) {
    next(error);
  }
};

export default validateUserLogin; 