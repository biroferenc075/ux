import { Allergens } from "@/models/enums/allergens";
import { Button, Text } from "@ui-kitten/components";
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
          <>
            <View style={styles.buttoncontainer} key={index}>
              <Button
                size="tiny"
                style={getButtonStyles(
                  allergen,
                  state.allowedAllergens.includes(allergen)
                )}
                accessoryLeft={<AllergenBadge allergen={allergen} />}
                onPress={() => handleButtonPress(allergen)}
              ></Button>
              <Text>
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
    backgroundColor: "#ffad7a",
  },
  itemcontainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    overflow: "scroll",
    width: "100%",
    justifyContent: "center",
    gap: 6,
    alignItems: "center",
  },

  buttoncontainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AllergenFilterBar;
