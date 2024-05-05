import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Image, View } from "react-native";
import { Button, Text } from "@ui-kitten/components";
import { useAppContext } from "@/store/AppContext";
import React from "react";
import { AllergenBadge } from "@/components/AllergenBadge";

export default function DetailsScreen() {
  const { state } = useAppContext();

  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={state.selectedFoodItem?.imageSrc} />
      </View>
      <View style={styles.hstack}>
        <Text style={styles.title}>{state.selectedFoodItem?.name}</Text>
        <Text style={styles.title}>
          {state.selectedFoodItem?.price ?? ""} Ft
        </Text>
      </View>
      <Text>{state.selectedFoodItem?.description}</Text>
      <Text style={styles.title}>Allergens</Text>
      <View style={styles.allergencontainer}>
        {state.selectedFoodItem?.allergens.map((allergen) => (
          <View style={styles.allergencontainer}>
            <AllergenBadge allergen={allergen} key={allergen} />
            <Text>{allergen.charAt(0).toUpperCase() + allergen.slice(1)}</Text>
          </View>
        ))}
      </View>
      <View style={styles.formcontainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
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
    gap: 10,
    flexBasis: "45%",
    flexWrap: "wrap",
  },
  formcontainer: {
    display: "flex",
    flexDirection: "row",
  },
});
