import React, { useContext, useState } from "react";
import {
  AuthContainer,
  Input,
  LoginText,
  SignupButton,
  SignupButtonText,
  Title,
  LoginTextTouchable,
} from "./Auth.styles";
import { AuthenticationContext } from "../../infra/auth/Authentication.context";

export const Auth = () => {
  const { onLogin, onRegister } = useContext(AuthenticationContext);
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthContainer>
      <Title testID="sign-up-text">{isSignUp ? "Sign Up" : "Log In"}</Title>
      <Input
        label="Email"
        placeholder="Your Email Address"
        value={email}
        onChangeText={setEmail}
        returnKeyType="done"
      />
      <Input
        label="Password"
        placeholder="Something Secure"
        secureTextEntry
        returnKeyType="done"
        value={password}
        onChangeText={setPassword}
      />
      <SignupButton
        onPress={() => {
          if (isSignUp) {
            onRegister(email, password);
            return;
          }
          onLogin(email, password);
        }}
      >
        <SignupButtonText>{isSignUp ? "Sign Up" : "Log In"}</SignupButtonText>
      </SignupButton>
      <LoginTextTouchable
        onPress={() => {
          setIsSignUp(!isSignUp);
        }}
      >
        <LoginText>
          {!isSignUp
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </LoginText>
      </LoginTextTouchable>
    </AuthContainer>
  );
};
