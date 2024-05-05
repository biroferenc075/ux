import OrderHistoryCard from "@/components/OrderHistoryCard";
import { OrderHistory } from "@/models/orderHistory";
import { AppContextType, useAppContext } from "@/store/AppContext";
import { ScrollView, StyleSheet, View } from "react-native";

export default function HistoryScreen() {
  const { state } = useAppContext();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {state.orderHistory.map((item: OrderHistory, index: number) => (
        <View style={{ padding: 10 }}>
          <OrderHistoryCard orderHistory={item} key={index} />
        </View>
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
