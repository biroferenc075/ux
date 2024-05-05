import { Allergens } from "@/models/enums/allergens";
import { View, StyleSheet } from "react-native";

interface AllergenBadgeProps {
  allergen: Allergens;
}

const AllergenBadge: React.FC<AllergenBadgeProps> = ({ allergen }) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flexBasis: "40%",
  },

  icon: {},
});
