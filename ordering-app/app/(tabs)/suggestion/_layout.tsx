import { Stack } from "expo-router";

export default function SuggestionLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="ask-for-suggestion"
        options={{ headerShown: false, title: "Suggestion" }}
      />
      <Stack.Screen
        name="chat"
        options={{title: "Chat" }}
      />
    </Stack>
  );
}
