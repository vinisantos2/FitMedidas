import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TELA_CADASTRO, TELA_EDITAR_DESEMPENHO, TELA_ESQUECI_SENHA, TELA_HISTORICO, TELA_HOME, TELA_LOGIN } from '../constants/Rotas';
import TelaLogin from '../tamplates/Login';
import TelaCadastro from '../tamplates/Cadastro';
import CadastrarDesempenho from '../tamplates/CadastrarDesempenho';
import Historico from '../tamplates/Historico';
import TelaEsqueciSenha from '../tamplates/EsqueciSenha';
const Stack = createNativeStackNavigator();
export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName={TELA_LOGIN}>
            <Stack.Screen name={TELA_LOGIN} component={TelaLogin} />
            <Stack.Screen name={TELA_CADASTRO} component={TelaCadastro} />
            <Stack.Screen name={TELA_ESQUECI_SENHA} component={TelaEsqueciSenha} />
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
export function StackTeste() {
    return (
        <Stack.Navigator  initialRouteName={"Telacadastro"}>
            <Stack.Screen name={"Telacadastro"} component={TelaCadastro} />
            <Stack.Screen name={TELA_EDITAR_DESEMPENHO} component={CadastrarDesempenho} />
        </Stack.Navigator>
    )
}
