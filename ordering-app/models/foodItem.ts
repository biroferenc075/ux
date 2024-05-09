import { Allergens } from "./enums/allergens";
import { Diets } from "./enums/diets";
import { FoodItemTypes } from "./enums/foodItemTypes";

export interface FoodItem {
  name: string;
  price: number;
  allergens: Allergens[];
  diets: Diets[];
  description: string;
  imageSrc: any;
  type: FoodItemTypes;
}
