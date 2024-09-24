import React from "react";
import { StyleSheet, TextInput } from "react-native";
import MaskInput, { createNumberMask, Masks } from "react-native-mask-input";


export default function InputTextView({ disable, value, onChangeText, placeholder = "", fontSize = 20 }) {
    const decimalMask = createNumberMask({
        
        separator: '.',
        precision: 1,
    })

    return <MaskInput mask={decimalMask} editable={disable} keyboardType="decimal-pad" inputMode="decimal" value={value} maxLength={6} onChangeText={onChangeText} placeholder={placeholder} style={[styles.input]} />

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