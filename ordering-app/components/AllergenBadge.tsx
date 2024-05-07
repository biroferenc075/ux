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
      return "#2AD2FF";
    case Allergens.eggs:
      return "#FF3D3D";
    case Allergens.gluten:
      return "#A3843A";
    case Allergens.nuts:
      return "#5A4925";
    case Allergens.soy:
      return "#2F723A";
    case Allergens.fish:
      return "#2D68CF";
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
