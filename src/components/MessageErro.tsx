

import React from "react";
import { ActivityIndicator, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { DARK, VERMELHO } from "../constants/Cores";
import TextView from "./TextView";


export default function MessageErro({ msgErro }) {

    return (
        <View style={{ alignItems: "center", backgroundColor: DARK }}>
            <TextView value={msgErro} cor={VERMELHO} />
        </View>
    )


}
