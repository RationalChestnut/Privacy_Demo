import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FontAwesome } from "@expo/vector-icons";
import { Home } from "../../pages/Home/Home.page";

const Stack = createNativeStackNavigator();

const TAB_ICON = {
  Generate: "edit",
  Challenge: "trophy",
  Profile: "user",
  Community: "comments",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <FontAwesome name={iconName} color={color} size={size} />
    ),
    tabBarActiveTintColor: "#4597E0",
    tabBarInactiveTintColor: "#AEAEAE",
    headerShown: false,
    tabBarStyle: {
      backgroundColor: "#F7F6F7",
    },
  };
};

export const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={createScreenOptions}>
      <Stack.Screen name="Generate" component={Home} />
    </Stack.Navigator>
  );
};
