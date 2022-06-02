import { Request, Response, NextFunction } from 'express';
import OrdersService from '../services/OrdersService';

export default class OrdersController {
  public service = new OrdersService();

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const orders = await this.service.getAllOrders();
    return res.status(200).json(orders);
  };

  public create = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const { productsIds } = req.body;
      const userId = req.body.user;
      const newOrder = await this.service.create(userId, productsIds);
      return res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  };
}