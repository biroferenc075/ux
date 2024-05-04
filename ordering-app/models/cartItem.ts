import { FoodItem } from "./foodItem";

export interface CartItem {
  id: number;
  foodItem: FoodItem;
  count: number;
  note: string;
  priceSum: number;
}
