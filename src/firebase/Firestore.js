
import { auth, db } from "./firebaseConfig";
import { collection, getDocs, setDoc, doc, query, where, deleteDoc } from "firebase/firestore";

import { medidaClass } from "./Medidas";
import { TABELA_USERS } from "../constants/constantsFirebase";

class GestorDados {

  async remover(tabela, id) {
    console.log(auth.currentUser.uid)
    const ref = doc(db, "user", auth.currentUser.uid, tabela, id)
    await deleteDoc(ref)
  }


  async buscar(tabela, atributo, valor) {
    const ref = collection(db, tabela,);
    const q = await query(ref, where(atributo, "==", valor));
    const querySnapshot = await getDocs(q);
    let data = {}
    querySnapshot.forEach((doc) => {
      data = doc.data()
    });

    return data
  }


  async adicionar(tabela, docData) {
    const ref = doc(db, "user", auth.currentUser.uid, tabela, docData.AT_ID);
    await setDoc(ref,
      docData
    ).catch((erro) => {
      console.log(erro)
    })

  }

  async update(id, tabela, docData) {
    const ref = doc(db, "user", auth.currentUser.uid, tabela, id);
    await setDoc(ref,
      docData
    ).catch((erro) => {
      console.log(erro)
    })

  }

  async updateUser(docData) {
    const ref = doc(db, TABELA_USERS, auth.currentUser.uid);
    await setDoc(ref,
      docData
    ).catch((erro) => {
      console.log(erro)
    })

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
