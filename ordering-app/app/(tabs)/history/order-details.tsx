import { View } from "@/components/Themed";
import { OrderService } from "@/services/orderService";
import { useLocalSearchParams } from "expo-router";

export default function OrderDetailsScreen() {
  const { id } = useLocalSearchParams();

  const details = OrderService.getOrderDetails(Number(id));

  return <View>{details.statusMessage}</View>;
}
