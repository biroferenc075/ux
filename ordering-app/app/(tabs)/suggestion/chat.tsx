import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Text } from "@ui-kitten/components";
import { FoodItemService } from "@/services/foodItemService";
import ImageBubble from "@/components/ImageBubble";
import ChatBubble from "@/components/ChatBubble";
import { useAppContext } from "@/store/AppContext";
import { FoodItem } from "@/models/foodItem";
import { FoodItemTypes } from "@/models/enums/foodItemTypes";
import { CohereClient } from "cohere-ai";
import { ChatMessage } from "cohere-ai/api";

export default function ChatScreen() {
  const API_KEY = "eCTGq8szKXxxnmSDRO1oCAi9rPugl2aLlM7Ai0ru";
  const cohere = new CohereClient({
    token: API_KEY,
  });

  const [item1, setItem1] = useState<FoodItem | null>(null);
  const [item2, setItem2] = useState<FoodItem | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  useEffect(() => {
    setRefresh(false);
    setLoading(true);
    const getSuggestion = async () => {
      const chat = await cohere.chat({
        message:
          `Give me two recommendations of the following foods: ${filteredItems.map(
            (item) => item.name
          )}. ` +
          `${
            state.suggestionComment.length > 0
              ? `Consider this too: ${state.suggestionComment}. `
              : ""
          }` +
          "Answer with only the foods' names that I provided, separated by a comma. No other word.",
        chatHistory: chatHistory,
      });

      setChatHistory(chatHistory.concat(chat.chatHistory!));

      const foods = chat.text.split(",").map((item) => item.trim());
      setItem1(
        filteredItems.find((i) => i.name == foods.at(0)) ?? filteredItems.at(0)!
      );
      setItem2(
        filteredItems.find((i) => i.name == foods.at(1)) ?? filteredItems.at(1)!
      );
      setLoading(false);
    };
    getSuggestion();
  }, [refresh]);

  const onSubmit = (data: any) => {
    setRefresh(true);
    setLoading(true);
  };
  const { state, dispatch } = useAppContext();
  const items = FoodItemService.getMenuItems();
  const filteredItems = items
    .filter((item) => item.type != FoodItemTypes.drink)
    .filter(
      (item) =>
        item.allergens.every((all) => state.allowedAllergens.includes(all)) &&
        item.diets.includes(state.suggestionDiet)
    );

  return (
    <View>
      {item1 && item2 && !loading ? (
        <>
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
            <View style={styles.spacer} />
          </ScrollView>
          <View style={styles.center}>
            <Button style={styles.button} onPress={onSubmit}>
              Suggest more!
            </Button>
          </View>
        </>
      ) : (
        <ActivityIndicator style={styles.loading} size="large" />
      )}
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

  loading: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
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
    paddingBottom: 50,
  },
});
