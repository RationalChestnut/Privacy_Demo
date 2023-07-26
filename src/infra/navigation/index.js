import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticatedNavigator } from "./auth.navigator";
import { AuthenticationContext } from "../auth/Authentication.context";
import { UnAuthNavigator } from "./unauth.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  // Here you would usually check the auth context on whether the user is authenticated or not. You would then return a different navigator accordingly
  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthenticatedNavigator /> : <UnAuthNavigator />}
    </NavigationContainer>
  );
};
