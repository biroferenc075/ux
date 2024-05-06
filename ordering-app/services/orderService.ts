import { OrderDetails } from "@/models/orderDetails";
import { orderDetails, orderHistory } from "../assets/order";
import { OrderHistory } from "@/models/orderHistory";

const getOrderHistory = (): OrderHistory[] => {
  return orderHistory.map(item => {return {
    id: item.id,
    date: new Date(item.date),
    price: item.price,
    status: item.status
  } as OrderHistory})
};

const getOrderDetails = (id: number): OrderDetails => {
  var order: OrderDetails = orderDetails.find(od => od.id == id)!;
  return {
    id: order.id,
    orderedItems: order.orderedItems,
    statusMessage: order.statusMessage,
    statusImageSrc: order.statusImageSrc
  } as OrderDetails
};

export const OrderService = {
    getOrderHistory,
    getOrderDetails
};