import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/ProductService';

export default class ProductController {
  public service = new ProductService();

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const products = await this.service.getAll();
    return res.status(200).json(products);
  };

  public create = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const { name, amount } = req.body;
      const newProduct = await this.service.create(name, amount);
      return res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  };
}
