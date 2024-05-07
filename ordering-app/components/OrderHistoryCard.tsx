import React from "react";
import { Card, Layout, Text } from "@ui-kitten/components";
import { OrderHistory } from "@/models/orderHistory";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

const OrderHistoryCard = ({ orderHistory }: { orderHistory: OrderHistory }) => {
  const navigateToDetails = () => {
    router.navigate({
      pathname: "history/order-details",
      params: {
        id: orderHistory.id,
      },
    });
  };

  return (
    <Card onPress={navigateToDetails} style={styles.card}>
      <Layout style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text category="s1" >
          Order #{orderHistory.id}
        </Text>
        <Text appearance="hint">{orderHistory.date.toLocaleString()}</Text>
      </Layout>
      <Layout style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text category="s1" >
          {orderHistory.price} Ft
        </Text>
        <Text category="s1" >
          {orderHistory.status}
        </Text>
      </Layout>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 5,
    marginHorizontal: 5,
  },
});

export default OrderHistoryCard;
