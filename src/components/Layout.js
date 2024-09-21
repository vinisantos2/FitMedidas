import React from "react";
import { RefreshControl, StyleSheet, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { BODY, CORPRIMARY } from "../constants/Cores";


export default function Layout({ refreshing, onRefresh, ...outros }) {

    return (
        <ScrollView
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            style={styles.container} {...outros}  >
        </ScrollView>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BODY,

    }
})