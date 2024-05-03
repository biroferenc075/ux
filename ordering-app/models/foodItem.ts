import { Allergens } from "./enums/allergens";
import { Diets } from "./enums/diets";

export interface FoodItem {
  name: string;
  price: number;
  allergens: Allergens[];
  diets: Diets[];
  description: string;
  imageSrc: any;
}
