

import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { BRANCO, DARK, VERMELHO } from "../constants/Cores";
import TextView from "./TextView";


export default function MenssagemErro({ msgErro }) {

    return (
        <View style={styles.content}>
            <TextView value={msgErro} cor={BRANCO} />
        </View>
    )


}

const styles = StyleSheet.create({
    content: {
        marginVertical: 5,
        alignItems: "center",
        backgroundColor: VERMELHO,
        padding: 10,
        borderRadius: 10
    }
})
