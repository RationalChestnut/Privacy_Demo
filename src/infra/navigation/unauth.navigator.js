import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth } from "../../pages/Auth/Auth.page";
const Stack = createNativeStackNavigator();

export const UnAuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      testID="unauthenticated"
    >
      <Stack.Screen name="Home" component={Auth} />
    </Stack.Navigator>
  );
};
