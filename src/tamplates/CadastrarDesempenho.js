import React from "react";
import { View } from "react-native";
import Layout from "../components/Layout";
import TextView from "../components/TextView";
import ButtonView from "../components/ButtonView";
import InputTextView from "../components/InputTextView";
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
import { AT_ID, TABELA_DESEMPENHO, TABELA_USERS } from "../constants/constantsFirebase";
import Carregando from "../components/Carregando";
import MaskInput, { Masks } from "react-native-mask-input";
import ItemViewMedida from "../components/ItemViewMedida";

import { getPassword } from "../utils/Ultils";
import { useIsFocused } from "@react-navigation/native";
import MessageErro from "../components/MessageErro";
import { auth } from "../firebase/firebaseConfig";
import { BODY, LEGENDA } from "../constants/Cores";
import ModallApp from "../components/Modal";
import { Usuario, usuarioClass } from "../firebase/Usuario";
export default function CadastrarDesempenho({ route, navigation }) {

    const { medida } = route.params ? route.params : "";

    const [usuario, setUsuario] = React.useState(undefined)

    const [data, setData] = React.useState(medida ? medida.AT_DATA : "")

    const [peso, setPeso] = React.useState(medida ? medida.AT_PESO : "")
    const [altura, setAltura] = React.useState("")
    const [nome, setNome] = React.useState("")
    //lado esquerdo
    const [punhoE, setPunhoE] = React.useState(medida ? medida.AT_PUNHO_E : "")
    const [pernaE, setPernaE] = React.useState(medida ? medida.AT_ANTEBRACO_E : "")
    const [antebracoE, setAntebracoE] = React.useState(medida ? medida.AT_PERNA_E : "")
    const [coxaE, setCoxaE] = React.useState(medida ? medida.AT_COXA_PROXIMAL_E : "")
    const [bracoContraidoE, setBracoCOntraidoE] = React.useState(medida ? medida.AT_BRACO_CONTRAIDO_E : "")
    const [bracoRelaxadoE, setBracoRelaxadoE] = React.useState(medida ? medida.AT_BRACO_RELAXADO_E : "")

    //lado direito

    const [punhoD, setPunhoD] = React.useState(medida ? medida.AT_PUNHO_D : "")
    const [pernaD, setPernaD] = React.useState(medida ? medida.AT_ANTEBRACO_D : "")
    const [antebracoD, setAntebracoD] = React.useState(medida ? medida.AT_PERNA_D : "")
    const [coxaD, setCoxaD] = React.useState(medida ? medida.AT_COXA_PROXIMAL_D : "")
    const [bracoContraidoD, setBracoCOntraidoD] = React.useState(medida ? medida.AT_BRACO_CONTRAIDO_D : "")
    const [bracoRelaxadoD, setBracoRelaxadoD] = React.useState(medida ? medida.AT_BRACO_RELAXADO_D : "")
    //centro
    const [pescoso, setPescoco] = React.useState("")
    const [ombro, setOmbro] = React.useState(medida ? medida.AT_OMBRO : "")
    const [peitoral, setPeitoral] = React.useState(medida ? medida.AT_PEITORAL : "")
    const [abdomem, setAbdomem] = React.useState(medida ? medida.AT_ABDOMEM : "")
    const [cintura, setCintura] = React.useState(medida ? medida.AT_CINTURA : "")
    const [quadril, setQuadril] = React.useState(medida ? medida.AT_QUADRIL : "")

    const [msgErro, setMsgErro] = React.useState("")
    const [atualizado, setAtualizado] = React.useState(true)
    const [carregando, setCarregando] = React.useState(false)
    const [erro, setErro] = React.useState(false)
    const gestor = new GestorDados()

    const isFocused = useIsFocused()
    React.useEffect(() => {
        setMsgErro("")
        setErro(false)
        buscar()
        buscarDadosUsuario()
    }, [isFocused])

    function buscar() {
        gestor.buscar(TABELA_USERS, AT_ID, auth.currentUser.uid)
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
        setErro(false)
        if (medida) {
            setAtualizado(false)
        }
        console.log("Chegoy aqui")
    }

    function verificaData() {
        setCarregando(true)
        if (data === "") {
            setMsgErro("Campo data não pode estar vazio")
            setCarregando(false)
            setErro(true)
            return false
        } else if (data.length < 8) {
            setMsgErro("Valor invalido no campo data")
            setCarregando(false)
            setErro(true)
            return false
        }
        return true
    }

    async function castrarDesempenho() {
        setCarregando(true)
        if (!verificaData()) {
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
            cintura,
            quadril,
            peso
        )
        const docData = medida.toMap()
        await gestor.adicionar(TABELA_DESEMPENHO, docData);
        limpar()

    }

    async function atualizar(id) {

        if (!verificaData()) {
            return
        }

        const medida = new Medida(
            id,
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
            cintura,
            quadril,
            peso
        )
        const docData = medida.toMap()
        await gestor.update(id, TABELA_DESEMPENHO, docData);
        limpar()
    }


    async function buscarDadosUsuario() {
        console.log("Passou aqui")
        let data = await gestor.buscar(TABELA_USERS, AT_ID, auth.currentUser.uid,)
        const u = usuarioClass(data)

        setUsuario(u)
        setAltura(u.AT_ALTURA)
        setNome(u.AT_NOME)
        setCarregando(false)
    }

    return (
        <Layout refreshing={false} onRefresh={false} >

            {erro ? (<MessageErro msgErro={msgErro} />) : ""}
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

            {carregando ? (<Carregando />) : ""}
            <View style={STYLES.container}>

                <View style={STYLES.viewLeft}>
                    <View style={[STYLES.viewItemLegenda,]}>
                        <TextView value="Lado Esquerdo" />
                    </View>
                    {/* Lado esquerdo */}
                    <ItemViewMedida value={VIEW_BRACOCONTRAIDO}
                        render={(<InputTextView value={bracoContraidoE}
                            disable={atualizado} onChangeText={setBracoCOntraidoE} />)} />

                    <ItemViewMedida value={VIEW_BRACORELAXADO}
                        render={(<InputTextView
                            disable={atualizado}
                            value={bracoRelaxadoE}
                            onChangeText={setBracoRelaxadoE} />)} />

                    <ItemViewMedida value={VIEW_ANTEBRACO}
                        render={(<InputTextView disable={atualizado}
                            value={antebracoE}
                            onChangeText={setAntebracoE} />)} />

                    <ItemViewMedida value={VIEW_PUNHO}
                        render={(<InputTextView value={punhoE} disable={atualizado} onChangeText={setPunhoE} />)} />

                    <ItemViewMedida value={VIEW_COXAPROXIMAL}
                        render={(<InputTextView value={coxaE}
                            disable={atualizado}
                            onChangeText={setCoxaE} />)} />

                    <ItemViewMedida value={VIEW_PERNA}
                        render={(<InputTextView value={pernaE}
                            disable={atualizado}
                            onChangeText={setPernaE} />)} />


                </View>
                <View style={STYLES.centroVIew}>
                    <View style={STYLES.viewItemLegenda}>
                        <View style={[STYLES.viewLegenda]}>
                            <TextView value={VIEW_DATA} fontSize={15} />
                        </View>
                        <MaskInput keyboardType="number-pad"
                            style={STYLES.dataInput} onChangeText={setData}
                            value={data}
                            placeholder="Data"
                            mask={Masks.DATE_DDMMYYYY} />
                    </View>
                    {/* Centro */}

                    <ItemViewMedida value={"Peso"} render={(<InputTextView value={peso}
                        disable={atualizado} onChangeText={setPeso} />)} />

                    <ItemViewMedida value={VIEW_OMBRO}
                        render={(<InputTextView value={ombro}
                            disable={atualizado}
                            onChangeText={setOmbro} />)} />
                    <ItemViewMedida value={VIEW_PEITORAL}
                        render={(<InputTextView value={peitoral}
                            disable={atualizado}
                            onChangeText={setPeitoral} />)} />
                    <ItemViewMedida value={VIEW_ABDOMEN}
                        render={(<InputTextView value={abdomem}
                            disable={atualizado}
                            onChangeText={setAbdomem} />)} />
                    <ItemViewMedida value={VIEW_CINTURA}
                        render={(<InputTextView value={cintura}
                            disable={atualizado}
                            onChangeText={setCintura} />)} />
                    <ItemViewMedida value={VIEW_QUADRIL}
                        render={(<InputTextView value={quadril}
                            disable={atualizado}
                            onChangeText={setQuadril} />)} />
                </View>

                <View style={STYLES.viewRight}>
                    <View style={[STYLES.viewItemLegenda]}>
                        <TextView value="Lado Direito" />
                    </View>

                    {/* Lado direito */}

                    <ItemViewMedida value={VIEW_BRACOCONTRAIDO}
                        render={(<InputTextView value={bracoContraidoD}
                            disable={atualizado}
                            onChangeText={setBracoCOntraidoD} />)} />

                    <ItemViewMedida value={VIEW_BRACORELAXADO}
                        render={(<InputTextView value={bracoRelaxadoD}
                            disable={atualizado}
                            onChangeText={setBracoRelaxadoD} />)} />

                    <ItemViewMedida value={VIEW_ANTEBRACO}
                        render={(<InputTextView value={antebracoD}
                            disable={atualizado}
                            onChangeText={setAntebracoD} />)} />

                    <ItemViewMedida value={VIEW_PUNHO}
                        render={(<InputTextView value={punhoD}
                            disable={atualizado}
                            onChangeText={setPunhoD} />)} />

                    <ItemViewMedida value={VIEW_COXAPROXIMAL}
                        render={(<InputTextView value={coxaD}
                            disable={atualizado}
                            onChangeText={setCoxaD} />)} />

                    <ItemViewMedida value={VIEW_PERNA}
                        render={(<InputTextView value={pernaD}
                            disable={atualizado}
                            onChangeText={setPernaD} />)} />


                </View>

            </View>



            <ButtonView disabled={!atualizado} onPress={() => medida ? atualizar(medida.AT_ID) : castrarDesempenho()} value={medida ? "Atualizar" : "Salvar"} />

        </Layout>
    )

}
