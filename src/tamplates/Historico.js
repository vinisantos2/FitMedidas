import React from "react";
import { View } from "react-native";
import Layout from "../components/Layout.js";
import GestorDados from "../firebase/Firestore.js";
import { medidaClass } from "../firebase/Medidas.ts";
import { useIsFocused } from "@react-navigation/native";
import ItemMedidas from "../components/ItemMedidas.js";



export default function Historico({ navigation }) {

    const [dados, setDados] = React.useState([])
    const gestor = new GestorDados()
    const isFocused = useIsFocused()

    React.useEffect(() => {

        carregarDados()

    }, [isFocused])

    

    async function carregarDados() {
        const array = await gestor.obterTodos()
        setDados(array)
    }

    return (
        <Layout>

            <View style={{alignItems: "center"}}>
                {dados.map((value) => {

                    const medida = medidaClass(value)

                    return (
                        <ItemMedidas key={medida.AT_ID} medida={medida} navigation={navigation} />
                    )
                })}
            </View>

        </Layout>

    )

}