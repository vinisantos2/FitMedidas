import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import TextView from "./TextView";


export default function ButtonView({ value, onPress, disabled = false }) {

    return (
        <View style={styles.viewBotao}>
            <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.botao,]}>
                <TextView value={value} />
            </TouchableOpacity>
        </View>

    )

}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: "blue",
        borderRadius: 10,
        padding: 10,
        elevation: 5,
        alignItems: "center",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },

    viewBotao: {
        padding: 10,
        alignItems: "center",
        

    }
})