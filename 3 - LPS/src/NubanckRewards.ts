import {IPaymentInstrument} from "./IPaymentInstrument";

export class NubanckRewards implements  IPaymentInstrument {
    collectPayment(): void
    {
        console.log("Pagar com a pontuacao no rewards")
    }

    validate(): void {
        console.log("Verificar a pontuacao no rewards")
    }

}