import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import FoodCard from "@/components/FoodCard";

export default function OrderScreen() {
  return (
    <View style={styles.container}>
      <FoodCard
        imageSource="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2619967%2Fpexels-photo-2619967.jpeg%3Fcs%3Dsrgb%26dl%3Dpizza-2619967.jpg%26fm%3Djpg&f=1&nofb=1&ipt=4061c4f508da6a8e4cab3408bf4d6e366fddb75361319585711aad0d3723987d&ipo=images"
        foodName="Pizza"
        price={3000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});
