import { Request, Response, NextFunction } from 'express';
import OrdersService from '../services/OrdersService';

export default class OrdersController {
  public service = new OrdersService();

  public getAllOrders = async (req: Request, res: Response, _next: NextFunction):
  Promise<Response | undefined> => {
    try {
      const orders = await this.service.getAllOrders();
      return res.status(200).json(orders);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
}