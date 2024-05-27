import { Allergens } from "@/models/enums/allergens";
import { Button, Icon, Text } from "@ui-kitten/components";
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
      borderWidth: 1,
      boxSizing: "border-box",
      opacity: isAllergenAllowed ? 1 : 0.4,
      width: 45,
      height: 45,
      borderColor: "white",
    };
  };

  const getIconStyles = (isAllergenAllowed: boolean) => {
    return {
      position: "absolute",
      top: -25,
      left: -40,
      width: 50,
      height: 50,
      zIndex: 100,
      display: isAllergenAllowed ? "none" : "",
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemcontainer}>
        {Object.values(Allergens).map((allergen, index) => {
          const isAllowed = state.allowedAllergens.includes(allergen);
          return (
            <View style={styles.buttoncontainer} key={index}>
              <View style={styles.bg}>
                <View style={styles.frame} />
                <Button
                  size="tiny"
                  style={getButtonStyles(allergen, isAllowed)}
                  accessoryLeft={
                    <>
                      <AllergenBadge
                        allergen={allergen}
                        backgroundVisible={false}
                      />
                      <Icon
                        name="close-outline"
                        fill="#880808"
                        style={getIconStyles(isAllowed)}
                      />
                    </>
                  }
                  onPress={() => handleButtonPress(allergen)}
                ></Button>
              </View>
              <Text style={styles.text}>
                {allergen.toString().toUpperCase()[0] +
                  allergen.toString().slice(1)}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
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
    alignItems: "center",
  },

  buttoncontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "33%",
  },

  text: {
    marginLeft: 10,
  },

  bg: {
    backgroundColor: "white",
    borderRadius: 50,
  },

  frame: {
    backgroundColor: "none",
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 1.5,
    zIndex: 1,
    width: 40,
    height: 40,
    position: "absolute",
    top: 2.5,
    left: 2.5,
    pointerEvents: "box-none",
  },
});

export default AllergenSelector;
