import { FoodItem } from "@/models/foodItem";
import json from "../assets/menuItems.json";
import { Allergens } from "@/models/enums/allergens";
import { Diets } from "@/models/enums/diets";

const getMenuItems = (): FoodItem[] => {
  return json.map(item => {return {
    name: item.name,
    price: item.price,
    allergens: item.allergens.map(a => a as keyof typeof Allergens),
    diets: item.diets.map(d => d as keyof typeof Diets),
    description: item.description,
    imagePath: "/public/assets/images/food/"+item.imageSource,
  } as FoodItem})
};

export const FoodItemService = {
  getMenuItems,
};
