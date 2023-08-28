import {IPaymentInstrument} from "./IPaymentInstrument";

export abstract class NubanckCard implements IPaymentInstrument{
    collectPayment(): void {
        console.log('Pagamento realizado')
    }

    validate(): void {
        console.log('Validacao')
    }

}