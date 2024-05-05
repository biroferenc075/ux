import { CartItem } from "@/models/cartItem";
import { FoodItem } from "@/models/foodItem";
import { OrderHistory } from "@/models/orderHistory";
import { OrderHistoryService } from "@/services/orderHistoryService";
import { createContext, useContext, useReducer } from "react";

interface AppState {
  selectedFoodItem: FoodItem | undefined;
  cart: Array<CartItem>;
  orderHistory: Array<OrderHistory>;
}

interface Action {
  type: string;
  payload: CartItem;
}

export interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const initialState: AppState = {
  selectedFoodItem: undefined,
  cart: [],
  orderHistory: OrderHistoryService.getOrderHistory(),
};

const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => {},
});

const appReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "UPDATE_ITEM_IN_CART":
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === action.payload.id ? action.payload : cartItem
        ),
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
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
