import react from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#F5F5F5' barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
}
