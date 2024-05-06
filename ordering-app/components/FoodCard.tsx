import { FoodItem } from "@/models/foodItem";
import { useAppContext } from "@/store/AppContext";
import { Text } from "@ui-kitten/components";
import { router } from "expo-router";
import React from "react";
import { Image, View, StyleSheet, Pressable } from "react-native";
import { AllergenBadge } from "./AllergenBadge";

interface FoodCardProps {
  foodItem: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ foodItem }) => {
  const { dispatch } = useAppContext();
  const handlePress = () => {
    dispatch({ type: "SELECT_FOOD_ITEM", payload: foodItem });
    router.navigate({
      pathname: "order/details",
    });
  };

  return (
    <Pressable style={styles.pressable} onPress={handlePress}>
      <View style={styles.cardcontainer}>
        <View style={styles.badgecontainer}>
          {foodItem.allergens.map((item, index) => 
            <View style={styles.badge}>
              <AllergenBadge allergen={item} key={index}></AllergenBadge>
            </View>
          )}
          <View style = {styles.filler}></View>
        </View>
        <View style={styles.imagecontainer}>
          <Image source={foodItem.imageSrc} style={styles.image} />
        </View>
        <Text style={styles.nametext} category="h5">
          {foodItem.name}
        </Text>
        <Text style={styles.pricetext} category="s1">
          {foodItem.price} Ft
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    flexBasis: "45%",
  },

  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  imagecontainer: {
    height: 150,
    overflow: "hidden",
    borderRadius: 10,
  },

  nametext: {
    textAlign: "center",
    overflow: "hidden",
    fontSize: 13,
    marginTop: 2,
    marginBottom: 4,
  },

  pricetext: {
    textAlign: "center",
    overflow: "hidden",
    fontSize: 12,
  },

  cardcontainer: {
    position: "relative",
  },

  badgecontainer: {
    padding: 5,
    height: 150,
    position: "absolute",
    right: 0,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap-reverse",
    justifyContent: "space-evenly",
    columnGap: 4,
    rowGap: 4,
    alignItems: "center",
    zIndex: 1,
  },

  filler: {
    marginBottom: "auto"
  },

  badge: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 50
  }
});

export default FoodCard;
