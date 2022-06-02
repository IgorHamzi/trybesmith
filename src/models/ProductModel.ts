import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IProduct from '../interfaces/ProductInterface';

export default class ProductModel {
  public getAll = async (): Promise<IProduct[]> => {
    const [product] = await connection.execute(
      'SELECT id, name, amount, orderId FROM Trybesmith.Products ORDER BY id;',
    );
    return product as IProduct[];
  };

  public create = async (name: string, amount: string): Promise<IProduct> => {
    const [product] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);',
      [name, amount],
    );

    return { id: product.insertId, name, amount };
  };

  public upDate = async (orderId: number, id: number): Promise<void> => {
    await connection.execute(
      `UPDATE Trybesmith.Products SET
      orderId = ? WHERE id = ?;`,
      [orderId, id],
    );
  };
}
