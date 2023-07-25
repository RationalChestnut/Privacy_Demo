import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticatedNavigator } from "./auth.navigator";

export const Navigation = () => {
  // Here you would usually check the auth context on whether the user is authenticated or not. You would then return a different navigator accordingly
  return (
    <NavigationContainer>
      <AuthenticatedNavigator />
    </NavigationContainer>
  );
};
