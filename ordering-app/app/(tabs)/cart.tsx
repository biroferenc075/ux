import { ScrollView, StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { router } from "expo-router";
import { Button, Text } from "@ui-kitten/components";
import { useAppContext } from "@/store/AppContext";
import CartItemCard from "@/components/CartItemCard";
import { Order } from "@/models/order";
import { OrderStatuses } from "@/models/enums/orderStatuses";
import "react-native-get-random-values";
import { nanoid } from "nanoid";

export default function CartScreen() {
  const { state, dispatch } = useAppContext();

  const onSubmitOrder = () => {
    const order: Order = {
      id: nanoid(10),
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
          {!state.tableNumber && (
            <Text style={styles.text}>
              Please scan the QR code on the table before Ordering!
            </Text>
          )}
          <View style={styles.buttoncontainer}>
            {state.tableNumber ? (
              <Text>Table {state.tableNumber}</Text>
            ) : (
              <Button onPress={() => router.navigate("/qr_code_scan")}>
                Scan QR code!
              </Button>
            )}
            <Button
              //disabled={typeof state.tableNumber == "undefined"}
              onPress={onSubmitOrder}
            >
              Order
            </Button>
          </View>
        </>
      )}
    </ScrollView>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
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
    marginTop: 20,
  },
});
