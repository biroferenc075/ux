import { Stack } from "expo-router";
import theme from "../../../custom-theme.json";

export default function OrderLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="food-menu"
        options={{ headerShown: false, title: "Menu" }}
      />
      <Stack.Screen
        name="details"
        options={{
          headerShown: true,
          title: "Details",
          headerTintColor: theme["color-primary-500"],
        }}
      />
    </Stack>
  );
}
