import { Button, StyleSheet, TouchableOpacity } from "react-native";
import { auth } from "../firebase/firebaseConfig";
import { VERMELHO } from "../constants/Cores";
import { TELA_LOGIN } from "../constants/Rotas";
import TextView from "./TextView";

export default function ButtonLogout() {
    async function logout() {
        await auth.signOut();

    }

    return (
        <TouchableOpacity
            onPress={() => logout()}
            style={styles.botao}
        >
            <TextView value={"Sair"} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: VERMELHO,
        padding: 5,
        borderRadius: 5,
        margin: 5,
    }
})