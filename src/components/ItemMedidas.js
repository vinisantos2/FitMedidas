import { StyleSheet, TouchableOpacity, View } from "react-native";
import TextView from "./TextView";
import { Medida } from "../firebase/Medidas";
import { TELA_EDITAR_DESEMPENHO, } from "../constants/Rotas";

export default function ItemMedidas({ medida = new Medida, navigation }) {


    return (
        <TouchableOpacity style={Styles.view} onPress={() => navigation.navigate(TELA_EDITAR_DESEMPENHO, { medida: medida })}  >
            <TextView value={medida.AT_DATA} fontSize={30} />
        </TouchableOpacity>)
}

const Styles = StyleSheet.create({

    view: {
        marginTop: 5,
        borderWidth: 1,
        width: "98%",
        padding: 10,
        elevation: 5,
        backgroundColor: "#3c3c3c",
        justifyContent: "center",
        alignItems: "center"
    }
})