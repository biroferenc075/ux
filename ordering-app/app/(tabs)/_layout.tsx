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
        tabBarHideOnKeyboard: true
      }}
    >
      <Tabs.Screen
        name="order"
        options={{
          title: "Order",
          tabBarActiveBackgroundColor: theme["color-primary-500"],
          tabBarInactiveBackgroundColor: theme["color-primary-700"],
          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "#FFF",
          //tabBarStyle: { TODO look into this xd
          //  borderTopColor: theme["color-primary-900"],
          //  borderTopWidth: 4
          //},
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="hamburger" color="#FFF" />
          ),
        }}
      />
      <Tabs.Screen
        name="cart-management"
        options={{
          title: "Cart",
          tabBarActiveBackgroundColor: theme["color-primary-500"],
          tabBarInactiveBackgroundColor: theme["color-primary-700"],
          headerStyle: {
            backgroundColor: theme["color-primary-500"]
          },
          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "#FFF",
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="shopping-basket"
              color="#FFF"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarActiveBackgroundColor: theme["color-primary-500"],
          tabBarInactiveBackgroundColor: theme["color-primary-700"],
          headerStyle: {
            backgroundColor: theme["color-primary-500"]
          },
          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "#FFF",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="receipt" color="#FFF"/>
          ),
        }}
      />
      <Tabs.Screen
        name="suggestion"
        options={{
          title: "Suggestion",
          tabBarActiveBackgroundColor: theme["color-primary-500"],
          tabBarInactiveBackgroundColor: theme["color-primary-700"],
          headerStyle: {
            backgroundColor: theme["color-primary-500"]
          },
          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "#FFF",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="lightbulb" color="#FFF" />
          ),
        }}
      />
    </Tabs>
  );
}
