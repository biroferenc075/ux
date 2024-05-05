import { Allergens } from "@/models/enums/allergens";
import { View, StyleSheet } from "react-native";

interface AllergenBadgeProps {
  allergen: Allergens;
}

export const AllergenBadge: React.FC<AllergenBadgeProps> = ({ allergen }) => {
  //TODO set colors
  const getColor = () => {
    switch (allergen) {
      case Allergens.dairy:
        return "blue";
      case Allergens.eggs:
        return "blue";
      case Allergens.gluten:
        return "blue";
      case Allergens.nuts:
        return "blue";
      case Allergens.shellfish:
        return "blue";
      case Allergens.soy:
        return "blue";
    }
  };
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    height: 25,
    width: 25,
    borderRadius: 50,
  },

  icon: {},
});
