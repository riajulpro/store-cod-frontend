import { TCustomer } from "./customer";
import { IProduct } from "./product";

export type IStatus = "Pending" | "On the way" | "Delivered";

export interface ISell {
  _id: string;
  productId: IProduct | string | { name: string };
  quantity: number;
  date: string;
  customer: TCustomer | string | { firstName: string };
  status: IStatus;
}
