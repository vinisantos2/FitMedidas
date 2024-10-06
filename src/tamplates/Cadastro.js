import React from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

import TextView from "../components/TextView";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { TABELA_USERS } from "../constants/constantsFirebase";
import GestorDados from "../firebase/Firestore";
import InputSenha, { Input } from "../components/Inputs";
import MenssagemErro from "../components/MessageErro";
import Layout from "../components/Layout";


export default function TelaCadastro({ navigation }) {
    const [email, setEmail] = React.useState("")
    const [nome, setNome] = React.useState("")
    const [senha, setSenha] = React.useState("")
    const [viewSenha, setViewSenha] = React.useState(true)
    const [senhaC, setSenhaC] = React.useState("")
    const [viewSenhaC, setViewSenhaC] = React.useState(true)
    const [msgErro, setMsgErro] = React.useState("")
    const [erro, setErro] = React.useState(false)
    const gestor = new GestorDados()

    function criarUsuario() {
        if (nome.length < 1) {
            setMsgErro("Campo nome invalido")

            setErro(true)
            return
        } else if (senha.length < 5) {
            setMsgErro("Campo senha tem que ter mais de 5 caracter")
            setErro(true)
            return
        } else if (senha !== senhaC) {
            setMsgErro("Senhas diferentes")
            setErro(true)
            return
        }
        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                castrarUsuario(user.uid)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode + "===" + errorMessage)
                setMsgErro(errorCode)
                // ..
            });
    }

    async function castrarUsuario(uid) {
        const docData = { AT_ID: uid, AT_NOME: nome }
        gestor.adicionarUsuer(TABELA_USERS, docData)
    }
    return (
        <Layout>
            {erro ? <MenssagemErro msgErro={msgErro} /> : null}
            <View style={styles.viewForm}>
                <Input placeholder={"Nome"} value={nome} setValue={setNome} />
                <Input placeholder={"E-mail"} value={email} setValue={setEmail} keyboardType="email-address" />
                <InputSenha placeholder={"Senha"} setValue={setSenha} value={senha} setView={setViewSenha} view={viewSenha} />
                <InputSenha placeholder={"Confirmar senha"} setValue={setSenhaC} value={senhaC} setView={setViewSenhaC} view={viewSenhaC} />
            </View>

            <View style={styles.viewBotoes} >
                <TouchableOpacity>
                    <Image style={styles.imagemIcon} source={require("../../assets/google.webp")} />
                </TouchableOpacity>


            </View>
            <View style={styles.viewBotao}>
                <TouchableOpacity onPress={() => criarUsuario()} style={styles.botao}>
                    <TextView fontSize={25} value="Cadastre-se" />
                </TouchableOpacity>

            </View>

        </Layout>

    )
}

const styles = StyleSheet.create({
    viewBotoes: {
        marginTop: "10%",
        justifyContent: "space-around",
        flexDirection: "row",

    },
    viewForm: {
        marginTop: "10%",
        alignItems: "center",
        width: "90%",
        alignSelf: "center"
    },
    input: {
        width: "100%",
        padding: 10,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        marginTop: 10

    },
    viewBotao: {
        marginTop: "10%",
        alignItems: "center",
    },

    botao: {
        backgroundColor: "blue",
        alignItems: "center",
        width: "90%",
        padding: 10,
        borderRadius: 5,
        elevation: 5,
        marginTop: "5%"


    },



    imagemIcon: {
        width: 50,
        height: 50,
        elevation: 20,
        borderRadius: 100
    }
})
