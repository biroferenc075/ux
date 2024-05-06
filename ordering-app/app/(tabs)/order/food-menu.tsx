import { ScrollView, StyleSheet } from "react-native";
import FoodCard from "@/components/FoodCard";
import { useEffect, useState } from "react";
import { FoodItem } from "@/models/foodItem";
import { FoodItemService } from "@/services/foodItemService";
import CartSnackbar from "@/components/CartSnackbar";
import { useAppContext } from "@/store/AppContext";
import { Text } from "@ui-kitten/components";
import { FoodItemTypes } from "@/models/enums/foodItemTypes";

export default function FoodMenuScreen() {
  const [menuItems, setMenuItems] = useState<FoodItem[]>([]);
  const { state } = useAppContext();

  useEffect(() => {
    const items = FoodItemService.getMenuItems();
    setMenuItems(items);
  }, []);

  const renderFoodItemsForType = (type: FoodItemTypes) => {
    return menuItems
      .filter((item) => item.type == type)
      .map((item, index) => <FoodCard foodItem={item} key={index} />);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.typeheader}>Appetizers</Text>
        {renderFoodItemsForType(FoodItemTypes.appetizers)}
        <Text style={styles.typeheader}>Main Dishes</Text>
        {renderFoodItemsForType(FoodItemTypes.main)}
        <Text style={styles.typeheader}>Sides</Text>
        {renderFoodItemsForType(FoodItemTypes.side)}
        <Text style={styles.typeheader}>Desserts</Text>
        {renderFoodItemsForType(FoodItemTypes.dessert)}
        <Text style={styles.typeheader}>Drinks</Text>
        {renderFoodItemsForType(FoodItemTypes.drink)}
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

  typeheader: {
    marginVertical: 8,
    fontSize: 20,
    fontWeight: "bold",
    flexBasis: "100%",
  },
});
