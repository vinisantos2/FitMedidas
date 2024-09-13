import React from "react";
import { StyleSheet, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CORPRIMARY } from "../constants/Cores";


export default function Layout({ ...outros }) {

    return (
        <ScrollView style={styles.container} {...outros}  >


        </ScrollView>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CORPRIMARY,

    }
})