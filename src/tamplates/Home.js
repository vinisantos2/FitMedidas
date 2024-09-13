import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import Layout from "../components/Layout";
import TextView from "../components/TextView.js";
import ButtonView from "../components/ButtonView.js";
import InputTextView from "../components/InputTextView.js";
import {
    VIEW_ABDOMEN,
    VIEW_ANTEBRACO,
    VIEW_BRACOCONTRAIDO,
    VIEW_BRACORELAXADO,
    VIEW_CINTURA, VIEW_COXAPROXIMAL, VIEW_DATA, VIEW_OMBRO,
    VIEW_PEITORAL, VIEW_PERNA, VIEW_PESCOCO, VIEW_PUNHO,
    VIEW_QUADRIL
} from "../constants/Nomes.js";
import { STYLES } from "../constants/Styles.js";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { TELA_CADASTRO, TELA_DESEMPENHO, TELA_LOGIN, TELA_NOVO_DESEMPENHO } from "../constants/Rotas.js";
import { auth } from "../firebase/firebaseConfig";
import GestorDados from "../firebase/Firestore";
import { Medida } from "../firebase/Medidas";
import { useIsFocused } from "@react-navigation/native";
import ItemViewMedida from "../components/ItemViewMedida";
import Carregando from "../components/Carregando";
import Menu from "../components/Menu";
import MenuComponent from "../components/Menu";
import { DARK } from "../constants/Cores";
let setado = false

export default function Home({ navigation }) {
    const [medida, setMedida] = React.useState(new Medida())
    const [carregando, setCarregando] = React.useState(true)
    const isFocused = useIsFocused()
    const gestor = new GestorDados()
    React.useEffect(() => {
        buscar()
    }, [isFocused])

    async function buscar() {

        const array = await gestor.obterTodos()
        const medida = array[0]
        setCarregando(false)
        if (!medida) return;

        setMedida(medida)
    }

    return (
        <Layout>

            {carregando ? (<Carregando />) : ""}


            <View style={STYLES.legenda} >
                <TextView fontSize={20} value={"Data da ultima medida: "} />
                <TextView fontSize={20} value={medida.AT_DATA} />
            </View>

           

            <View style={STYLES.container}>

                <View style={STYLES.viewLeft}>
                    <View style={[STYLES.viewItem, STYLES.viewItemLegenda]}>
                        <TextView style={STYLES.text} value="Lado Esquerdo" />
                    </View>
                    {/* Lado esquerdo */}
                    <ItemViewMedida value={VIEW_BRACOCONTRAIDO}
                        render={(<TextView value={medida.AT_BRACO_CONTRAIDO_E} fontSize={15} />)} />

                    <ItemViewMedida value={VIEW_BRACORELAXADO}
                        render={(<TextView value={medida.AT_BRACO_RELAXADO_E} fontSize={15} />)} />

                    <ItemViewMedida value={VIEW_ANTEBRACO}
                        render={(<TextView value={medida.AT_ANTEBRACO_E} fontSize={15} />)} />

                    <ItemViewMedida value={VIEW_PUNHO}
                        render={(<TextView value={medida.AT_PUNHO_E} fontSize={15} />)} />

                    <ItemViewMedida value={VIEW_COXAPROXIMAL}
                        render={(<TextView value={medida.AT_COXA_PROXIMAL_E} fontSize={15} />)} />

                    <ItemViewMedida value={VIEW_PERNA}
                        render={(<TextView value={medida.AT_PERNA_E} fontSize={15} />)} />


                </View>
                <View style={STYLES.centroVIew}>

                    <View style={[STYLES.viewItem, STYLES.viewItemLegenda]}>
                        <TextView style={STYLES.text} value="Centro" />
                    </View>


                    {/* Centro */}

                    <ItemViewMedida value={VIEW_PESCOCO}
                        render={(<TextView value={"-"} fontSize={15} />)} />
                    <ItemViewMedida value={VIEW_OMBRO}
                        render={(<TextView value={medida.AT_OMBRO} fontSize={15} />)} />
                    <ItemViewMedida value={VIEW_PEITORAL}
                        render={(<TextView value={medida.AT_PEITORAL} fontSize={15} />)} />
                    <ItemViewMedida value={VIEW_ABDOMEN}
                        render={(<TextView value={medida.AT_ABDOMEM} fontSize={15} />)} />
                    <ItemViewMedida value={VIEW_CINTURA}
                        render={(<TextView value={medida.AT_CINTURA} fontSize={15} />)} />
                    <ItemViewMedida value={VIEW_QUADRIL}
                        render={(<TextView value={medida.AT_QUADRIL} fontSize={15} />)} />


                </View>

                <View style={STYLES.viewRight}>
                    <View style={[STYLES.viewItem, STYLES.viewItemLegenda]}>
                        <TextView style={STYLES.text} value="Lado Direito" />
                    </View>

                    {/* Lado direito */}

                    <ItemViewMedida value={VIEW_BRACOCONTRAIDO}
                        render={(<TextView value={medida.AT_BRACO_CONTRAIDO_D} fontSize={15} />)} />

                    <ItemViewMedida value={VIEW_BRACORELAXADO}
                        render={(<TextView value={medida.AT_BRACO_RELAXADO_D} fontSize={15} />)} />

                    <ItemViewMedida value={VIEW_ANTEBRACO}
                        render={(<TextView value={medida.AT_ANTEBRACO_D} fontSize={15} />)} />

                    <ItemViewMedida value={VIEW_PUNHO}
                        render={(<TextView value={medida.AT_PUNHO_D} fontSize={15} />)} />

                    <ItemViewMedida value={VIEW_COXAPROXIMAL}
                        render={(<TextView value={medida.AT_COXA_PROXIMAL_D} fontSize={15} />)} />

                    <ItemViewMedida value={VIEW_PERNA}
                        render={(<TextView value={medida.AT_PERNA_D} fontSize={15} />)} />

                </View>
            </View>
            <View style={STYLES.legenda} >
                <TextView value={"Dados pessoais"} />
            </View>

            <View style={[{ flexDirection: "row", }]} >
                <ItemViewMedida value={"Peso"} render={(<TextView value={"valor"} />)} />
                <ItemViewMedida value={"Altura"} render={(<TextView value={"valor"} />)} />
                <ItemViewMedida value={"IMC"} render={(<TextView value={"valor"} />)} />
            </View>

            {/* <View style={STYLES.viewBotao}>
                <ButtonView onPress={() => navigation.navigate(TELA_NOVO_DESEMPENHO)} value={"Cadastrar Novo"} />
            </View> */}
            <View >
                <ItemViewMedida value={"quadril/cintura"} render={(<TextView value={medida.AT_QUADRIL / medida.AT_CINTURA} />)} />

            </View>

        </Layout>
    )

}
