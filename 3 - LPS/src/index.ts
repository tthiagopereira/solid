import {CreditCard} from "./CreditCard";
import {DebitCard} from "./DebitCard";
import {NubanckRewards} from "./NubanckRewards";

const creditCard = new CreditCard()
const debitCard = new DebitCard()
const debitRewards = new NubanckRewards()

creditCard.validate()
creditCard.collectPayment()

debitCard.validate()
debitCard.collectPayment()

debitRewards.validate()
debitRewards.collectPayment()