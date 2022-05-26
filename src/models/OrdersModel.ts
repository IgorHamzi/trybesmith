import connection from './connection';
import IOrder from '../interfaces/OrdersInterface';

export default class OrdersModel {
  public getAllOrders = async (): Promise<IOrder[]> => {
    const [orders] = await connection.execute(
      'SELECT * FROM Trybesmith.Orders',
    );
    return orders as IOrder[];
  };
}
