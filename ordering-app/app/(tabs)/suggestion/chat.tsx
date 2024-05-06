import { View, Image, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Button } from "@ui-kitten/components";
import { FoodItemService } from "@/services/foodItemService";
import ImageBubble from "@/components/ImageBubble";
import ChatBubble from "@/components/ChatBubble";

export default function ChatScreen() {
  const onSubmit = (data: any) => console.log(data);

  const items = FoodItemService.getMenuItems();

  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.avatar}>
          <Image
            source={require("../../../assets/dump/robot-chatbot-head-icon-sign-vector.png")}
            style={styles.image}
          />
        </View>
        <ChatBubble text="Based on your preferences, here's what I would suggest to eat!" />

        <ImageBubble foodItem={items.at(0)!!} />
        <ChatBubble text="Or are you in the mood for this one? :)" />
        <ImageBubble foodItem={items.at(1)!!} />
        <ChatBubble text="If none of these work, I can suggest more!" />
        <View style={styles.center}>
          <Button style={styles.button} onPress={onSubmit}>
            Suggest more!
          </Button>
        </View>
      </ScrollView>
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
    top: 20,
    zIndex: 1,
  },

  center: {
    width: "100%",
    paddingRight: 40,
  },

  button: {
    width: "60%",
    alignSelf: "center",
  },
});
