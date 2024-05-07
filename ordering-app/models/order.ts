import { CartItem } from "./cartItem";

export interface Order {
  id: number;
  date: Date;
  price: number;
  status: string;
  orderedItems: Array<CartItem>;
  statusMessage: string;
  statusImageSrc: any;
}
