import { StatusBar } from 'expo-status-bar';
import { StyleSheet, } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BRANCO, LEGENDA, } from './src/constants/Cores';
import React from 'react';
import { auth } from './src/firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

import DrawerNavigator from './src/Rota/DrawerNavigator';
import StackNavigator from './src/Rota/StackNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  const [logado, setLogado] = React.useState(false)


  React.useEffect(() => {
    estaLogado()

  })

  function estaLogado() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logado: " + user.email)

        setLogado(true)
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        // ...
      } else {
        console.log("não logado: ")
        setLogado(false)
        // User is signed out
        // ...
      }
    });
  }

  return (


    <NavigationContainer theme={{ colors: { card: LEGENDA, border: LEGENDA, text: BRANCO, notification: BRANCO, background: LEGENDA, primary: BRANCO } }}>
      <StatusBar backgroundColor={LEGENDA} />
      {!logado ?
        <StackNavigator />

        : (

          <DrawerNavigator />
        )

      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});