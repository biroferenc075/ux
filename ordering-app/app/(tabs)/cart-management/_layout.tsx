import { Stack } from "expo-router";
import theme from "../../../custom-theme.json";

export default function CartManagementLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="cart"
        options={{ 
          headerShown: false,
          title: "Cart"}}
      />
      <Stack.Screen
        name="qr-code-scan"
        options={{
          headerShown: false,title: "QR"}}
      />
    </Stack>
  );
}
