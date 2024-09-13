import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import TextView from "./TextView";
import { BODY, DARK, LEGENDA } from "../constants/Cores";




export default function ItemViewMedida({ value, render }) {

    return (
        <View style={styles.viewItem}>
            <View style={[styles.viewLegenda]}>
                <TextView value={value} fontSize={15} />
            </View>
            <View style={styles.viewBody}>
                {render}
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    viewLegenda: {
        flexDirection: "row",
        backgroundColor: LEGENDA,
        width: "100%",
        height: "40",
        justifyContent: "center",

    },

    viewBody: {
        height: "60%",
        justifyContent: "center"
    },

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
})