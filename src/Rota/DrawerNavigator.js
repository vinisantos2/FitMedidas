
import CadastrarDesempenho from '../tamplates/CadastrarDesempenho';
import { createDrawerNavigator } from "@react-navigation/drawer";
import ButtonLogout from '../components/ButtonLogout';
import Home from '../tamplates/Home';
import {
    TELA_COMPARACAO,
    TELA_HISTORICO, TELA_HOME,
    TELA_NOVO_DESEMPENHO
} from '../constants/Rotas';
import Comparacao from '../tamplates/Comparacao';
import StackNavigator, { StackNavigator2, StackNavigator3, StackTeste } from './StackNavigator';


const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName={TELA_HOME}>
            <Drawer.Screen name='s' options={{ title: '' }} component={StackTeste} />
            <Drawer.Screen
                name={TELA_HOME}
                component={Home}
                options={{
                    // headerTitle: (props) => <LogoTitle {...props} />,
                    headerRight: () => (
                        <ButtonLogout />
                    ),
                }} />

            <Drawer.Screen
                name={TELA_HISTORICO}
                component={StackNavigator2}
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