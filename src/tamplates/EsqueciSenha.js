import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import TextView from "../components/TextView";

import Layout2 from "../components/Layout2";
import { ModallCarregando } from "../components/ModalCarregando";
import { TELA_CADASTRO } from "../constants/Rotas";
import { Input } from "../components/Inputs";
import MessageErro from "../components/MessageErro";

export default function TelaEsqueciSenha({ navigation }) {
    const [email, setEmail] = React.useState("")
    const [carregando, setCarregando] = React.useState(false)
    const [msgErro, setMsgErro] = React.useState("")
    return (

        <Layout2>
            {carregando ? (<ModallCarregando />) : ""}

            <View style={styles.viewForm}>
                <Input placeholder={"E-mail"} value={email} setValue={setEmail} keyboardType="email-address" />
            </View>


            <View style={styles.viewBotao}>

                <TouchableOpacity onPress={() => navigation.navigate(TELA_CADASTRO)} style={styles.botao}>
                    <TextView fontSize={25} value="Enviar" />
                </TouchableOpacity>

            </View>

            <View style={styles.viewLink}>
                <MessageErro msgErro={msgErro} />
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
