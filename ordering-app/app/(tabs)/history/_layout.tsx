import { Stack } from "expo-router";

export default function HistoryLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="order-history"
        options={{ headerShown: false, title: "History" }}
      />
    </Stack>
  );
}
