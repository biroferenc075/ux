import { orderHistory } from "@/assets/order";
import { CartItem } from "@/models/cartItem";
import { Allergens } from "@/models/enums/allergens";
import { Diets } from "@/models/enums/diets";
import { FoodItem } from "@/models/foodItem";
import { Order } from "@/models/order";
import { OrderService } from "@/services/orderService";
import { createContext, useContext, useReducer } from "react";

interface AppState {
  selectedFoodItem: FoodItem | undefined;
  cart: Array<CartItem>;
  orderHistory: Array<Order>;
  tableNumber: number | undefined;
  allowedAllergens: Allergens[];
  suggestionDiet: Diets;
  suggestionComment: string;
}

interface Action {
  type: string;
  payload: CartItem | FoodItem | number | Allergens | Diets | string | Order;
}

export interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const initialState: AppState = {
  selectedFoodItem: undefined,
  cart: [],
  orderHistory: [], //OrderService.getOrderHistory(),
  tableNumber: undefined,
  allowedAllergens: Object.values(Allergens),
  suggestionDiet: Diets.meat_eater,
  suggestionComment: "",
};

const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => {},
});

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload as CartItem],
      };
    case "UPDATE_ITEM_IN_CART":
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === (action.payload as CartItem).id
            ? (action.payload as CartItem)
            : cartItem
        ),
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== (action.payload as CartItem).id
        ),
      };
    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };
    case "SELECT_FOOD_ITEM":
      return {
        ...state,
        selectedFoodItem: action.payload as FoodItem,
      };
    case "SET_TABLE_NUMBER":
      return {
        ...state,
        tableNumber: action.payload as number,
      };
    case "ADD_ALLOWED_ALLERGEN":
      return {
        ...state,
        allowedAllergens:
          state.allowedAllergens.indexOf(action.payload as Allergens) === -1
            ? [...state.allowedAllergens, action.payload as Allergens]
            : state.allowedAllergens,
      };
    case "REMOVE_ALLOWED_ALLERGEN":
      return {
        ...state,
        allowedAllergens: state.allowedAllergens.filter(
          (item) => item.valueOf() !== (action.payload as Allergens).valueOf()
        ),
      };
    case "SET_SUGGESTION_DIET":
      return {
        ...state,
        suggestionDiet: action.payload as Diets,
      };
    case "SET_SUGGESTION_COMMENT":
      return {
        ...state,
        suggestionComment: action.payload as string,
      };
    case "SUBMIT_ORDER":
      return {
        ...state,
        orderHistory: [...state.orderHistory, action.payload as Order],
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
