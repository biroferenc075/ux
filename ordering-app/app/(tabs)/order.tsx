import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import FoodCard from "@/components/FoodCard";
import { useEffect } from "react";
import { FoodItem } from "@/models/foodItem";
import { Allergens } from "@/models/enums/allergens";

export default function OrderScreen() {
  useEffect(() => {});

  const test: FoodItem = {
    description: "Wowowowowo",
    allergens: [Allergens.eggs],
    name: "Name",
    price: 200,
    imagePath:
      "https://t4.ftcdn.net/jpg/06/33/96/81/360_F_633968177_Neg4rl4h68UjlMKl3vM383fVpTp8n0Xn.jpg",
  };
  return (
    <View style={styles.container}>
      <FoodCard foodItem={test} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});
