import { FoodItem } from "@/models/foodItem";
import { useAppContext } from "@/store/AppContext";
import { router } from "expo-router";
import { View, Pressable, StyleSheet, Image } from "react-native";
import { Text } from "@ui-kitten/components";
import theme from "../custom-theme.json";

interface ImageBubbleProps {
  foodItem: FoodItem;
}

const ImageBubble: React.FC<ImageBubbleProps> = ({ foodItem }) => {
  const { dispatch } = useAppContext();
  const handlePress = () => {
    dispatch({ type: "SELECT_FOOD_ITEM", payload: foodItem });
    router.navigate({
      pathname: "order/details",
    });
  };

  return (
    <View>
      <Pressable style={styles.pressable} onPress={handlePress}>
        <View style={styles.imageBubble}>
          <View style={styles.imagecontainer}>
            <Image source={foodItem.imageSrc} style={styles.image} />
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.nametext} category="h5">
              {foodItem.name}
            </Text>
            <Text style={styles.pricetext} category="s1">
              {foodItem.price} Ft
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressable: {
    flexBasis: "70%",
  },

  imageBubble: {
    backgroundColor: theme["color-primary-200"],
    borderRadius: 30,
    padding: 15,
    width: "auto",
  },

  chatText: {
    fontSize: 16,
  },

  nametext: {
    textAlign: "center",
    overflow: "hidden",
    fontSize: 13,
    marginTop: 2,
    marginBottom: 4,
  },

  pricetext: {
    textAlign: "center",
    overflow: "hidden",
    fontSize: 12,
  },

  imagecontainer: {
    height: 140,
    width: 140,
    borderRadius: 10,
    alignSelf: "center"
  },

  textcontainer: {
    flexGrow: 1,
    overflow: "hidden",
    borderRadius: 10,
  },

  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: 20,
  },
});

export default ImageBubble;
