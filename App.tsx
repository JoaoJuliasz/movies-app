import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Main from './src/container/Main/Main';

import 'react-native-gesture-handler';

export default function App() {

  return (
    <NavigationContainer>
        <Main />
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}