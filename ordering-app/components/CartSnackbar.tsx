import { Animated, Pressable, StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { router } from "expo-router";
import { useAppContext } from "@/store/AppContext";

interface ICartSnackbarProps {}

const CartSnackbar: React.FC<ICartSnackbarProps> = () => {
  const { state } = useAppContext();
  const onActionPressed = () => {
    router.navigate("/cart");
  };
  return (
    <>
      <View style={styles.snackbar}>
        <Text style={styles.message}>
          {state.cart.reduce((acc, current) => {
            return acc + current.count;
          }, 0)}{" "}
          items in cart -{" "}
          {state.cart.reduce((acc, current) => {
            return acc + current.priceSum;
          }, 0)}{" "}
          Ft in total
        </Text>
        <Pressable onPress={onActionPressed} style={styles.button}>
          <Text style={styles.actionLabel}>Go to Cart</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "gray",
    borderRadius: 4,
    zIndex: 1000,
  },
  message: {
    flex: 1,
    color: "white",
  },
  button: {
    paddingLeft: 16,
  },
  actionLabel: {
    color: "blue",
    fontWeight: "bold",
  },
});

export default CartSnackbar;
