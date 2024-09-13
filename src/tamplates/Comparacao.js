import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Layout from "../components/Layout.js";
import GestorDados from "../firebase/Firestore.js";
import { Medida, medidaClass } from "../firebase/Medidas.ts";
import { useIsFocused } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';
import ItemComparacao from "../components/ItemComparacao.js";
import Carregando from "../components/Carregando.js";

export default function Comparacao({ navigation }) {

    const [dados, setDados] = React.useState([])
    const [arraySelect1, setArraySelect1] = React.useState([])
    const [arraySelect2, setArraySelect] = React.useState([])
    const [medida1, setMedida1] = React.useState(new Medida)
    const [medida2, setMedida2] = React.useState(new Medida)
    const [valor1, setFitro1] = React.useState("")
    const [valor2, setFitro2] = React.useState("")
    const [carregando, setCarregando] = React.useState(true)
    const gestor = new GestorDados()
    const isFocused = useIsFocused()


    React.useEffect(() => {

        carregarDados()

    }, [isFocused])

    const Dropdown = ({ key, valor, click, placeHolder, array }) => {

        return (
            <RNPickerSelect
                value={valor}
                placeholder={{ label: placeHolder }}
                onValueChange={click}


                // onDonePress={click}
                items={array}
            />
        );

    };

    function filtro1(valor) {
        console.log(valor)
        setFitro1(valor)
        let obj = null
        dados.map((item) => {

            if (item.AT_DATA === valor) {

                obj = item
            }

        })

        if (obj !== null) {
            const medidas = medidaClass(obj)
            setMedida1(medidas)
        }



    }
    function filtro2(valor) {

        setFitro2(valor)
        let obj = null
        dados.map((item) => {

            if (item.AT_DATA === valor) {

                obj = item
            }

        })
        if (obj !== null) {
            const medidas = medidaClass(obj)
            setMedida2(medidas)
        }
    }

    async function carregarDados() {
        const array = await gestor.obterTodos()

        const array2 = []
        // array2.push({ key: "sd", label: "Data", value: ""})
        array.forEach((value, index) => {
            array2.push({ key: value.AT_ID, label: value.AT_DATA, value: value.AT_DATA })
        })

        setDados(array)
        setArraySelect(array2)
        setArraySelect1(array2)

        setCarregando(false)
    }

    return (
        <Layout>
            {carregando ? (<Carregando />) : ""}


            <View style={styles.viewColunas}>
                <View style={styles.viewRow}>
                    <Dropdown placeHolder={"Data"} valor={valor1} click={e => filtro1(e)} array={arraySelect1} />
                    <ItemComparacao medida={medida1} />

                </View>
                <View style={styles.viewRow}>
                    <Dropdown placeHolder={"Data"} valor={valor2} click={e => filtro2(e)} array={arraySelect2} />
                    <ItemComparacao medida={medida2} />
                </View>
            </View>

        </Layout>

    )

}

const styles = StyleSheet.create({
    viewColunas: {
        flexDirection: "row",


    },

    viewRow: {
        backgroundColor: "#fff",
        width: "49.5%",
        borderLeftWidth: 1
    }
})