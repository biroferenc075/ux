import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import FoodCard from "@/components/FoodCard";
import { useEffect, useState } from "react";
import { FoodItem } from "@/models/foodItem";
import { Allergens } from "@/models/enums/allergens";
import { FoodItemService } from "@/services/foodItemService";

export default function OrderScreen() {
  const [menuItems, setMenuItems] = useState<FoodItem[]>([]);

  useEffect(() => {
    const items = FoodItemService.getMenuItems();
    console.log(items);
    setMenuItems(items);
  }, []);

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <FoodCard foodItem={item} key={index}/>
      ))}
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
