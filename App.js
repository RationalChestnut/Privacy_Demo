import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Navigation } from "./src/infra/navigation";
import { AuthenticationContextProvider } from "./src/infra/auth/Authentication.context";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: "#ffffff" }}
          edges={["top", "left", "right"]}
        >
          <AuthenticationContextProvider>
            <Navigation />
            <StatusBar />
          </AuthenticationContextProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
