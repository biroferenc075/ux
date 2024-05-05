import { FoodItem } from "@/models/foodItem";
import { Text } from "@ui-kitten/components";
import { router } from "expo-router";
import React from "react";
import { Image, View, StyleSheet, Pressable } from "react-native";

interface FoodCardProps {
  foodItem: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ foodItem }) => {
  const handlePress = () => {
    router.navigate({
      pathname: "order/details",
    });
  };

  return (
    <Pressable style={styles.pressable} onPress={handlePress}>
      <View>
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
    flexBasis: "40%",
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
});

export default FoodCard;
