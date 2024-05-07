import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Image } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { View } from "@/components/Themed";
import OrderDetailsCard from "@/components/OrderDetailsCard";
import { useAppContext } from "@/store/AppContext";
import { OrderStatuses } from "@/models/enums/orderStatuses";

export default function OrderDetailsScreen() {
  const { id } = useLocalSearchParams();
  const { state } = useAppContext();

  const order = state.orderHistory.find((item) => item.id == id)!;

  const getOrderStatusMessage = (): string => {
    switch (order.status) {
      case OrderStatuses.preparing:
        return "Let him cook";
      case OrderStatuses.served:
        return "He cooked";
      case OrderStatuses.completed:
        return "You already paid for this order.";
    }
  };

  const getOrderStatusImageSrc = (): string => {
    switch (order.status) {
      case OrderStatuses.preparing:
        return "Let him cook";
      case OrderStatuses.served:
        return "He cooked";
      case OrderStatuses.completed:
        return "You already paid for this order.";
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: getOrderStatusImageSrc() }}
          ></Image>
        </View>
        <Text category="h5" style={{ paddingTop: 10 }}>
          {getOrderStatusMessage()}
        </Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.itemsContainer}>
        {order.orderedItems.map((item) => (
          <OrderDetailsCard item={item} key={item.id} />
        ))}
      </View>
      <View style={styles.separator} />
      <View>
        <Layout
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <Text category="h6">Total</Text>
          <Text category="h6">
            {order.orderedItems.reduce((temp, item) => temp + item.priceSum, 0)}{" "}
            Ft
          </Text>
        </Layout>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 20,
    overflow: "hidden",
  },
  section: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  separator: {
    borderBottomWidth: 2,
    borderColor: "#ccc",
  },
  itemsContainer: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
