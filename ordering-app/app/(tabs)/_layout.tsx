import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { FontAwesome5 } from "@expo/vector-icons";
import theme from "../../custom-theme.json";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>["name"];
  color: string;
}) {
  return <FontAwesome5 size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="order"
        options={{
          title: "Order",
          headerTintColor: theme["color-primary-500"],
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="hamburger" color={theme["color-primary-500"]} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="shopping-basket"
              color={theme["color-primary-500"]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="receipt" color={theme["color-primary-500"]} />
          ),
        }}
      />
      <Tabs.Screen
        name="suggestion"
        options={{
          title: "Suggestion",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="lightbulb" color={theme["color-primary-500"]} />
          ),
        }}
      />
    </Tabs>
  );
}
