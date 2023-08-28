import {NubanckCard} from "./NubanckCard";

export class CreditCard extends NubanckCard{
    validate() {
        console.log("Verificando o limite")
    }
}