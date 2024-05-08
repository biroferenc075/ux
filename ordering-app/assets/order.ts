import { OrderStatuses } from "@/models/enums/orderStatuses";
import { Order } from "../models/order";
import { FoodItemTypes } from "@/models/enums/foodItemTypes";
import { Allergens } from "@/models/enums/allergens";
import { Diets } from "@/models/enums/diets";
import ShortUniqueId from "short-unique-id";
const uid = new ShortUniqueId({ length: 10 });
export const orderHistory: Order[] = [
  {
    id: uid.rnd(),
    date: new Date("2024-05-05T20:20:00"),
    price: 4800,
    status: OrderStatuses.preparing,
    orderedItems: [
      {
        count: 1,
        foodItem: {
          name: "Chicken Pad Thai",
          price: 1800,
          type: FoodItemTypes.main,
          allergens: [Allergens.nuts, Allergens.soy, Allergens.gluten],
          diets: [Diets.meat_eater],
          description:
            "A Thai stir-fried noodle dish with tender chicken, rice noodles, bean sprouts, and peanuts, flavored with a tangy tamarind sauce.",
          imageSrc: require("./images/food/chicken-pad-thai.jpg"),
        },
        priceSum: 1800,
        note: "No spicy please",
        id: uid.rnd(),
      },
      {
        id: uid.rnd(),
        count: 2,
        foodItem: {
          name: "Margherita Pizza",
          price: 1500,
          type: FoodItemTypes.main,
          allergens: [Allergens.gluten, Allergens.dairy],
          diets: [Diets.vegetarian, Diets.pescatarian, Diets.meat_eater],
          description:
            "A classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil.",
          imageSrc: require("./images/food/margherita-pizza.jpg"),
        },
        priceSum: 3000,
        note: "Extra cheese",
      },
    ],
  },
  {
    id: uid.rnd(),
    date: new Date("2024-05-05T20:20:00"),
    price: 4800,
    status: OrderStatuses.served,
    orderedItems: [
      {
        count: 1,
        foodItem: {
          name: "Chicken Pad Thai",
          price: 1800,
          type: FoodItemTypes.main,
          allergens: [Allergens.nuts, Allergens.soy, Allergens.gluten],
          diets: [Diets.meat_eater],
          description:
            "A Thai stir-fried noodle dish with tender chicken, rice noodles, bean sprouts, and peanuts, flavored with a tangy tamarind sauce.",
          imageSrc: require("./images/food/chicken-pad-thai.jpg"),
        },
        priceSum: 1800,
        note: "No spicy please",
        id: uid.rnd(),
      },
      {
        id: uid.rnd(),
        count: 2,
        foodItem: {
          name: "Margherita Pizza",
          price: 1500,
          type: FoodItemTypes.main,
          allergens: [Allergens.gluten, Allergens.dairy],
          diets: [Diets.vegetarian, Diets.pescatarian, Diets.meat_eater],
          description:
            "A classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil.",
          imageSrc: require("./images/food/margherita-pizza.jpg"),
        },
        priceSum: 3000,
        note: "Extra cheese",
      },
    ],
  },
  {
    id: uid.rnd(),
    date: new Date("2024-05-05T20:20:00"),
    price: 4800,
    status: OrderStatuses.completed,
    orderedItems: [
      {
        count: 1,
        foodItem: {
          name: "Chicken Pad Thai",
          price: 1800,
          type: FoodItemTypes.main,
          allergens: [Allergens.nuts, Allergens.soy, Allergens.gluten],
          diets: [Diets.meat_eater],
          description:
            "A Thai stir-fried noodle dish with tender chicken, rice noodles, bean sprouts, and peanuts, flavored with a tangy tamarind sauce.",
          imageSrc: require("./images/food/chicken-pad-thai.jpg"),
        },
        priceSum: 1800,
        note: "No spicy please",
        id: "30adgaga",
      },
      {
        id: uid.rnd(),
        count: 2,
        foodItem: {
          name: "Margherita Pizza",
          price: 1500,
          type: FoodItemTypes.main,
          allergens: [Allergens.gluten, Allergens.dairy],
          diets: [Diets.vegetarian, Diets.pescatarian, Diets.meat_eater],
          description:
            "A classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil.",
          imageSrc: require("./images/food/margherita-pizza.jpg"),
        },
        priceSum: 3000,
        note: "Extra cheese",
      },
    ],
  },
];
