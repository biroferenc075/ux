import { FoodItem } from "./foodItem";

export interface CartItem {
  id: string;
  foodItem: FoodItem;
  count: number;
  note: string;
  priceSum: number;
}
