import React from "react"
import { Dimensions, StyleSheet } from "react-native"
import { BODY, BRANCO, CORPRIMARY, DARK, LEGENDA } from "./Cores"
import Legenda from "../components/Legenda"

export const STYLES = StyleSheet.create({
    viewItem: {
        borderTopWidth: .5,
        borderLeftWidth: .5,
        borderBottomWidth: 0.5,
        width: Dimensions.get("window").width * 0.3333,
        borderColor: DARK,
        backgroundColor: BODY,
        alignItems: "center",
        textAlign: "center",
        height: Dimensions.get("window").height * 0.075,
    },

    viewLegenda: {
        flexDirection: "row",
        backgroundColor: LEGENDA,
        width: "100%",
        justifyContent: "center",

    },

    viewItemLegenda: {
        backgroundColor: LEGENDA,
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
    viewBotao: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2

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
        backgroundColor: CORPRIMARY,
        justifyContent: "center",
        alignContent: "center"
    }



})