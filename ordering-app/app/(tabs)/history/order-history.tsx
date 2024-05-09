import OrderHistoryCard from "@/components/OrderHistoryCard";
import { useAppContext } from "@/store/AppContext";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";

export default function OrderHistoryScreen() {
  const { state } = useAppContext();

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {state.orderHistory
          .sort((o1, o2) => o2.date.getTime() - o1.date.getTime())
          .map((item) => (
            <OrderHistoryCard orderHistory={item} key={item.id} />
          ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
    padding: 20,
    backgroundColor: "#f5f5f5",
    minHeight: "100%",
  },

  header: {
    marginTop: 30,
    marginBottom: 8,
    fontSize: 20,
    fontWeight: "bold",
    flexBasis: "100%",
  },
});
