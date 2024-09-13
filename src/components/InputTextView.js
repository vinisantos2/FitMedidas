import React from "react";
import { StyleSheet, TextInput } from "react-native";


export default function InputTextView({ value, onChangeText, placeholder, fontSize = 20 }) {

    return <TextInput keyboardType="decimal-pad" value={value} maxLength={5} onChangeText={onChangeText} placeholder={placeholder} style={[styles.input]} />

}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#fff",
        borderRadius: 10,
        fontSize: 15,
        elevation: 5,
        width: 60,
        height: 30,
        borderColor: "#000",
        textAlign: "center"
    }
})