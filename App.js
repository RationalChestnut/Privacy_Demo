import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './src/infra/navigation';

export default function App() {
  return (
  <GestureHandlerRootView style = {{flex: 1}}>
    <SafeAreaProvider style = {{flex: 1}}>
      <Navigation/>
    </SafeAreaProvider>
  </GestureHandlerRootView>
  );
}