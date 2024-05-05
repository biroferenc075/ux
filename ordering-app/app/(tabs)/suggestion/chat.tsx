import { View, Image, ScrollView, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Text, Button, CheckBox, Divider, IndexPath, Select, SelectItem, Input } from "@ui-kitten/components";
import { useForm, Controller } from "react-hook-form";
import { Diets } from "@/models/enums/diets";
import { Allergens } from "@/models/enums/allergens";
import { FoodItem } from "@/models/foodItem";
import { useAppContext } from "@/store/AppContext";
import { router } from "expo-router";
import { FoodItemService } from "@/services/foodItemService";

export default function ChatScreen() {
  const onSubmit = (data: any) => console.log(data);

  const ChatBubble = (text :string) => {
    return <View style={styles.chatBubble}>
        <Text style={styles.chatText}>{text}</Text>
    </View>
  }

  const { dispatch } = useAppContext();
  const items = FoodItemService.getMenuItems();

  const ImageBubble = (foodItem : FoodItem) => {
    const handlePress = () => {
        dispatch({ type: "SELECT_FOOD_ITEM", payload: foodItem });
        router.navigate({
          pathname: "order/details",
        });
      };

    return <View style={styles.chatBubble}>
        <Pressable style={styles.pressable} onPress={handlePress}>
        <View>
            <View style={styles.imagecontainer}>
            <Image source={foodItem.imageSrc} style={styles.image} />
            </View>
            <Text style={styles.nametext} category="h5">
            {foodItem.name}
            </Text>
            <Text style={styles.pricetext} category="s1">
            {foodItem.price} Ft
            </Text>
        </View>
        </Pressable>
    </View>
  }

  return (
    <View>
    <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.avatar}>
            <Image source={require("../../../assets/dump/robot-chatbot-head-icon-sign-vector.png")} style={styles.image} />
        </View>
        {ChatBubble("Based on your preferences, here's what I would suggest to eat!")}
        {ImageBubble(items.at(0)!!)}
        {ChatBubble("Or are you in the mood for this one? :)")}
        {ImageBubble(items.at(1)!!)}
        {ChatBubble("If none of these work, I can suggest more!")}
        <View style={styles.center}>
            <Button style={styles.button} onPress={onSubmit}>Suggest more!</Button>
        </View>
    </ScrollView>
    </View>);
}

const styles = StyleSheet.create({
  
  scrollView: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingLeft: 50,
    paddingRight: 10,
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    columnGap: 20,
    rowGap: 15,
    alignItems: "flex-end",
  },
  
  pressable: {
    flexBasis: "70%",
  },

  chatBubble: {
    backgroundColor: "lavender",
    borderRadius: 30,
    alignContent: "flex-end",
    padding: 15,
    width: "auto"
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
    height: 120,
    overflow: "hidden",
    borderRadius: 10,
  },
  
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  avatar: {
    height: 55,
    width: 55,
    borderRadius: 90,
    position: "absolute",
    left: 10,
    top: 20,
    zIndex: 1
  },

  center: {
    width: "100%",paddingRight: 40
  },

  button: {
    width : "60%",
    alignSelf: "center"
  }
});
