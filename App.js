
import { NavigationContainer, } from '@react-navigation/native';
import { BRANCO, LEGENDA, } from './src/constants/Cores';
import React from 'react';
import StackNavigator from './src/Rota/StackNavigator';

export default function App() {


  return (
    <NavigationContainer theme={{
      colors: {
        card: LEGENDA,
        border: LEGENDA,
        text: BRANCO, notification: BRANCO,
        background: LEGENDA, primary: BRANCO
      }
    }}>
      <StackNavigator />
    </NavigationContainer>
  );
}
