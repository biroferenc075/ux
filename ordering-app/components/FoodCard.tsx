import { FoodItem } from "@/models/foodItem";
import { Card } from "@ui-kitten/components";
import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface FoodCardProps {
  foodItem: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ foodItem }) => {
  return (
    <View>
      <Card>
        <Image source={{ uri: foodItem.imagePath }} />
        <Text>asd</Text>
        <Text>{foodItem.price}</Text>
      </Card>
    </View>
  );
};

//const styles = StyleSheet.create({});

export default FoodCard;
