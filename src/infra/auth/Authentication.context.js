import React, { useContext, useEffect, useState, createContext } from "react";
import auth from "@react-native-firebase/auth";

export const AuthenticationContext = createContext(null);

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const onLogin = async (email, password) => {
    try {
      const u = await auth().signInWithEmailAndPassword(email, password);
      return { type: "Success", message: "User successfully registered" };
    } catch (err) {
      setError(err.toString());
      return { type: "Error", message: err.toString() };
    }
  };

  const onRegister = async (email, password) => {
    console.log("Run", email, password);
    try {
      const u = await auth().createUserWithEmailAndPassword(email, password);
      // Create user in db
      console.log("Run");
      return { type: "Success", message: "User successfully registered" };
    } catch (err) {
      console.log(err);
      return { type: "Error", message: err.toString() };
    }
  };

  const onLogout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log("User signed out!");
      })
      .catch((error) => {
        console.log("Error occurred while signing out:", error);
      });
  };

  function onAuthStateChanged(user) {
    setUser(user?.uid || user);
    if (isLoading) setIsLoading(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        setUser,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
