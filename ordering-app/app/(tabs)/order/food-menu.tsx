import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import FoodCard from "@/components/FoodCard";
import React, { useEffect, useState } from "react";
import { FoodItem } from "@/models/foodItem";
import { FoodItemService } from "@/services/foodItemService";
import CartSnackbar from "@/components/CartSnackbar";
import { useAppContext } from "@/store/AppContext";
import { Popover, Text } from "@ui-kitten/components";
import { FoodItemTypes } from "@/models/enums/foodItemTypes";
import AllergenFilterBar from "@/components/AllergenFilterBar";
import theme from "../../../custom-theme.json";

export default function FoodMenuScreen() {
  const [menuItems, setMenuItems] = useState<FoodItem[]>([]);
  const [visible, setVisible] = useState<boolean>(true);
  const { state } = useAppContext();

  useEffect(() => {
    const items = FoodItemService.getMenuItems();
    setMenuItems(applyAllergenFilters(items));
  }, [state.allowedAllergens]);

  const applyAllergenFilters = (items: FoodItem[]) => {
    const allowedAllergens = state.allowedAllergens;
    return items.filter((item) =>
      item.allergens.every((allergen) => allowedAllergens.includes(allergen))
    );
  };

  const renderFoodItemsForType = (type: FoodItemTypes) => {
    return menuItems
      .filter((item) => item.type == type)
      .map((item, index) => <FoodCard foodItem={item} key={index} />);
  };

  return (
    <>
      <Pressable
        style={visible ? styles.backdrop : styles.hide}
        onPress={() => {
          setVisible(false);
        }}
      >
        <View style={styles.popupContainerTop}>
          <View style={styles.popupTextContainer}>
            <Text style={styles.popupText}>
              You can click on these icons to filter the menu for allergens!
            </Text>
          </View>
          <Text style={styles.popupArrowTop}>{""}</Text>
        </View>
        <View style={styles.popupContainerBottom}>
          <View style={styles.popupTextContainer}>
            <Text style={styles.popupText}>
              If you are unsure about what to order, our AI colleague can give
              you suggestions!
            </Text>
          </View>
          <Text style={styles.popupArrowBottom}>{""}</Text>
        </View>
      </Pressable>
      <AllergenFilterBar />
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
    paddingHorizontal: 40,
    paddingBottom: 40,
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

  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "83%",
    position: "absolute",
    top: "17%",
    zIndex: 1,
  },

  hide: {
    display: "none",
  },

  popupTextContainerTop: {
    width: "70%",
    position: "relative",
    borderColor: theme["color-primary-400"],
    borderRadius: 12,
    borderWidth: 5,
    backgroundColor: theme["color-primary-400"],
    padding: 10,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    flexDirection: "row",
  },

  popupTextContainerBottom: {
    width: "70%",
    position: "relative",
    borderColor: theme["color-primary-400"],
    borderRadius: 12,
    borderWidth: 5,
    backgroundColor: theme["color-primary-400"],
    padding: 10,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    flexDirection: "row",
  },

  popupText: {
    color: "white",
    margin: 0,
    fontSize: 16,
    fontWeight: "bold",
  },

  popupContainerTop: {
    height: "auto",
    width: "100%",
    padding: 15,
    display: "flex",
    alignItems: "center"
  },

  popupContainerBottom: {
    height: "auto",
    position: "absolute",
    width: "100%",
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    bottom: 0,
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    zIndex: 5
  },

  popupArrowTop: {
    zIndex: 2,
    position: "absolute",
    bottom: "100%",
    left: "50%",
    borderWidth: 15,
    marginBottom: 15,
    borderStyle: "solid",
    borderBottomColor: theme["color-primary-400"],
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    height: 0,
  },

  popupArrowBottom: {
    zIndex: 2,
    position: "absolute",
    top: "100%",
    right: Dimensions.get("window").width * 0.125 - 15,
    borderWidth: 15,
    marginTop: 15,
    borderStyle: "solid",
    borderTopColor: theme["color-primary-400"], 
    borderBottomColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    height: 0,
  },
});
