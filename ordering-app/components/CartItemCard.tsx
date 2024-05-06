import { CartItem } from "@/models/cartItem";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";
import ItemCountSelector from "./ItemCountSelector";
import { useAppContext } from "@/store/AppContext";

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  const { dispatch } = useAppContext();

  const handleValueChange = (newValue: number) => {
    if (newValue == 0) {
      dispatch({ type: "DELETE_FROM_CART", payload: item });
    } else {
      dispatch({
        type: "UPDATE_ITEM_IN_CART",
        payload: {
          ...item,
          count: newValue,
          priceSum: newValue * item.foodItem.price,
        },
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={item.foodItem.imageSrc}></Image>
      </View>
      <View style={styles.infocontainer}>
        <Text style={styles.nametext} category="h5">
          {item.foodItem.name}
        </Text>
        <Text>{item.priceSum} Ft</Text>
        {item.note && <Text>Note: {item.note}</Text>}
        <View style={styles.selectorcontainer}>
          <ItemCountSelector
            initialValue={item.count}
            onValueChange={handleValueChange}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 130,
    position: "relative",
  },

  nametext: {
    overflow: "hidden",
    fontSize: 14,
    marginTop: 2,
    marginBottom: 4,
  },

  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  imagecontainer: {
    width: "40%",
    overflow: "hidden",
    borderRadius: 10,
  },

  infocontainer: {
    width: "60%",
    height: 150,
    padding: 10,
  },

  selectorcontainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

export default CartItemCard;
