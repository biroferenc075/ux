import { Stack } from "expo-router";
import theme from "../../../custom-theme.json";

export default function SuggestionLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="ask-for-suggestion"
        options={{ headerShown: false, title: "Suggestion" }}
      />
      <Stack.Screen
        name="chat"
        options={{
        title: "Chat",
        headerTintColor: "#FFF",
        headerStyle: {
          backgroundColor: theme["color-primary-500"],
        },
        }}
      />
    </Stack>
  );
}
