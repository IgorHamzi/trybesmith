import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const orderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number().greater(0).required()).required(),
});

const validateCreateOrder = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { productsIds } = req.body;
    const { error } = orderSchema.validate({ productsIds });
    console.log(error);

    if (error?.details[0].type === 'any.required') {
      return res.status(400).json({ message: error.message });
    }
    if (error?.details[0].type === 'array.includesRequiredUnknowns') {
      return res.status(422)
        .json({ message: '"productsIds" must include only numbers' });
    }
    if (error) return res.status(422).json({ message: error.message });

    next();
  } catch (error) {
    next(error);
  }
};

export default validateCreateOrder; 