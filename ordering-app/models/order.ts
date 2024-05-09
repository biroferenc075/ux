import { CartItem } from "./cartItem";
import { OrderStatuses } from "./enums/orderStatuses";

export interface Order {
  id: string;
  date: Date;
  price: number;
  status: OrderStatuses;
  orderedItems: Array<CartItem>;
}
