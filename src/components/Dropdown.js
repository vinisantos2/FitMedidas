import { StyleSheet, View } from "react-native";
import { BODY, BRANCO, LEGENDA } from "../constants/Cores";
import RNPickerSelect from 'react-native-picker-select';
export const Dropdown = ({ valor, click, placeHolder, array }) => {

    return (
        <View style={styles.viewSelect}>


            <RNPickerSelect
                value={valor}
                placeholder={{ label: placeHolder, color: BRANCO }}
                onValueChange={click}
                activeItemStyle={{ backgroundColor: LEGENDA, }}
                dropdownItemStyle={{ backgroundColor: BODY, }}

                style={{
                    inputAndroid: {
                        textDecorationColor: BRANCO,
                        backgroundColor: LEGENDA,
                        color: BRANCO,

                    },
                    inputIOS: { color: BRANCO }
                }}
                items={array}
            />

        </View>
    );

};


const styles = StyleSheet.create({
    viewSelect: {
        textDecorationColor: BRANCO,

    }
})