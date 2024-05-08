import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Image } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { View } from "@/components/Themed";
import OrderDetailsCard from "@/components/OrderDetailsCard";
import { useAppContext } from "@/store/AppContext";
import { OrderStatuses } from "@/models/enums/orderStatuses";
import { DateHelper } from "@/helpers/dateHelper";

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

  const getOrderStatusImageSrc = () => {
    switch (order.status) {
      case OrderStatuses.preparing:
        return require("../../../assets/images/order-status/preparing.jpg");
      case OrderStatuses.served:
        return require("../../../assets/images/order-status/served.jpg");
      case OrderStatuses.completed:
        return require("../../../assets/images/order-status/completed.jpg");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
          Order #{order.id}
        </Text>
        <Text style={{ fontSize: 14, marginBottom: 5 }}>
          Placed on {DateHelper.formatDate(order.date)}
        </Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={getOrderStatusImageSrc()}></Image>
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
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#0000",
  },
  section: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: "#0000",
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
