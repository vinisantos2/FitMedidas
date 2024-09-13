import React from "react";
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Layout from "../components/Layout";
import TextView from "../components/TextView";
import { createUserWithEmailAndPassword, getIdToken } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { TABELA_USERS } from "../constants/constantsFirebase";
import { setDoc, doc } from "firebase/firestore";
import Layout2 from "../components/Layout2";


export default function TelaCadastro({ navigation }) {
    const [email, setEmail] = React.useState("")
    const [nome, setNome] = React.useState("")
    const [senha, setSenha] = React.useState("")

    function criarUsuario() {
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
                // ..
            });
    }

    async function castrarUsuario(uid) {
        const ref = doc(db, TABELA_USERS, uid);
        setDoc(ref, { nome: nome, })
    }
    return (
        <Layout2>
            <View style={styles.viewForm}>
                <TextInput placeholder={"nome"} style={[styles.input, styles.text]} value={nome} onChangeText={setNome} type={"ascii-capable"} />
                <TextInput placeholder="E-mail" style={[styles.input, styles.text]} value={email} onChangeText={setEmail} keyboardType="ascii-capable" />
                <TextInput placeholder="Senha" style={[styles.input, styles.text]} passwordRules={senha} value={senha} onChangeText={setSenha} keyboardType="visible-password" />

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
