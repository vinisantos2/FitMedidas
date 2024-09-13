import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BODY, BRANCO, CORPRIMARY, LEGENDA, VERMELHO } from './src/constants/Cores';
import React from 'react';
import {
  TELA_CADASTRO, TELA_COMPARACAO,
  TELA_EDITAR_DESEMPENHO,
  TELA_HISTORICO, TELA_HOME, TELA_LOGIN,
  TELA_NOVO_DESEMPENHO
} from './src/constants/Rotas';
import Home from './src/tamplates/Home';
import TelaCadastro from './src/tamplates/Cadastro';

import TelaLogin from './src/tamplates/Login';

import { auth } from './src/firebase/firebaseConfig';
import ButtonLogout from './src/components/ButtonLogout';
import { onAuthStateChanged } from 'firebase/auth';
import MenuComponent from './src/components/Menu';
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
    <NavigationContainer theme={{ colors: { card: CORPRIMARY, border: CORPRIMARY, text: BRANCO, notification: BRANCO, background: BODY, primary: BRANCO } }}>

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