import React from "react";
import { View, StyleSheet, } from "react-native";


export default function Layout2({ ...outros }) {

    return (
        <View style={styles.container} {...outros}  >

           
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#808080",
       

    }
})