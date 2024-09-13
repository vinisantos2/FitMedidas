import React from "react";
import { ActivityIndicator, Alert, Button, Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import Layout from "../components/Layout";
import TextView from "../components/TextView";
import { auth } from "../firebase/firebaseConfig";
import {

    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import { TELA_HOME, TELA_LOGIN } from "../constants/Rotas";
import { useIsFocused } from "@react-navigation/native";
import ModallApp from "../components/Modal";
import { VERMELHO } from "../constants/Cores";
import Layout2 from "../components/Layout2";

export default function TelaLogin({ navigation }) {
    const [email, setEmail] = React.useState("")
    const [nome, setNome] = React.useState("")
    const [password, setSenha] = React.useState("")
    const [msgErro, setMsgErro] = React.useState("")
    const [carregando, setCarregando] = React.useState(true)
    const isFocused = useIsFocused()

    React.useEffect(() => {
        estaLogado()
    }, [isFocused])

    function estaLogado() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              

                setCarregando(true)
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user

                // ...
            } else {
                console.log("não logado: ")
                setCarregando(false)
                // User is signed out
                // ...
            }
        });
    }


    function logar() {
        setCarregando(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setMsgErro("")
                // ...
            })
            .catch((error) => {
                // setCarregando(false)
                setCarregando(false)
                setMsgErro("Login ou senha errado")
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Erro: " + errorMessage)
                // ..
            });
    }


    return (

        <Layout2>
            {carregando ? (<ModallApp />) : ""}


            <View style={styles.viewForm}>
                <TextInput placeholder="Login ou e-mail" style={[styles.input, styles.text]} value={email} onChangeText={setEmail} keyboardType="ascii-capable" />
                <TextInput placeholder="Senha" style={[styles.input, styles.text]} passwordRules={password} value={password} onChangeText={setSenha} keyboardType="visible-password" />

            </View>

            <View style={styles.viewBotoes} >
                <TouchableOpacity>
                    <Image style={styles.imagemIcon} source={require("../../assets/google.webp")} />
                </TouchableOpacity>


            </View>

            <View style={styles.viewBotao}>
                <TouchableOpacity onPress={() => logar()} style={styles.botao}>
                    <TextView value="Logar" fontSize={25} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.botao}>
                    <TextView fontSize={25} value="Cadastre-se" />
                </TouchableOpacity>

            </View>

            <View style={styles.viewLink}>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <TextView value={"Esqueci minha senha"} />
                </TouchableOpacity>
            </View>

            <View style={styles.viewLink}>
                <TextView value={msgErro} cor={VERMELHO}/>
            </View>



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
        alignItems: "center"


    },
    input: {
        width: "90%",
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
    text: {
        fontSize: 20,
        color: "#fff"
    },
    imagemIcon: {
        width: 50,
        height: 50,
        elevation: 20,
        borderRadius: 100
    }
})
