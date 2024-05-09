import { FoodItem } from "@/models/foodItem";
import { menuItems } from "../assets/menuItems";
import { Allergens } from "@/models/enums/allergens";
import { Diets } from "@/models/enums/diets";

const getMenuItems = (): FoodItem[] => {
  return menuItems.map(item => {return {
    name: item.name,
    price: item.price,
    type: item.type,
    allergens: item.allergens.map(a => a as keyof typeof Allergens),
    diets: item.diets.map(d => d as keyof typeof Diets),
    description: item.description,
    imageSrc: item.imageSource,
  } as FoodItem})
};

export const FoodItemService = {
  getMenuItems,
};
