import React from "react";
import { Card, Layout, Text } from "@ui-kitten/components";
import { OrderHistory } from "@/models/orderHistory";

const OrderHistoryCard = ({ orderHistory }: { orderHistory: OrderHistory }) => {
  return (
    <Card
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Layout style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text category="c1" appearance="primary">
          Order #{orderHistory.id}
        </Text>
        <Text appearance="hint">{orderHistory.date.toLocaleString()}</Text>
      </Layout>
      <Layout style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text category="c1" appearance="primary">
          {orderHistory.price} Ft
        </Text>
        <Text category="c1" appearance="primary">
          {orderHistory.status}
        </Text>
      </Layout>
    </Card>
  );
};

export default OrderHistoryCard;
