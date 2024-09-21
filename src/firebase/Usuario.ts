import { Key } from "react"
import { AT_ALTURA, AT_ID, AT_NOME } from "../constants/constantsFirebase"

export class Usuario {

    AT_ID: Key
    AT_NOME: String
    AT_ALTURA: String


    constructor(AT_ID: Key, AT_NOME: String, AT_ALTURA: String) {
        this.AT_ID = AT_ID
        this.AT_NOME = AT_NOME
        this.AT_ALTURA = AT_ALTURA
    }


    toMap() {
        return {
            AT_ID: this.AT_ID,
            AT_NOME: this.AT_NOME,
            AT_ALTURA: this.AT_ALTURA
        }
    }


}

export function usuarioClass(data) {

    const usuario : Usuario = new Usuario(
        data[AT_ID],
        data[AT_NOME],
        data[AT_ALTURA],
    )

    return usuario
}