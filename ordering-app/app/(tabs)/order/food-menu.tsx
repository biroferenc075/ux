import { ScrollView, StyleSheet } from "react-native";
import FoodCard from "@/components/FoodCard";
import { useEffect, useState } from "react";
import { FoodItem } from "@/models/foodItem";
import { FoodItemService } from "@/services/foodItemService";
import CartSnackbar from "@/components/CartSnackbar";
import { useAppContext } from "@/store/AppContext";

export default function FoodMenuScreen() {
  const [menuItems, setMenuItems] = useState<FoodItem[]>([]);
  const { state } = useAppContext();

  useEffect(() => {
    const items = FoodItemService.getMenuItems();
    setMenuItems(items);
  }, []);

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {menuItems.map((item, index) => (
          <FoodCard foodItem={item} key={index} />
        ))}
      </ScrollView>
      {state.cart.length > 0 ? <CartSnackbar /> : <></>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    columnGap: 20,
    rowGap: 15,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});
