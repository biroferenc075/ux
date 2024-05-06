import { Allergens } from "@/models/enums/allergens";
import { Button } from "@ui-kitten/components";
import { FC, useState } from "react";
import { View, StyleSheet } from "react-native";
import { AllergenBadge, AllergenHelpers } from "./AllergenBadge";
import { useAppContext } from "@/store/AppContext";

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
      padding: 0,
      margin: 4,
      borderWidth: 0,
      opacity: isAllergenAllowed ? 1 : 0.4,
    };
  };

  return (
    <View style={styles.container}>
      {Object.values(Allergens).map((allergen, index) => (
        <Button
          size="tiny"
          key={index}
          style={getButtonStyles(
            allergen,
            state.allowedAllergens.includes(allergen)
          )}
          accessoryLeft={<AllergenBadge allergen={allergen} />}
          onPress={() => handleButtonPress(allergen)}
        ></Button>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    overflow: "scroll",
    width: "100%",
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AllergenFilterBar;
