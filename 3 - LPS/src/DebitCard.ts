import {NubanckCard} from "./NubanckCard";

export class DebitCard extends NubanckCard{
    validate() {
        console.log("Verificando se ha saldo")
    }
}