import { CartItem } from "./cartItem";

export interface OrderDetails{
    id: number,
    orderedItems: Array<CartItem>,
    statusMessage: string,
    statusImageSrc: string,
}