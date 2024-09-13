

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TELA_CADASTRO, TELA_LOGIN } from '../constants/Rotas';
import TelaLogin from '../tamplates/Login';
import TelaCadastro from '../tamplates/Cadastro';

const Stack = createNativeStackNavigator();
export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName={TELA_LOGIN}>
            <Stack.Screen name={TELA_LOGIN} component={TelaLogin} />
            <Stack.Screen name={TELA_CADASTRO} component={TelaCadastro} />
        </Stack.Navigator>
    )
}