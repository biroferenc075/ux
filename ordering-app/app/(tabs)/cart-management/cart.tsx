import { ScrollView, StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { router } from "expo-router";
import { Button, Text } from "@ui-kitten/components";
import { useAppContext } from "@/store/AppContext";
import CartItemCard from "@/components/CartItemCard";
import { Order } from "@/models/order";
import { OrderStatuses } from "@/models/enums/orderStatuses";
import ShortUniqueId from "short-unique-id";
import { default as theme } from "../../../custom-theme.json";

export default function CartScreen() {
  const { state, dispatch } = useAppContext();
  const onSubmitOrder = () => {
    const uid = new ShortUniqueId({ length: 6 });
    const order: Order = {
      id: uid.rnd(),
      date: new Date(),
      orderedItems: state.cart,
      price: state.cart.reduce((acc, item) => {
        return acc + item.priceSum;
      }, 0),
      status: OrderStatuses.preparing,
    };
    dispatch({ type: "SUBMIT_ORDER", payload: order });
    dispatch({ type: "EMPTY_CART", payload: order });
    router.navigate({
      pathname: "history/order-details",
      params: {
        id: order.id,
      },
    });
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {state.cart.length == 0 ? (
          <>
            <Text category="h5" style={styles.title}>
              Your cart is empty.
            </Text>
            <Button onPress={() => router.navigate("/order/food-menu")}>
              Browse our menu
            </Button>
          </>
        ) : (
          <>
            {state.cart.length > 0 &&
              state.cart.map((item, index) => (
                <CartItemCard item={item} key={index} />
              ))}
          </>
        )}
        <View style={styles.totalContainer}>
          <View style={styles.separator} />
          <Text category="h6" style={{ fontSize: 16 }}>
            Total
          </Text>
          <Text category="h6" style={{ fontSize: 16 }}>
            {state.cart.reduce((temp, item) => temp + item.priceSum, 0)} Ft
          </Text>
        </View>
      </ScrollView>

      <View style={styles.controlcontainer}>
        {!state.tableNumber && (
          <Text style={styles.text}>Please scan the QR code on the table!</Text>
        )}
        <View style={styles.buttoncontainer}>
          {state.tableNumber ? (
            <Button
              onPress={() =>
                router.navigate({ pathname: "/cart-management/qr-code-scan" })
              }
              appearance="outline"
            >
              {`Table ${state.tableNumber}`}
            </Button>
          ) : (
            <Button
              onPress={() =>
                router.navigate({ pathname: "/cart-management/qr-code-scan" })
              }
            >
              Scan QR code!
            </Button>
          )}
          <Button
            disabled={
              typeof state.tableNumber == "undefined" || state.cart.length == 0
            }
            onPress={onSubmitOrder}
          >
            Order
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    minHeight: "100%",
  },
  totalContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    flexWrap: "wrap",
    rowGap: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    borderBottomWidth: 2,
    borderColor: "#ccc",
    flexBasis: "100%",
  },
  buttoncontainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#00000000",
  },

  text: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  controlcontainer: {
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 15,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f0f0f0",
  },
});
