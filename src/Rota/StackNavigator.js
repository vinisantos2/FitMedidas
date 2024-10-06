import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TELA_CADASTRO, TELA_COMPARACAO, TELA_EDITAR_DESEMPENHO, TELA_ESQUECI_SENHA, TELA_HISTORICO, TELA_HOME, TELA_LOGIN, TELA_NOVO_DESEMPENHO } from '../constants/Rotas';
import TelaLogin from '../tamplates/Login';
import TelaCadastro from '../tamplates/Cadastro';
import CadastrarDesempenho from '../tamplates/CadastrarDesempenho';
import Historico from '../tamplates/Historico';
import TelaEsqueciSenha from '../tamplates/EsqueciSenha';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../tamplates/Home';
import Comparacao from '../tamplates/Comparacao';
import ButtonLogout from '../components/ButtonLogout';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName={TELA_LOGIN}>
            <Stack.Screen name={TELA_LOGIN} component={TelaLogin} />
            <Stack.Screen options={{ headerShown: false }} name={"home2"} component={DrawerNavigator} />
            <Stack.Screen name={TELA_CADASTRO} component={TelaCadastro} />
            <Stack.Screen name={TELA_ESQUECI_SENHA} component={TelaEsqueciSenha} />
            <Stack.Screen name={TELA_EDITAR_DESEMPENHO} component={CadastrarDesempenho} />
        </Stack.Navigator>
    )
}


function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName={TELA_HOME}>
            <Drawer.Screen
                name={TELA_HOME}
                component={Home}
                options={
                    {
                        // headerTitle: (props) => <LogoTitle {...props} />,
                        headerRight: () => (
                            <ButtonLogout />
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


        </Drawer.Navigator>
    )
}

