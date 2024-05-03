import { Allergens } from "./enums/allergens";

export interface FoodItem {
  name: string;
  price: number;
  allergens: Allergens[];
  description: string;
  // base64 encoded image
  image: string;
}
