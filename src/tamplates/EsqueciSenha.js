import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import TextView from "../components/TextView";

import Layout2 from "../components/Layout2";
import { ModallCarregando } from "../components/ModalCarregando";
import { TELA_CADASTRO } from "../constants/Rotas";
import { Input } from "../components/Inputs";
import MenssagemErro from "../components/MessageErro";
import { auth } from "../firebase/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

export default function TelaEsqueciSenha({ navigation }) {
    const [email, setEmail] = React.useState("")
    const [carregando, setCarregando] = React.useState(false)
    const [msgErro, setMsgErro] = React.useState("")

    function redefinirSenha() {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            setMsgErro("E-mail invalido")
            return
        }
        if (email.length < 7) {
            setMsgErro("E-mail invalido")
            return
        }

        sendPasswordResetEmail(auth, email,).then(resp => {
            console.log("Resp: " + resp)
            setMsgErro("Se houver alguma conta vinculada a esse e-mail você recebera um link para redefinir")
            setEmail("")
        }).catch((error) => {
            console.log("Erro" + error)
            setMsgErro(error)
        });

    }
    return (

        <Layout2>
            {carregando ? (<ModallCarregando />) : ""}

            <View style={styles.viewForm}>
                <Input placeholder={"E-mail"} value={email} setValue={setEmail} keyboardType="email-address" />
            </View>

            <View style={styles.viewBotao}>

                <TouchableOpacity onPress={() => redefinirSenha()} style={styles.botao}>
                    <TextView fontSize={25} value="Enviar" />
                </TouchableOpacity>

            </View>

            <View style={styles.viewLink}>
                <MenssagemErro msgErro={msgErro} />
            </View>

        </Layout2>



    )
}

const styles = StyleSheet.create({



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


})
