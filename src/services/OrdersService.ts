import OrdersModel from '../models/OrdersModel';
import IOrder from '../interfaces/OrdersInterface';
import ProductModel from '../models/ProductModel';

export default class OrdersService {
  public orderModel = new OrdersModel();

  public productsModel = new ProductModel();

  public getAllOrders = async (): Promise<IOrder[]> => {
    const orders = await this.orderModel.getAllOrders();
    return orders;
  };

  public create = async (userId: number, productsIds: number[]): Promise<IOrder> => {
    const orderId = await this.orderModel.create(userId);

    if (productsIds.length !== 1) {
      Promise.all(productsIds.map(async (id: number): Promise<void> => {
        await this.productsModel.upDate(orderId, id);
      }));
      return {
        userId,
        productsIds,
      } as IOrder;
    }
    productsIds.find(async (id: number): Promise<void> => {
      await this.productsModel.upDate(orderId, id);
    });
    return {
      userId,
      productsIds,
    } as IOrder;
  };
}