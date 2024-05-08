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
        return "Our chefs are working hard to prepare your order!";
      case OrderStatuses.served:
        return "Enjoy your meal!";
      case OrderStatuses.completed:
        return "You already paid for this order. See you next time!";
    }
  };

  const getOrderStatusImageSrc = (): string => {
    switch (order.status) {
      case OrderStatuses.preparing:
        return "Our chefs are working hard to prepare your order!";
      case OrderStatuses.served:
        return "Enjoy your meal!";
      case OrderStatuses.completed:
        return "You already paid for this order. See you next time!";
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
          Order #{order.id}
        </Text>
        <Text style={{ fontSize: 14, marginBottom: 5 }}>
          Placed on {order.date.toLocaleString()}
        </Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: getOrderStatusImageSrc() }}
          ></Image>
        </View>
        <Text
          category="h5"
          style={{
            paddingTop: 10,
            paddingHorizontal: 10,
            textAlign: "center",
            fontSize: 20,
          }}
        >
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
      <Layout
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <Text category="h6" style={{ fontSize: 16 }}>
          Total
        </Text>
        <Text category="h6" style={{ fontSize: 16 }}>
          {order.orderedItems.reduce((temp, item) => temp + item.priceSum, 0)}{" "}
          Ft
        </Text>
      </Layout>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 10,
    backgroundColor: "#fff",
    minHeight: "100%",
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
