import { orderHistory } from "../assets/orderHistory";
import { OrderHistory } from "@/models/orderHistory";

const getOrderHistory = (): OrderHistory[] => {
  return orderHistory.map(item => {return {
    id: item.id,
    date: new Date(item.date),
    price: item.price,
    status: item.status
  } as OrderHistory})
};

export const OrderHistoryService = {
    getOrderHistory,
};