import { OrderService } from "@/services/orderService";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Image } from "react-native";
import { Text } from "@ui-kitten/components";
import { View } from "@/components/Themed";
import CartItemCard from "@/components/CartItemCard";

export default function OrderDetailsScreen() {
  const { id } = useLocalSearchParams();

  const details = OrderService.getOrderDetails(Number(id)); // todo get it from state

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={details.statusImageSrc}></Image>
        </View>
        <Text category="h5">{details.statusMessage}</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.itemsContainer}>
        {details.orderedItems.map((item) => (
          <CartItemCard item={item} key={item.id} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 20,
    overflow: "hidden",
  },
  section: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
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
    minHeight: "100%",
  },
});
