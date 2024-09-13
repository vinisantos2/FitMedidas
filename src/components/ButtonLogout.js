import { Button } from "react-native";
import { auth } from "../firebase/firebaseConfig";
import { VERMELHO } from "../constants/Cores";
import { TELA_LOGIN } from "../constants/Rotas";

export default function ButtonLogout() {
    async function logout() {
        await auth.signOut();
       
    }

    return (
        <Button
            onPress={() => logout()}
            title="Logout"
            color={VERMELHO}
        />
    )
}