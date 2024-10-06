import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from "react-native";
import Layout from "../components/Layout.js";
import GestorDados from "../firebase/Firestore";
import { medidaClass } from "../firebase/Medidas";
import { useIsFocused } from "@react-navigation/native";
import ItemMedidas from "../components/ItemMedidas";
import { ordenarDatas } from "../utils/Ultils";
import { SwipeListView } from "react-native-swipe-list-view";
import { BODY, BRANCO, LEGENDA, VERMELHO } from "../constants/Cores.js";
import TextView from "../components/TextView";
import { TELA_CADASTRO, TELA_EDITAR_DESEMPENHO } from "../constants/Rotas.js";
import { createTwoButtonAlert } from "../utils/AlertView.js";
import { TABELA_DESEMPENHO } from "../constants/constantsFirebase.js";


export default function Historico({ navigation }) {

    const [dados, setDados] = React.useState([])
    const gestor = new GestorDados()
    const isFocused = useIsFocused()

    React.useEffect(() => {

        carregarDados()

    }, [isFocused])



    async function carregarDados() {
        let array = await gestor.obterTodos()
        array = ordenarDatas(array)
        setDados(array)
    }

    async function deletar(medida) {
        await gestor.remover(TABELA_DESEMPENHO, medida.AT_ID)
        carregarDados()

    }
    function AlertDeletar(medida) {
        Alert.alert("Apagar medida?", medida.AT_DATA, [
            { text: 'ok', onPress: () => deletar(medida), style: "default" },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: "cancel",
            },
        ])

    }

    return (

        <View style={styles.container}>

            <SwipeListView
                data={dados}
                renderItem={(item, rowMap) => {
                    const medida = medidaClass(item.item)
                    return (
                        <View style={{ alignItems: "center" }}>
                            <ItemMedidas key={medida.AT_ID} medida={medida} navigation={navigation} />
                        </View>
                    )
                }}

                renderHiddenItem={(item, rowMap) => {
                    const medida = medidaClass(item.item)

                    return (
                        <View style={{ alignItems: "center" }}>
                            <View style={styles.rowBack}>
                                <TouchableOpacity style={[styles.button, { backgroundColor: "blue" }]} onPress={() => navigation.navigate(TELA_EDITAR_DESEMPENHO,{medida})} >
                                    <TextView value={"Editar"} fontSize={20} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.button} onPress={() => AlertDeletar(medida)} >
                                    <TextView value={"Deletar"} fontSize={20} />
                                </TouchableOpacity>



                            </View>
                        </View>

                    )
                }
                }

                leftOpenValue={75}
                rightOpenValue={-75}
            >

            </SwipeListView>

        </View>

        // <View style={{ alignItems: "center" }}>
        //     {dados.map((value) => {

        //         const medida = medidaClass(value)

        //         return (
        //             <ItemMedidas key={medida.AT_ID} medida={medida} navigation={navigation} />
        //         )
        //     })}
        // </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BODY,

    },

    rowBack: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
        borderRadius: 10,
        width: "90%",
        padding: 10,
        backgroundColor: LEGENDA,


    },

    button: {
        backgroundColor: VERMELHO,
        height: "100%",
        borderRadius: 10,
        padding: 5,
        justifyContent: "center",
        alignItems: "center"


    }
})