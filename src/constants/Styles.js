import React from "react"
import { Dimensions, StyleSheet } from "react-native"
import { BODY, BRANCO, CORPRIMARY, DARK, LEGENDA } from "./Cores"

export const STYLES = StyleSheet.create({
    viewItemLegenda: {
        borderTopWidth: .5,
        borderLeftWidth: .5,
        borderBottomWidth: 0.5,
        width: Dimensions.get("window").width * 0.3333,
        borderColor: DARK,
        backgroundColor: LEGENDA,
        alignItems: "center",
        justifyContent: "center",
        height: Dimensions.get("window").height * 0.1,
    },

    text: {
        color: " #fff"
    },

    viewLegenda: {
        flexDirection: "row",
        backgroundColor: LEGENDA,
        justifyContent: "center",
        width: "100%"

    },

    centroVIew: {
        width: "33.33%",
        height: "100%",
        alignItems: "center",

    },
    viewLeft: {
        width: "33.33%",
        height: "100%",
        alignItems: "center",
    },
    viewRight: {
        height: "100%",
        width: "33%",
        alignItems: "center",
    },

    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    dataInput: {
        backgroundColor: BRANCO,
        width: "70%",
        textAlign: "center",
        padding: 3,
        borderRadius: 5,
        marginVertical: 1

    },

    legenda: {
        flexDirection: "row",
        backgroundColor: LEGENDA,
        justifyContent: "center",
        alignContent: "center"
    }



})