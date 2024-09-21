import { Key } from "react"
import { AT_ABDOMEM, AT_ANTEBRACO_D, AT_ANTEBRACO_E, AT_BRACO_CONTRAIDO_D, AT_BRACO_CONTRAIDO_E, AT_BRACO_RELAXADO_D, AT_BRACO_RELAXADO_E, AT_CINTURA, AT_COXA_PROXIMAL_D, AT_COXA_PROXIMAL_E, AT_DATA, AT_ID, AT_OMBRO, AT_PEITORAL, AT_PERNA_D, AT_PERNA_E, AT_PESO, AT_PUNHO_D, AT_PUNHO_E, AT_QUADRIL } from "../constants/constantsFirebase"

export class Medida {
    AT_ID: Key
    AT_DATA: string
    //esquerdo
    AT_PUNHO_E: String
    AT_ANTEBRACO_E: String
    AT_PERNA_E: String
    AT_COXA_PROXIMAL_E: String
    AT_BRACO_CONTRAIDO_E: String
    AT_BRACO_RELAXADO_E: String
    //direito
    AT_PUNHO_D: String
    AT_ANTEBRACO_D: String
    AT_PERNA_D: String
    AT_COXA_PROXIMAL_D: String
    AT_BRACO_CONTRAIDO_D: String
    AT_BRACO_RELAXADO_D: String
    //centro
    AT_OMBRO: String
    AT_PEITORAL: String
    AT_ABDOMEM: String
    AT_CINTURA: String
    AT_QUADRIL: String
    AT_PESO: String

    constructor(
        AT_ID: Key,
        AT_DATA: string,
        AT_PUNHO_E: String,
        AT_ANTEBRACO_E: String,
        AT_PERNA_E: String,
        AT_COXA_PROXIMAL_E: String,
        AT_BRACO_CONTRAIDO_E: String,
        AT_BRACO_RELAXADO_E: String,
        AT_PUNHO_D: String,
        AT_ANTEBRACO_D: String,
        AT_PERNA_D: String,
        AT_COXA_PROXIMAL_D: String,
        AT_BRACO_CONTRAIDO_D: String,
        AT_BRACO_RELAXADO_D: String,
        AT_OMBRO: String,
        AT_PEITORAL: String,
        AT_ABDOMEM: String,
        AT_CINTURA: String,
        AT_QUADRIL: String,
        AT_PESO: String
    ) {
        this.AT_ID = AT_ID
        this.AT_DATA = AT_DATA
        this.AT_PUNHO_E = AT_PUNHO_E
        this.AT_ANTEBRACO_E = AT_ANTEBRACO_E
        this.AT_PERNA_E = AT_PERNA_E
        this.AT_COXA_PROXIMAL_E = AT_COXA_PROXIMAL_E
        this.AT_BRACO_CONTRAIDO_E = AT_BRACO_CONTRAIDO_E
        this.AT_BRACO_RELAXADO_E = AT_BRACO_RELAXADO_E
        this.AT_PUNHO_D = AT_PUNHO_D
        this.AT_ANTEBRACO_D = AT_ANTEBRACO_D
        this.AT_PERNA_D = AT_PERNA_D
        this.AT_COXA_PROXIMAL_D = AT_COXA_PROXIMAL_D
        this.AT_BRACO_CONTRAIDO_D = AT_BRACO_CONTRAIDO_D
        this.AT_BRACO_RELAXADO_D = AT_BRACO_RELAXADO_D
        this.AT_OMBRO = AT_OMBRO
        this.AT_PEITORAL = AT_PEITORAL
        this.AT_ABDOMEM = AT_ABDOMEM
        this.AT_CINTURA = AT_CINTURA
        this.AT_QUADRIL = AT_QUADRIL
        this.AT_PESO = AT_PESO
    }


    toMap() {

        return {
            AT_ID: this.AT_ID,
            AT_DATA: this.AT_DATA,
            //lado esquerdo
            AT_PUNHO_E: this.AT_PUNHO_E,
            AT_ANTEBRACO_E: this.AT_ANTEBRACO_E,
            AT_PERNA_E: this.AT_PERNA_E,
            AT_COXA_PROXIMAL_E: this.AT_COXA_PROXIMAL_E,
            AT_BRACO_CONTRAIDO_E: this.AT_BRACO_CONTRAIDO_E,
            AT_BRACO_RELAXADO_E: this.AT_BRACO_RELAXADO_E,
            //lado direito

            AT_PUNHO_D: this.AT_PUNHO_D,
            AT_ANTEBRACO_D: this.AT_ANTEBRACO_D,
            AT_PERNA_D: this.AT_PERNA_D,
            AT_COXA_PROXIMAL_D: this.AT_COXA_PROXIMAL_D,
            AT_BRACO_CONTRAIDO_D: this.AT_BRACO_CONTRAIDO_D,
            AT_BRACO_RELAXADO_D: this.AT_BRACO_RELAXADO_D,

            AT_OMBRO: this.AT_OMBRO,
            AT_PEITORAL: this.AT_PEITORAL,
            AT_ABDOMEM: this.AT_ABDOMEM,
            AT_CINTURA: this.AT_CINTURA,
            AT_QUADRIL: this.AT_QUADRIL,
            AT_PESO: this.AT_PESO,
        }

    }



}

export function medidaClass(data) {

    const medida = new Medida(
        data[AT_ID],
        data[AT_DATA],
        //lado esquerdo
        data[AT_PUNHO_E],
        data[AT_ANTEBRACO_E],
        data[AT_PERNA_E],
        data[AT_COXA_PROXIMAL_E],
        data[AT_BRACO_CONTRAIDO_E],
        data[AT_BRACO_RELAXADO_E],
        //lado direito

        data[AT_PUNHO_D],
        data[AT_ANTEBRACO_D],
        data[AT_PERNA_D],
        data[AT_COXA_PROXIMAL_D],
        data[AT_BRACO_CONTRAIDO_D],
        data[AT_BRACO_RELAXADO_D],

        data[AT_OMBRO],
        data[AT_PEITORAL],
        data[AT_ABDOMEM],
        data[AT_CINTURA],
        data[AT_QUADRIL],
        data[AT_PESO],
    )
    //  console.log(medida)

    return medida
}