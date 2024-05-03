import { FoodItem } from "./foodItem";

export interface CartItem {
  foodItem: FoodItem;
  count: number;
  note: string;
  priceSum: number;
}
