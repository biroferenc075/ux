import OrderHistoryCard from "@/components/OrderHistoryCard";
import { OrderHistory } from "@/models/orderHistory";
import { useAppContext } from "@/store/AppContext";
import { ScrollView, StyleSheet, View } from "react-native";

export default function OrderHistoryScreen() {
  const { state } = useAppContext();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {state.orderHistory.map((item: OrderHistory) => (
        <OrderHistoryCard orderHistory={item} key={item.id} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
});
