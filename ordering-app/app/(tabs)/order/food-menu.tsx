import { ScrollView, StyleSheet } from "react-native";
import FoodCard from "@/components/FoodCard";
import { useEffect, useState } from "react";
import { FoodItem } from "@/models/foodItem";
import { FoodItemService } from "@/services/foodItemService";

export default function FoodMenuScreen() {
  const [menuItems, setMenuItems] = useState<FoodItem[]>([]);

  useEffect(() => {
    const items = FoodItemService.getMenuItems();
    console.log(items);
    setMenuItems(items);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {menuItems.map((item, index) => (
        <FoodCard foodItem={item} key={index} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: 20,
    rowGap: 15,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});
