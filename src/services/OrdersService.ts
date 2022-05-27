import OrdersModel from '../models/OrdersModel';
import IOrder from '../interfaces/OrdersInterface';
import ProductModel from '../models/ProductModel';

export default class OrdersService {
  public orderModel = new OrdersModel();

  public productsModel = new ProductModel();

  public getAllOrders = async (): Promise<IOrder[]> => {
    const orders = await this.orderModel.getAllOrders();
    const products = await this.productsModel.getAll();

    const ordersFull = orders.map((order) => {
      const productsIds = products.filter((product) => product.orderId === order.id)
        .map((p) => p.id);
      return { ...order, productsIds };
    });
    console.log(ordersFull);
    return ordersFull;
  };
}