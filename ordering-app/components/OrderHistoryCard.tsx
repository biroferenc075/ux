import React from "react";
import { Card, Layout, Text } from "@ui-kitten/components";
import { router } from "expo-router";
import { StyleSheet } from "react-native";
import { Order } from "@/models/order";
import { DateHelper } from "@/helpers/dateHelper";

const OrderHistoryCard = ({ orderHistory }: { orderHistory: Order }) => {
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
        <Text category="s1">Order #{orderHistory.id}</Text>
        <Text appearance="hint">
          {DateHelper.formatDate(orderHistory.date)}
        </Text>
      </Layout>
      <Layout style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text category="s1">{orderHistory.price} Ft</Text>
        <Text category="s1">
          {orderHistory.status[0].toUpperCase() + orderHistory.status.slice(1)}
        </Text>
      </Layout>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 10,
    minHeight: 80,
    maxHeight: 80,
  },
});

export default OrderHistoryCard;
