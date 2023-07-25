import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
  <GestureHandlerRootView>
    <SafeAreaProvider style = {{flex: 1}}></SafeAreaProvider>
  </GestureHandlerRootView>
  );
}