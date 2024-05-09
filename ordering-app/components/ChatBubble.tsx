import { View, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";
interface ChatBubbleProps {
  text: string;
}

import theme from "../custom-theme.json";

const ChatBubble: React.FC<ChatBubbleProps> = ({ text }) => {
  return (
    <View style={styles.chatBubble}>
      <Text style={styles.chatText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chatBubble: {
    backgroundColor: theme["color-primary-200"],
    borderRadius: 30,
    alignContent: "flex-end",
    padding: 15,
    width: "92%",
  },

  chatText: {
    fontSize: 16,
  },
});

export default ChatBubble;
