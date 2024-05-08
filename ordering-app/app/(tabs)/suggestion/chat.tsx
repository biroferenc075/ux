import { View, Image, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "@ui-kitten/components";
import { FoodItemService } from "@/services/foodItemService";
import ImageBubble from "@/components/ImageBubble";
import ChatBubble from "@/components/ChatBubble";
import { useAppContext } from "@/store/AppContext";
import { FoodItem } from "@/models/foodItem";
import { FoodItemTypes } from "@/models/enums/foodItemTypes";

function shuffle(array : FoodItem[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

export default function ChatScreen() {
  const onSubmit = (data: any) => {setItem1(filteredItems.pop()!!);setItem2(filteredItems.pop()!!);}
  const { state, dispatch } = useAppContext();
  const items = FoodItemService.getMenuItems();
  const filteredItems = shuffle(items.filter(item => item.type != FoodItemTypes.drink).filter(item => item.allergens.every(all => state.allowedAllergens.includes(all)) && item.diets.includes(state.suggestionDiet)))

  const [item1, setItem1] = useState<FoodItem>(filteredItems.pop()!!)
  const [item2, setItem2] = useState<FoodItem>(filteredItems.pop()!!)

  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.avatar}>
          <Image
            source={require("../../../assets/images/chatbot-avatar/chatbot-avatar.png")}
            style={styles.image}
          />
        </View>
        <ChatBubble text="Based on your preferences, here's what I would suggest to eat!" />
        <ImageBubble foodItem={item1} />
        <ChatBubble text="Or are you in the mood for this one? :)" />
        <ImageBubble foodItem={item2} />
        <ChatBubble text="If none of these work, I can suggest more!" />
        <View style={styles.spacer}/>
      </ScrollView>
      <View style={styles.center}>
          <Button style={styles.button} onPress={onSubmit}>
            Suggest more!
          </Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
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

  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: 20,
  },

  avatar: {
    height: 55,
    width: 55,
    borderRadius: 90,
    position: "absolute",
    left: 10,
    top: 23,
    zIndex: 1,
  },

  center: {
    width: "100%",
    position: "absolute",
    zIndex: 1,
    bottom: 10,
  },

  button: {
    width: "40%",
    alignSelf: "center",
  },

  spacer: {
    paddingBottom: 50
  },
});
