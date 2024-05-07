import { router } from "expo-router";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import { Button, Input, Text } from "@ui-kitten/components";
import { useAppContext } from "@/store/AppContext";
import React, { useState } from "react";
import { AllergenBadge } from "@/components/AllergenBadge";
import ItemCountSelector from "@/components/ItemCountSelector";
import { CartItem } from "@/models/cartItem";
import { FoodItem } from "@/models/foodItem";
import uuid from "react-native-uuid";

export default function DetailsScreen() {
  const { state, dispatch } = useAppContext();
  const foodItem = state.selectedFoodItem as FoodItem;
  const [itemCount, setItemCount] = useState(1);
  const [note, setNote] = useState("");

  const handleCountChange = (newValue: number) => {
    setItemCount(newValue);
  };

  const handleNoteChange = (newValue: string) => {
    setNote(newValue);
  };

  const onAddToCartPressed = () => {
    const cartItem: CartItem = {
      count: itemCount,
      foodItem: foodItem,
      priceSum: itemCount * foodItem?.price,
      note: note,
      id: uuid.v4().toString(),
    };
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
    router.navigate("/order/food-menu");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={state.selectedFoodItem?.imageSrc} />
      </View>
      <View style={styles.hstack}>
        <Text style={styles.title}>{state.selectedFoodItem?.name}</Text>
        <Text style={styles.title}>
          {state.selectedFoodItem?.price ?? ""} Ft
        </Text>
      </View>
      <Text style={{ textAlign: "justify" }}>
        {state.selectedFoodItem?.description}
      </Text>
      {state.selectedFoodItem &&
        state.selectedFoodItem?.allergens.length > 0 && (
          <Text style={styles.title}>Allergens</Text>
        )}
      <View style={styles.allergencontainer}>
        {state.selectedFoodItem?.allergens.map((allergen, index) => (
          <View style={styles.allergen} key={index}>
            <AllergenBadge allergen={allergen} />
            <Text>{allergen.charAt(0).toUpperCase() + allergen.slice(1)}</Text>
          </View>
        ))}
      </View>
      <View style={styles.formcontainer}>
        <ItemCountSelector onValueChange={handleCountChange} min={1} />
        <Button onPress={onAddToCartPressed}>Add to cart</Button>
        <Input
          style={styles.textarea}
          label={"Note"}
          placeholder="Let the chefs know if you have any special requests!"
          multiline
          onChangeText={handleNoteChange}
        ></Input>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
    minHeight: "100%",
    backgroundColor: "white",
  },
  imagecontainer: {
    width: "100%",
    height: 250,
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 10,
  },
  hstack: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  title: {
    marginVertical: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
  allergencontainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  allergen: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    flexBasis: "45%",
    alignItems: "center",
  },
  formcontainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    marginVertical: 40,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  textarea: {
    flexBasis: "100%",
    marginTop: 20,
  },
});
