

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TELA_CADASTRO, TELA_EDITAR_DESEMPENHO, TELA_HISTORICO, TELA_HOME, TELA_LOGIN } from '../constants/Rotas';
import TelaLogin from '../tamplates/Login';
import TelaCadastro from '../tamplates/Cadastro';
import CadastrarDesempenho from '../tamplates/CadastrarDesempenho';
import Historico from '../tamplates/Historico';
import TelaUsuario from '../tamplates/TelaUsuario';
import Home from '../tamplates/Home';


const Stack = createNativeStackNavigator();
export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName={TELA_LOGIN}>
            <Stack.Screen name={TELA_LOGIN} component={TelaLogin} />
            <Stack.Screen name={TELA_CADASTRO} component={TelaCadastro} />
        </Stack.Navigator>
    )
}

export function StackNavigator2() {
    return (
        <Stack.Navigator screenOptions={{ title: "" }} initialRouteName={"TELA_HISTORICO"}>
            <Stack.Screen name={"TELA_HISTORICO"} component={Historico} />
            <Stack.Screen name={TELA_EDITAR_DESEMPENHO} component={CadastrarDesempenho} />
        </Stack.Navigator>
    )
}
