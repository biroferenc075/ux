import { FoodItem } from "@/models/foodItem";
import { Card, Text } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet } from "react-native";

interface FoodCardProps {
  foodItem: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ foodItem }) => {
  useEffect(() => {
    console.log(foodItem.imagePath);
  });
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: foodItem.imagePath }}
        resizeMode="cover"
        borderRadius={10}
      />
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
    flexBasis: "49%",
  },

  image: {
    height: 140,
    width: "100%",
    objectFit: "cover",
  },

  text: {
    textAlign: "center",
    overflow: "hidden",
    fontSize: 12,
  },
});

export default FoodCard;
