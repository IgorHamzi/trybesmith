import { Request, Response, NextFunction } from 'express';

const AmountValidation = (req: Request, res: Response, next: NextFunction) => {
  const { Amount } = req.body;

  if (!Amount) {
    return res.status(400).json({ 
      message: '"amount" is required',
    });
  }

  if (typeof Amount !== 'string') {
    return res.status(422).json({
      message: '"amount" must be a string',
    });
  }

  if (Amount.length < 2) {
    return res.status(422).json({
      message: '"amount" length must be at least 3 characters long',
    });
  }

  next();
};

export default AmountValidation;