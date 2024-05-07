import { Order } from "@/models/order";
import { orderDetails, orderHistory } from "../assets/order";

// const getOrderHistory = (): Order[] => {
//   return orderHistory.map((item) => {
//     return {
//       id: item.id,
//       date: new Date(item.date),
//       price: item.price,
//       status: item.status,
//       orderedItems: []
//     } as Order;
//   });
// };

// const getOrderDetails = (id: number): OrderDetails => {
//   var order: OrderDetails = orderDetails.find((od) => od.id == id)!;
//   return {
//     id: order.id,
//     orderedItems: order.orderedItems,
//     statusMessage: order.statusMessage,
//     statusImageSrc: order.statusImageSrc,
//   } as OrderDetails;
// };

export const OrderService = {
  // getOrderHistory,
  //getOrderDetails,
};
