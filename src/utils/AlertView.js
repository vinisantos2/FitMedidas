import { Alert } from "react-native";

export const createTwoButtonAlert = ( title, msg ) =>
    Alert.alert(title, msg, [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);