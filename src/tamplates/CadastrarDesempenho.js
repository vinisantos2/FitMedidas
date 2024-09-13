import React from "react";
import { View, StyleSheet, Image, ImageBackground, TextInput } from "react-native";
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
import GestorDados from "../firebase/Firestore.js";
import { Medida } from "../firebase/Medidas";
import { TABELA_DESEMPENHO } from "../constants/constantsFirebase";
import Carregando from "../components/Carregando";
import MaskInput, { Masks } from "react-native-mask-input";
import ItemViewMedida from "../components/ItemViewMedida";
import { DARK, VERMELHO } from "../constants/Cores";
export default function CadastrarDesempenho() {

    const [data, setData] = React.useState("")
    //lado esquerdo
    const [punhoE, setPunhoE] = React.useState("")
    const [pernaE, setPernaE] = React.useState("")
    const [antebracoE, setAntebracoE] = React.useState("")
    const [coxaE, setCoxaE] = React.useState("")
    const [bracoContraidoE, setBracoCOntraidoE] = React.useState("")
    const [bracoRelaxadoE, setBracoRelaxadoE] = React.useState("")

    //lado direito

    const [punhoD, setPunhoD] = React.useState("")
    const [pernaD, setPernaD] = React.useState("")
    const [antebracoD, setAntebracoD] = React.useState("")
    const [coxaD, setCoxaD] = React.useState("")
    const [bracoContraidoD, setBracoCOntraidoD] = React.useState("")
    const [bracoRelaxadoD, setBracoRelaxadoD] = React.useState("")
    //centro
    const [pescoso, setPescoco] = React.useState("")
    const [ombro, setOmbro] = React.useState("")
    const [peitoral, setPeitoral] = React.useState("")
    const [abdomem, setAbdomem] = React.useState("")
    const [cintura, setCintura] = React.useState("")
    const [quadril, setQuadril] = React.useState("")

    const [msgErro, setMsgErro] = React.useState("")
    const [carregando, setCarregando] = React.useState(false)
    const gestor = new GestorDados()


    function getPassword() {
        var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
        var passwordLength = 16;
        var password = "";

        for (var i = 0; i < passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
        return password;
    }

    function limpar() {
        setPunhoE("")
        setData("")
        setPernaE("")
        setAntebracoE("")
        setCoxaE("")
        setBracoCOntraidoE("")
        setBracoRelaxadoE("")
        setPunhoD("")
        setPernaD("")
        setAntebracoD("")
        setCoxaD("")
        setBracoCOntraidoD("")
        setBracoRelaxadoD("")
        setOmbro("")
        setPeitoral("")
        setAbdomem("")
        setCintura("")
        setQuadril("")
        setMsgErro("")
        setPescoco("")
        setCarregando(false)
        console.log("Chegoy aqui")
    }

    async function castrarDesempenho() {
        setCarregando(true)
        if (data === "") {
            setMsgErro("Campo data não pode estar vazio")
            setCarregando(false)
            return
        } else if (data.length < 8) {
            setMsgErro("Valor invalido no campo data")
            setCarregando(false)
            return
        }
        const medida = new Medida(
            getPassword(),
            data,
            punhoE,
            antebracoE,
            pernaE,
            coxaE,
            bracoContraidoE,
            bracoRelaxadoE,
            punhoD, antebracoD,
            pernaD,
            coxaD,
            bracoContraidoD,
            bracoRelaxadoD,
            ombro,
            peitoral,
            abdomem,
            cintura, quadril
        )
        const docData = medida.toMap()
        await gestor.adicionar(TABELA_DESEMPENHO, docData);
        limpar()

    }

    return (
        <Layout>
            <View style={{alignItems: "center", backgroundColor: DARK}}>
                <TextView value={msgErro} cor={VERMELHO} />
            </View>

            {carregando ? (<Carregando />) : ""}
            <View style={STYLES.container}>

                <View style={STYLES.viewLeft}>
                    <View style={[STYLES.viewItem, STYLES.viewItemLegenda]}>
                        <TextView style={STYLES.text} value="Lado Esquerdo" />
                    </View>
                    {/* Lado esquerdo */}
                    <ItemViewMedida value={VIEW_BRACOCONTRAIDO}
                        render={(<InputTextView value={bracoContraidoE} onChangeText={setBracoCOntraidoE} />)} />

                    <ItemViewMedida value={VIEW_BRACORELAXADO}
                        render={(<InputTextView value={bracoRelaxadoE} onChangeText={setBracoRelaxadoE} />)} />

                    <ItemViewMedida value={VIEW_ANTEBRACO}
                        render={(<InputTextView value={antebracoE} onChangeText={setAntebracoE} />)} />

                    <ItemViewMedida value={VIEW_PUNHO}
                        render={(<InputTextView value={punhoE} onChangeText={setPunhoE} />)} />

                    <ItemViewMedida value={VIEW_COXAPROXIMAL}
                        render={(<InputTextView value={coxaE} onChangeText={setCoxaE} />)} />

                    <ItemViewMedida value={VIEW_PERNA}
                        render={(<InputTextView value={pernaE} onChangeText={setPernaE} />)} />


                </View>
                <View style={STYLES.centroVIew}>
                    <View style={STYLES.viewItem}>
                        <View style={[STYLES.viewLegenda]}>
                            <TextView value={VIEW_DATA} fontSize={15} />
                        </View>
                        <MaskInput keyboardType="number-pad"
                            style={STYLES.dataInput} onChangeText={setData}
                            value={data} placeholder="Data"
                            mask={Masks.DATE_DDMMYYYY} />
                    </View>
                    {/* Centro */}

                    <ItemViewMedida value={VIEW_PESCOCO}
                        render={(<InputTextView value={pescoso} onChangeText={setPescoco} />)} />
                    <ItemViewMedida value={VIEW_OMBRO}
                        render={(<InputTextView value={ombro} onChangeText={setOmbro} />)} />
                    <ItemViewMedida value={VIEW_PEITORAL}
                        render={(<InputTextView value={peitoral} onChangeText={setPeitoral} />)} />
                    <ItemViewMedida value={VIEW_ABDOMEN}
                        render={(<InputTextView value={abdomem} onChangeText={setAbdomem} />)} />
                    <ItemViewMedida value={VIEW_CINTURA}
                        render={(<InputTextView value={cintura} onChangeText={setCintura} />)} />
                    <ItemViewMedida value={VIEW_QUADRIL}
                        render={(<InputTextView value={quadril} onChangeText={setQuadril} />)} />


                </View>

                <View style={STYLES.viewRight}>
                    <View style={[STYLES.viewItem, STYLES.viewItemLegenda]}>
                        <TextView style={STYLES.text} value="Lado Direito" />
                    </View>

                    {/* Lado direito */}

                    <ItemViewMedida value={VIEW_BRACOCONTRAIDO}
                        render={(<InputTextView value={bracoContraidoD} onChangeText={setBracoCOntraidoD} />)} />

                    <ItemViewMedida value={VIEW_BRACORELAXADO}
                        render={(<InputTextView value={bracoRelaxadoD} onChangeText={setBracoRelaxadoD} />)} />

                    <ItemViewMedida value={VIEW_ANTEBRACO}
                        render={(<InputTextView value={antebracoD} onChangeText={setAntebracoD} />)} />

                    <ItemViewMedida value={VIEW_PUNHO}
                        render={(<InputTextView value={punhoD} onChangeText={setPunhoD} />)} />

                    <ItemViewMedida value={VIEW_COXAPROXIMAL}
                        render={(<InputTextView value={coxaD} onChangeText={setCoxaD} />)} />

                    <ItemViewMedida value={VIEW_PERNA}
                        render={(<InputTextView value={pernaD} onChangeText={setPernaD} />)} />


                </View>

            </View>

            <View style={STYLES.viewBotao}>
                <ButtonView onPress={() => castrarDesempenho()} value={"Salvar"} />
            </View>



        </Layout>
    )

}
