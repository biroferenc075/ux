import { OrderStatuses } from "@/models/enums/orderStatuses";
import { Order } from "../models/order";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import { FoodItemTypes } from "@/models/enums/foodItemTypes";
import { Allergens } from "@/models/enums/allergens";
import { Diets } from "@/models/enums/diets";

export const orderHistory: Order[] = [
  {
    id: nanoid(10),
    date: new Date("2024-05-05T20:20:00"),
    price: 4000,
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
        id: nanoid(10),
      },
      {
        id: nanoid(10),
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
        priceSum: 5000,
        note: "Extra cheese",
      },
    ],
  },
  {
    id: nanoid(10),
    date: new Date("2024-05-05T20:20:00"),
    price: 4000,
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
        id: nanoid(10),
      },
      {
        id: nanoid(10),
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
        priceSum: 5000,
        note: "Extra cheese",
      },
    ],
  },
  {
    id: nanoid(10),
    date: new Date("2024-05-05T20:20:00"),
    price: 4000,
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
        id: "30adgaga",
      },
      {
        id: nanoid(10),
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
        priceSum: 5000,
        note: "Extra cheese",
      },
    ],
  },
];
