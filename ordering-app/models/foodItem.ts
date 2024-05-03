import { Allergens } from "./enums/allergens";

export interface FoodItem {
  name: string;
  price: number;
  allergens: Allergens[];
  description: string;
  imageUri: string;
}
