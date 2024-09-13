import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BODY, BRANCO, CORPRIMARY, LEGENDA, VERMELHO } from './src/constants/Cores';
import React from 'react';
import {
  TELA_CADASTRO, TELA_COMPARACAO,
  TELA_DESEMPENHO,
  TELA_HISTORICO, TELA_HOME, TELA_LOGIN,
  TELA_NOVO_DESEMPENHO
} from './src/constants/Rotas';
import Home from './src/tamplates/Home';
import TelaCadastro from './src/tamplates/Cadastro';
import Historico from './src/tamplates/Historico';
import Comparacao from './src/tamplates/Comparacao';
import TelaLogin from './src/tamplates/Login';
import CadastrarDesempenho from './src/tamplates/CadastrarDesempenho';
import { auth } from './src/firebase/firebaseConfig';
import ButtonLogout from './src/components/ButtonLogout';
import { onAuthStateChanged } from 'firebase/auth';
import MenuComponent from './src/components/Menu';




const Drawer = createDrawerNavigator();
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
    <NavigationContainer  theme={{ colors: { card: CORPRIMARY, border: CORPRIMARY, text: BRANCO, notification: BRANCO, background: BODY, primary: BRANCO} }}>
      {!logado ? (
        <Stack.Navigator initialRouteName={TELA_LOGIN}>
          <Stack.Screen name={TELA_LOGIN} component={TelaLogin} />
          <Stack.Screen name={TELA_CADASTRO} component={TelaCadastro} />

        </Stack.Navigator>
      ) : (
        <Drawer.Navigator initialRouteName={TELA_HOME}>

          <Drawer.Screen
            name={TELA_HOME}
            component={Home}
            options={{
              // headerTitle: (props) => <LogoTitle {...props} />,
              headerRight: () => (
                <MenuComponent />
              ),
            }} />

          <Drawer.Screen
            name={TELA_HISTORICO}
            component={Historico}
            options={{
              // headerTitle: (props) => <LogoTitle {...props} />,
              headerRight: () => (
                <ButtonLogout />
              ),
            }}
          />
          <Drawer.Screen
            name={TELA_COMPARACAO}
            component={Comparacao}
            options={{
              // headerTitle: (props) => <LogoTitle {...props} />,
              headerRight: () => (
                <ButtonLogout />
              ),
            }}
          />

          <Drawer.Screen
            name={TELA_NOVO_DESEMPENHO}
            component={CadastrarDesempenho}
            options={{
              // headerTitle: (props) => <LogoTitle {...props} />,
              headerRight: () => (
                <ButtonLogout />
              ),
            }}
          />
        </Drawer.Navigator>)}
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
