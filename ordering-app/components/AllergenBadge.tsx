import { Allergens } from "@/models/enums/allergens";
import { View, StyleSheet, Image } from "react-native";

interface AllergenBadgeProps {
  allergen: Allergens;
  backgroundVisible?: boolean;
}

const getSrc = (allergen: Allergens) => {
  switch (allergen) {
    case Allergens.dairy:
      return require("../assets/images/icons/milk.gif");
    case Allergens.eggs:
      return require("../assets/images/icons/eggs.gif");
    case Allergens.gluten:
      return require("../assets/images/icons/gluten.gif");
    case Allergens.nuts:
      return require("../assets/images/icons/nuts.gif");
    case Allergens.soy:
      return require("../assets/images/icons/soy.gif");
    case Allergens.fish:
      return require("../assets/images/icons/fish.gif");
  }
};

const getColor = (allergen: Allergens) => {
  switch (allergen) {
    case Allergens.dairy:
      return "#0099ff";
    case Allergens.gluten:
      return "#fcba03";
    case Allergens.eggs:
      return "#A63D40";
    case Allergens.fish:
      return "#004080";
    case Allergens.nuts:
      return "#574029";
    case Allergens.soy:
      return "#004d1a";
    
  }
};

export const AllergenBadge: React.FC<AllergenBadgeProps> = ({ allergen, backgroundVisible = true }) => {
  const getStyle = () => {
    return backgroundVisible ? {
      backgroundColor: getColor(allergen),
      height: 30,
      width: 30,
      borderRadius: 50,
    } : {
      height: 30,
      width: 30,
      borderRadius: 50,
    };
  };

  return (
    <View style={getStyle()}>
      <Image source={getSrc(allergen)} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
  },
});

export const AllergenHelpers = {
  getColor,
  getSrc,
};
