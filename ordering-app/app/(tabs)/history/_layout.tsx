import { Stack } from "expo-router";

export default function HistoryLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="order-history"
        options={{ headerShown: false, title: "History" }}
      />
      <Stack.Screen
        name="order-details"
        options={{ headerShown: true, title: "Details" }}
      />
    </Stack>
  );
}
