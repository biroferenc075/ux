import { Stack } from "expo-router";
import theme from "../../../custom-theme.json";

export default function HistoryLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="order-history"
        options={{ 
          headerShown: true, 
          title: "Order History",
          headerTintColor: "#FFF",
          headerStyle: {
            backgroundColor: theme["color-primary-500"],
          }, }}
      />
      <Stack.Screen
        name="order-details"
        options={{
          headerShown: true,
          title: "Order Details",
          headerTintColor: "#FFF",
          headerStyle: {
            backgroundColor: theme["color-primary-500"],
          },
        }}
      />
    </Stack>
  );
}
