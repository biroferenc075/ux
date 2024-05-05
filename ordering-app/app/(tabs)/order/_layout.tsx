import { Stack } from "expo-router";

export default function OrderLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="food-menu"
        options={{ headerShown: false, title: "Menu" }}
      />
    </Stack>
  );
}
