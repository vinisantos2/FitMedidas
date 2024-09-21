import { StyleSheet, View } from "react-native";
import TextView from "./TextView";
import { Medida } from "../firebase/Medidas";
import { VIEW_ABDOMEN, VIEW_ANTEBRACO, VIEW_BRACOCONTRAIDO, VIEW_BRACORELAXADO, VIEW_CINTURA, VIEW_COXAPROXIMAL, VIEW_DATA, VIEW_OMBRO, VIEW_PEITORAL, VIEW_PERNA, VIEW_PESCOCO, VIEW_PESO, VIEW_PUNHO, VIEW_QUADRIL } from "../constants/Nomes";
import { STYLES } from "../constants/Styles";
import Legenda from "./Legenda";
import { BODY, LEGENDA } from "../constants/Cores";


export default function ItemComparacao({ medida = new Medida }) {

    return (
        <View style={styles.view}>
            <View style={styles.viewItem}>
                <Legenda value={VIEW_DATA} />
                <TextView value={medida.AT_DATA} />
            </View>
            <View style={styles.view}>
                <Legenda value={VIEW_PUNHO} />
                <View style={styles.viewDE}>
                    <TextView value={"E"} />
                    <TextView value={"D"} />
                </View>

                <View style={styles.viewDE}>
                    <TextView value={medida.AT_PUNHO_E} />
                    <TextView value={medida.AT_PUNHO_D} />

                </View>

            </View>



            <View style={styles.view}>
                <Legenda value={VIEW_ANTEBRACO} />
                <View style={styles.viewDE}>
                    <TextView value={"E"} />
                    <TextView value={"D"} />
                </View>

                <View style={styles.viewDE}>
                    <TextView value={medida.AT_ANTEBRACO_E} />
                    <TextView value={medida.AT_ANTEBRACO_D} />

                </View>

            </View>
            <View style={styles.view}>
                <Legenda value={VIEW_BRACOCONTRAIDO} />
                <View style={styles.viewDE}>
                    <TextView value={"E"} />
                    <TextView value={"D"} />
                </View>

                <View style={styles.viewDE}>
                    <TextView value={medida.AT_BRACO_CONTRAIDO_E} />
                    <TextView value={medida.AT_BRACO_CONTRAIDO_D} />

                </View>

            </View>
            <View style={styles.view}>
                <Legenda value={VIEW_BRACORELAXADO} />
                <View style={styles.viewDE}>
                    <TextView value={"E"} />
                    <TextView value={"D"} />
                </View>

                <View style={styles.viewDE}>
                    <TextView value={medida.AT_BRACO_RELAXADO_E} />
                    <TextView value={medida.AT_BRACO_RELAXADO_E} />

                </View>

            </View>

            <View style={styles.view}>
                <Legenda value={VIEW_PERNA} />
                <View style={styles.viewDE}>
                    <TextView value={"E"} />
                    <TextView value={"D"} />
                </View>

                <View style={styles.viewDE}>
                    <TextView value={medida.AT_PERNA_E} />
                    <TextView value={medida.AT_PERNA_D} />

                </View>

            </View>


            <View style={styles.view}>
                <Legenda value={VIEW_COXAPROXIMAL} />
                <View style={styles.viewDE}>
                    <TextView value={"E"} />
                    <TextView value={"D"} />
                </View>

                <View style={styles.viewDE}>



                    <TextView value={medida.AT_COXA_PROXIMAL_E} />
                    <TextView value={medida.AT_COXA_PROXIMAL_D} />

                </View>

            </View>
            <View style={styles.viewItem}>
                <Legenda value={VIEW_PESO} />
                <TextView value={medida.AT_PESO} />
            </View>
            <View style={styles.viewItem}>
                <Legenda value={VIEW_OMBRO} />
                <TextView value={medida.AT_OMBRO} />
            </View>

            <View style={styles.viewItem}>
                <Legenda value={VIEW_PEITORAL} />
                <TextView value={medida.AT_PEITORAL} />
            </View>
            <View style={styles.viewItem}>
                <Legenda value={VIEW_CINTURA} />
                <TextView value={medida.AT_CINTURA} />
            </View>
            <View style={styles.viewItem}>
                <Legenda value={VIEW_ABDOMEN} />
                <TextView value={medida.AT_ABDOMEM} />
            </View>
            <View style={styles.viewItem}>
                <Legenda value={VIEW_QUADRIL} />
                <TextView value={medida.AT_QUADRIL} />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    view: {
        backgroundColor: BODY,
    },

    viewDE: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    viewItem: {
        alignItems: "center",
        justifyContent: "center"
    }

})