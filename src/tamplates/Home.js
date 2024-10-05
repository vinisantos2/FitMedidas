import React from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import Layout from "../components/Layout.js";
import TextView from "../components/TextView";
import {
    VIEW_ABDOMEN,
    VIEW_ANTEBRACO,
    VIEW_BRACOCONTRAIDO,
    VIEW_BRACORELAXADO,
    VIEW_CINTURA, VIEW_COXAPROXIMAL, VIEW_OMBRO,
    VIEW_PEITORAL, VIEW_PERNA, VIEW_PUNHO,
    VIEW_QUADRIL
} from "../constants/Nomes.js";
import { STYLES } from "../constants/Styles.js";

import GestorDados from "../firebase/Firestore.js";
import { useIsFocused } from "@react-navigation/native";
import ItemViewMedida from "../components/ItemViewMedida";
import Carregando from "../components/Carregando.js";
import { ordenarDatas } from "../utils/Ultils.js";
import { BODY } from "../constants/Cores.js";
import {  usuarioClass } from "../firebase/Usuario";
import ModallApp from "../components/Modal";
import { AT_ALTURA, AT_ID, AT_NOME, TABELA_USERS } from "../constants/constantsFirebase.js";
import { Medida } from "../firebase/Medidas";
import { auth } from "../firebase/firebaseConfig.js";
import { Ionicons } from "@expo/vector-icons";
import { createTwoButtonAlert } from "../utils/AlertView.js";
import { IMC, RQC } from "../constants/Texto.js";
export default function Home({ navigation }) {
    const [medida, setMedida] = React.useState(new Medida)
    const [usuario, setUsuario] = React.useState(undefined)
    const [carregando, setCarregando] = React.useState(true)
    const [altura, setAltura] = React.useState("")
    const [imc, setImc] = React.useState("")
    const [refreshing, setRefreshing] = React.useState(false);
    const [nome, setNome] = React.useState("")

    const gestor = new GestorDados()
    const isFocused = useIsFocused()
    React.useEffect(() => {
        buscar()
    }, [isFocused])



    async function buscar() {

        let array = await gestor.obterTodos()
        array = ordenarDatas(array)
        const medida = array[0]

        if (!medida) {
            buscarDadosUsuario()
            return
        }
        setMedida(medida)
        buscarDadosUsuario(medida)

    }
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await buscar()
        setRefreshing(false)
    }, []);

    async function buscarDadosUsuario(medida) {
        let data = await gestor.buscar(TABELA_USERS, AT_ID, auth.currentUser.uid)
        const usuario = usuarioClass(data)
        setUsuario(usuario)
        setAltura(usuario.AT_ALTURA)
        setNome(usuario.AT_NOME)
        calculImc(usuario, medida)
    }

    function calculImc(usuario, medida) {
        if (!medida) {
            setCarregando(false)
            return
        }

        let altura1 = parseFloat(usuario.AT_ALTURA);
        let peso1 = parseFloat(medida.AT_PESO);
        let imc1 = peso1 / (altura1 * altura1);
        setCarregando(false)
        setImc((imc1).toFixed(2));
        setCarregando(false)
    }



    return (
        <Layout refreshing={refreshing} onRefresh={onRefresh}>

            {carregando ? (<Carregando />) : ""}

            <View style={STYLES.legenda} >
                <TextView value={"Dados pessoais"} />
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-around",
                backgroundColor: BODY,
                alignItems: "center"
            }} >

                <View style={[{ flexDirection: "row", }]} >
                    <TextView value={"Nome: "} />
                    <TextView value={nome} />
                </View>

                <View style={[{ flexDirection: "row", }]}>
                    <TextView value={"Altura: "} />
                    <TextView value={altura} />
                </View>
                {usuario ? (<ModallApp usuario={usuario} closeModal={() => buscarDadosUsuario()} />) : ""}

            </View>


            <View style={STYLES.legenda} >
                <TextView fontSize={20} value={"Data da ultima medida: "} />
                <TextView fontSize={20} value={medida.AT_DATA} />
            </View>



            <View style={STYLES.container}>

                <View style={STYLES.viewLeft}>
                    <View style={[STYLES.viewItemLegenda]}>
                        <TextView style={STYLES.text} value="Lado Esquerdo" />
                    </View>
                    {/* Lado esquerdo */}
                    <ItemViewMedida value={VIEW_BRACOCONTRAIDO}
                        render={(<TextView value={medida.AT_BRACO_CONTRAIDO_E} />)} />

                    <ItemViewMedida value={VIEW_BRACORELAXADO}
                        render={(<TextView value={medida.AT_BRACO_RELAXADO_E} />)} />

                    <ItemViewMedida value={VIEW_ANTEBRACO}
                        render={(<TextView value={medida.AT_ANTEBRACO_E} />)} />

                    <ItemViewMedida value={VIEW_PUNHO}
                        render={(<TextView value={medida.AT_PUNHO_E} />)} />

                    <ItemViewMedida value={VIEW_COXAPROXIMAL}
                        render={(<TextView value={medida.AT_COXA_PROXIMAL_E} />)} />

                    <ItemViewMedida value={VIEW_PERNA}
                        render={(<TextView value={medida.AT_PERNA_E} />)} />


                </View>
                <View style={STYLES.centroVIew}>

                    <View style={[STYLES.viewItemLegenda, STYLES.viewItemLegenda]}>
                        <TextView style={STYLES.text} value="Centro" />
                    </View>


                    {/* Centro */}
                    <ItemViewMedida value={"Peso"}
                        render={(<TextView value={medida.AT_PESO} />)} />
                    <ItemViewMedida value={VIEW_OMBRO}
                        render={(<TextView value={medida.AT_OMBRO} />)} />
                    <ItemViewMedida value={VIEW_PEITORAL}
                        render={(<TextView value={medida.AT_PEITORAL} />)} />
                    <ItemViewMedida value={VIEW_ABDOMEN}
                        render={(<TextView value={medida.AT_ABDOMEM} />)} />
                    <ItemViewMedida value={VIEW_CINTURA}
                        render={(<TextView value={medida.AT_CINTURA} />)} />
                    <ItemViewMedida value={VIEW_QUADRIL}
                        render={(<TextView value={medida.AT_QUADRIL} />)} />


                </View>

                <View style={STYLES.viewRight}>
                    <View style={[STYLES.viewItemLegenda, STYLES.viewItemLegenda]}>
                        <TextView style={STYLES.text} value="Lado Direito" />
                    </View>

                    {/* Lado direito */}

                    <ItemViewMedida value={VIEW_BRACOCONTRAIDO}
                        render={(<TextView value={medida.AT_BRACO_CONTRAIDO_D} />)} />

                    <ItemViewMedida value={VIEW_BRACORELAXADO}
                        render={(<TextView value={medida.AT_BRACO_RELAXADO_D} />)} />

                    <ItemViewMedida value={VIEW_ANTEBRACO}
                        render={(<TextView value={medida.AT_ANTEBRACO_D} />)} />

                    <ItemViewMedida value={VIEW_PUNHO}
                        render={(<TextView value={medida.AT_PUNHO_D} />)} />

                    <ItemViewMedida value={VIEW_COXAPROXIMAL}
                        render={(<TextView value={medida.AT_COXA_PROXIMAL_D} />)} />

                    <ItemViewMedida value={VIEW_PERNA}
                        render={(<TextView value={medida.AT_PERNA_D} />)} />

                </View>
            </View>


            <View style={STYLES.legenda} >
                <TextView value={"Calculos"} />
            </View>


            <View style={[styles.viewItemCalculo]} >
                <View style={STYLES.legenda}>
                    <TextView value={"IMC:"} />
                </View>
                <View style={styles.calculo}>
                    <TextView value={imc} />
                </View>
                <TouchableOpacity onPress={() => createTwoButtonAlert("IMC", IMC)} >
                    <Ionicons name="warning-outline" size={30} />
                </TouchableOpacity>
            </View>
            <View style={styles.viewItemCalculo} >
                <View style={STYLES.legenda}>
                    <TextView value={"RCQ:"} />
                </View>
                <View style={styles.calculo}>
                    <TextView value={(medida.AT_CINTURA / medida.AT_QUADRIL).toFixed(2)} />
                </View>

                <TouchableOpacity onPress={() => createTwoButtonAlert("RQC", RQC)} >
                    <Ionicons name="warning-outline" size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("s")} >
                    <Ionicons name="warning-outline" size={30} />
                </TouchableOpacity>
            </View>

        </Layout>
    )


}

const styles = StyleSheet.create({

    viewItemCalculo: {
        flexDirection: "row",
        width: "50%",
        backgroundColor: BODY,
        width: "100%",
        justifyContent: "space-between",
        borderWidth: .5,
    },

    calculo: {
        marginLeft: 5
    },
    viewCalculos: {
        flexDirection: "row",
        backgroundColor: BODY,
        justifyContent: "space-between"

    }

})
