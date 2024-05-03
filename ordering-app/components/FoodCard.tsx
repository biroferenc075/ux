import { FoodItem } from "@/models/foodItem";
import { Card, Text } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet } from "react-native";

interface FoodCardProps {
  foodItem: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ foodItem }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image source={foodItem.imageSrc} />
      </View>

      <Text style={styles.text} category="h5">
        {foodItem.name}
      </Text>
      <Text style={styles.text} category="s1">
        {foodItem.price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexBasis: "40%",
  },

  image: {
    height: 100,
    width: 100,
    resizeMode: "contain",
    objectFit: "contain",
  },

  imagecontainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: "100%",
    overflow: "hidden",
    borderRadius: 10,
  },

  text: {
    textAlign: "center",
    overflow: "hidden",
    fontSize: 12,
  },
});

export default FoodCard;
