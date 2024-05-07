import { Allergens } from "@/models/enums/allergens";
import { Button, Text } from "@ui-kitten/components";
import { FC, useState } from "react";
import { View, StyleSheet, TextStyle } from "react-native";
import { AllergenBadge, AllergenHelpers } from "./AllergenBadge";
import { useAppContext } from "@/store/AppContext";
import theme from "../custom-theme.json";

interface AllergenFilterBarProps {}

const AllergenFilterBar: FC<AllergenFilterBarProps> = ({}) => {
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
      borderWidth: 1,
      opacity: isAllergenAllowed ? 1 : 0.4,
      width: 45,
      height: 45,
      borderColor: "white",
    };
  };

  const getTextStyles = (isAllergenAllowed: boolean): TextStyle => {
    return {
      color: "white",
      fontWeight: "bold",
      textDecorationLine: isAllergenAllowed ? "none" : "line-through",
      textDecorationColor: "black",
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemcontainer}>
        {Object.values(Allergens).map((allergen, index) => (
          <>
            <View style={styles.buttoncontainer} key={index}>
              <View style={styles.bg}>
                <Button
                  size="tiny"
                  style={getButtonStyles(
                    allergen,
                    state.allowedAllergens.includes(allergen)
                  )}
                  accessoryLeft={<AllergenBadge allergen={allergen} />}
                  onPress={() => handleButtonPress(allergen)}
                ></Button>
              </View>

              <Text
                style={getTextStyles(state.allowedAllergens.includes(allergen))}
              >
                {allergen.toString().toUpperCase()[0] +
                  allergen.toString().slice(1)}
              </Text>
            </View>
          </>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingTop: 40,
    backgroundColor: theme["color-primary-500"],
  },
  itemcontainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    overflow: "scroll",
    width: "100%",
    justifyContent: "center",
    gap: 12,
    alignItems: "center",
  },

  buttoncontainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "line-through",
    textDecorationColor: "red",
  },
  bg: {
    backgroundColor: "white",
    borderRadius: 50,
  },
});

export default AllergenFilterBar;
