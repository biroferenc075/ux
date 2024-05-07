import { CartItem } from "@/models/cartItem";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";

interface CartItemCardProps {
  item: CartItem;
}

const OrderDetailsCard: React.FC<CartItemCardProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={item.foodItem.imageSrc}></Image>
      </View>
      <View style={styles.infocontainer}>
        <Text style={styles.nametext} category="h5">
          {item.foodItem.name}
        </Text>
        <Text>
          {item.count} {item.count == 1 ? "piece" : "pieces"}
        </Text>
        <Text>{item.priceSum} Ft</Text>
        {item.note && <Text>Note: {item.note}</Text>}
      </View>
    </View>
  );
};

export default OrderDetailsCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 100,
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
    width: "70%",
    height: 150,
    padding: 10,
  },

  selectorcontainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
