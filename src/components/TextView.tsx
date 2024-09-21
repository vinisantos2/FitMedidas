import React from "react";
import { Text, StyleSheet } from "react-native";


export default function TextView({ value, fontSize = 20, cor = "#FFF" }) {

    return <Text style={[styles.text, { fontSize: fontSize, color: cor },]}>{value === undefined ? "" : value}</Text>

}

const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontWeight: "500"
    }
})