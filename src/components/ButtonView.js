import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import TextView from "./TextView";


export default function ButtonView({ value, onPress }) {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.botao,]}>
            <TextView value={value} />

        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: "blue",
        borderRadius: 10,
        padding: 10,
        elevation: 5,
        alignItems: "center"

    }
})