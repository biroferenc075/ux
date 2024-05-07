import { Allergens } from "@/models/enums/allergens";
import { Button, Text } from "@ui-kitten/components";
import { FC, useState } from "react";
import { View, StyleSheet } from "react-native";
import { AllergenBadge, AllergenHelpers } from "./AllergenBadge";
import { useAppContext } from "@/store/AppContext";

interface AllergenSelectorProps {}

const AllergenSelector: FC<AllergenSelectorProps> = ({}) => {
  const { state, dispatch } = useAppContext();

  const handleButtonPress = (allergen: Allergens) => {
    if (state.allowedAllergens.includes(allergen)) {
      dispatch({ type: "REMOVE_ALLOWED_ALLERGEN", payload: allergen });
    } else {
      dispatch({ type: "ADD_ALLOWED_ALLERGEN", payload: allergen });
    }
  };

  const getButtonStyles = (allergen: Allergens, isAllergenAllowed: boolean) => {
    return {
      backgroundColor: AllergenHelpers.getColor(allergen),
      borderRadius: 50,
      borderWidth: 0,
      opacity: isAllergenAllowed ? 1 : 0.4,
      width: 45,
      height: 45,
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemcontainer}>
        {Object.values(Allergens).map((allergen, index) => (
            <View style={styles.buttoncontainer}  key={index}>
              <Button
                size="tiny"
                style={getButtonStyles(
                  allergen,
                  state.allowedAllergens.includes(allergen)
                )}
                accessoryLeft={<AllergenBadge allergen={allergen} backgroundVisible = {false}/>}
                onPress={() => handleButtonPress(allergen)}
              ></Button>
              <Text style={styles.text}>
                {allergen.toString().toUpperCase()[0] +
                  allergen.toString().slice(1)}
              </Text>
            </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%"
  },
  itemcontainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    overflow: "scroll",
    width: "100%",
    justifyContent: "center",
    columnGap: 20,
    rowGap: 10,
    alignItems: "center"
  },

  buttoncontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "33%",
  },

  text: {
    marginLeft: 10
  }
});

export default AllergenSelector;
