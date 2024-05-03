import { FoodItem } from "@/models/foodItem";
import { Card, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { Image, View, StyleSheet } from "react-native";

interface FoodCardProps {
  foodItem: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ foodItem }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: foodItem.imagePath }}
        borderRadius={10}
        width={120}
        height={120}
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

  text: {
    textAlign: "center",
    overflow: "hidden",
    fontSize: 12,
  },
});

export default FoodCard;
