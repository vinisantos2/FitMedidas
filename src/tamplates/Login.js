import React from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

import TextView from "../components/TextView";
import { app, auth } from "../firebase/firebaseConfig";

import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,


} from "firebase/auth";
import { useIsFocused } from "@react-navigation/native";
import { VERMELHO } from "../constants/Cores";
import Layout2 from "../components/Layout2";
import { ModallCarregando } from "../components/ModalCarregando";
import { TELA_CADASTRO, TELA_ESQUECI_SENHA, TELA_LOGIN } from "../constants/Rotas";
import InputSenha, { Input } from "../components/Inputs";
let verificou = false
export default function TelaLogin({ navigation }) {
    const [email, setEmail] = React.useState("")
    const [senha, setSenha] = React.useState("")
    const [viewSenha, setViewSenha] = React.useState(true)
    const [msgErro, setMsgErro] = React.useState("")
    const [erro, setErro] = React.useState(false)
    const [carregando, setCarregando] = React.useState(true)
    const isFocused = useIsFocused()

    React.useEffect(() => {
        estaLogado()
    }, [isFocused])

    function limpar(){
        setEmail("")
        setSenha("")
    }

    function estaLogado() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                verificou = false
                setCarregando(true)
                navigation.navigate("home2")
                limpar()
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                // ...
            } else {
                console.log("não logado: ")
                if (verificou) {

                } else {
                    navigation.navigate(TELA_LOGIN)
                    verificou = true
                }

                setCarregando(false)
                // User is signed out
                // ...
            }
        });
    }

    // async function logarComGoogle() {
    // const provider = new GoogleAuthProvider(app); //google
    //     signInWithPopup(auth, provider )
    //     await (auth, provider)
    //         .then((result) => {
    //             // This gives you a Google Access Token. You can use it to access the Google API.
    //             const credential = GoogleAuthProvider.credentialFromResult(result);
    //             const token = credential.accessToken;
    //             // The signed-in user info.
    //             const user = result.user;
    //             // IdP data available using getAdditionalUserInfo(result)
    //             // ...
    //         }).catch((error) => {
    //             // Handle Errors here.
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             // The email of the user's account used.
    //             const email = error.customData.email;
    //             // The AuthCredential type that was used.
    //             const credential = GoogleAuthProvider.credentialFromError(error);
    //             // ...
    //         });

    // }


    function logarEmailSenha() {
        setCarregando(true)
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setMsgErro("")
                // ...
            })
            .catch((error) => {
                // setCarregando(false)
                setCarregando(false)
                setMsgErro("Login ou senha incorreto")
                setErro(true)
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Erro: " + errorMessage)
                // ..
            });
    }


    return (

        <Layout2>
            {carregando ? (<ModallCarregando />) : ""}

            <View style={styles.viewForm}>
                <Input placeholder={"E-mail"} value={email} setValue={setEmail} keyboardType="email-address" />
                <InputSenha placeholder={"Senha"} setValue={setSenha} value={senha} setView={setViewSenha} view={viewSenha} />

            </View>
            {/* 
            <View style={styles.viewBotoes} >
                <TouchableOpacity onPress={() => logarComGoogle()}>
                    <Image style={styles.imagemIcon} source={require("../../assets/google.webp")} />
                </TouchableOpacity>
            </View> */}

            <View style={styles.viewBotao}>
                <TouchableOpacity onPress={() => logarEmailSenha()} style={styles.botao}>
                    <TextView value="Logar" fontSize={25} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate(TELA_CADASTRO)} style={styles.botao}>
                    <TextView fontSize={25} value="Cadastre-se" />
                </TouchableOpacity>

            </View>

            <View style={styles.viewLink}>

                <TouchableOpacity onPress={() => navigation.navigate(TELA_ESQUECI_SENHA)}>
                    <TextView value={"Esqueci minha senha"} />
                </TouchableOpacity>
            </View>

            {erro ? <MenssagemErro msgErro={msgErro} /> : null}

        </Layout2>

    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,

    },
    viewBotoes: {
        marginTop: "10%",
        justifyContent: "space-around",
        flexDirection: "row",

    },
    viewForm: {
        marginTop: "10%",
        alignItems: "center",
        width: "90%"


    },

    viewBotao: {
        marginTop: "10%",
        alignItems: "center",
        width: "90%"
    },

    viewLink: {
        marginTop: "5%",
        flexDirection: "row",
        justifyContent: "center"


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
    textBotao: {
        fontSize: 25,
        color: "#fff"
    },
    textLink: {
        color: "#000",
        borderBottomColor: "#00A3F7",
        fontSize: 15,

    },

    imagemIcon: {
        width: 50,
        height: 50,
        elevation: 20,
        borderRadius: 100
    }
})
