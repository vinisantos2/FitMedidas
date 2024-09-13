import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TELA_EDITAR_DESEMPENHO } from "../constants/Rotas"
import CadastrarDesempenho from "../tamplates/CadastrarDesempenho"

const Stack = createNativeStackNavigator()

export default function stackRota() {
    return (
        <Stack.Navigator initialRouteName={TELA_EDITAR_DESEMPENHO}>
            <Stack.Screen name={TELA_EDITAR_DESEMPENHO} component={CadastrarDesempenho} />
        </Stack.Navigator>)
}