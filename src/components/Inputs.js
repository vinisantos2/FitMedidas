import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";


export default function InputSenha({ placeholder, setView, view = false, value, setValue }) {

    return (
        <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
            <TextInput  placeholder={placeholder} keyboardType="ascii-capable" autoCapitalize={"none"} style={[styles.input, styles.text]} secureTextEntry={view} value={value} onChangeText={setValue} />
            <Ionicons onPress={() => setView(!view)} name="eye-sharp" size={25} style={{ position: "absolute", alignSelf: "flex-end" }} />
        </View>

    )

}


export function Input({ placeholder, value, setValue, keyboardType = "ascii-capable" }) {

    return (
        <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
            <TextInput placeholder={placeholder}  keyboardType={keyboardType} style={[styles.input, styles.text]} value={value} onChangeText={setValue} />
        </View>

    )

}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        padding: 10,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        marginTop: 10

    },

    text: {
        fontSize: 20,
        color: "#fff"
    },
})