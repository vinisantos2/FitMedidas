import React from "react";
import { ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { DARK } from "../constants/Cores";


export default function Carregando({ }) {

    return (
        <ActivityIndicator size={"large"} color={DARK}/>
    )


}
