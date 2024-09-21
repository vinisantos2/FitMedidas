import { StyleSheet, TouchableOpacity, View } from "react-native";
import TextView from "./TextView";
import { Medida } from "../firebase/Medidas";
import { TELA_EDITAR_DESEMPENHO, } from "../constants/Rotas";
import { BODY, LEGENDA } from "../constants/Cores";

export default function ItemMedidas({ medida = new Medida, navigation }) {


    return (

        <View style={Styles.view}    >
            <TextView value={medida.AT_DATA} fontSize={30} />
        </View>

    )
}

const Styles = StyleSheet.create({

    view: {
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 10,
        elevation: 10,
        width: "90%",
        padding: 10,
        backgroundColor: LEGENDA,
        justifyContent: "center",
        alignItems: "center"
    }
})