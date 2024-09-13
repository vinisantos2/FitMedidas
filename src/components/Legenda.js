import { View } from "react-native";
import TextView from "./TextView";
import { STYLES } from "../constants/Styles";

export default function Legenda({ value }) {
    return (
        <View style={STYLES.viewLegenda}>
            <TextView value={value} />
        </View>)
}