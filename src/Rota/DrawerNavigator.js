
import CadastrarDesempenho from '../tamplates/CadastrarDesempenho';
import { createDrawerNavigator } from "@react-navigation/drawer";
import ButtonLogout from '../components/ButtonLogout';
import Home from '../tamplates/Home';
import MenuComponent from '../components/Menu';
import {
    TELA_COMPARACAO,
    TELA_EDITAR_DESEMPENHO,
    TELA_HISTORICO, TELA_HOME,
    TELA_NOVO_DESEMPENHO
} from '../constants/Rotas';
import Historico from '../tamplates/Historico';
import Comparacao from '../tamplates/Comparacao';
import { StackNavigator2, StackNavigator3 } from './StackNavigator';


const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName={TELA_HOME}>
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