import { ScrollView, StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { router } from "expo-router";
import { Button, Text } from "@ui-kitten/components";
import { useAppContext } from "@/store/AppContext";
import CartItemCard from "@/components/CartItemCard";

export default function CartScreen() {
  const { state, dispatch } = useAppContext();

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
              <Text>Table</Text>
            ) : (
              <Button onPress={() => router.navigate("/qr_code_scan")}>
                Scan QR code!
              </Button>
            )}
            <Button disabled={typeof state.tableNumber == "undefined"}>
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
  },

  text: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
