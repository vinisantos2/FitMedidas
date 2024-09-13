import { getIdToken } from "firebase/auth";
import { AT_ANTEBRACO, AT_BRACO_CONTRAIDO, AT_BRACO_RELAXADO, AT_COXA_PROXIMAL_E, AT_DATA, AT_ID, AT_PERNA_E, AT_PUNHO, TABELA_DESEMPENHO } from "../constants/constantsFirebase";
import { auth, db } from "./firebaseConfig";
import { collection, getDocs, setDoc, doc, collectionGroup, Firestore } from "firebase/firestore";
import { idText } from "typescript";
import { map } from "@firebase/util";
import { Medida, medidaClass } from "./Medidas";

class GestorDados {

  async remover() {


  }
  async adicionar(tabela, docData) {
    console.log(docData)
    const ref = doc(db, "user", auth.currentUser.uid, tabela, docData.AT_ID);
    await setDoc(ref,
      docData
    ).catch((erro) => {
      console.log(erro)
    })

  }

  async update(parametro) {


  }
  async obterTodos() {
    const arrayMedidas = []
    const querySnapshot = await getDocs(collection(db, 'user', auth.currentUser.uid, "desempenho"));
    if (!querySnapshot) return;
    querySnapshot.forEach((doc, op) => {
      const data = doc.data(op)
      const medida = medidaClass(data)

      arrayMedidas.push(medida)
    });

    return arrayMedidas

  }
}

export default GestorDados;
