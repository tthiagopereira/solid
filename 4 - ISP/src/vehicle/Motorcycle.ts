import {IVehicle} from "./IVehicle";

export class Motorcycle implements IVehicle{

    constructor(
        cor: string, year: number, engine: number
    ) {
        this.configurationMotorCycle(cor, year, engine)
    }
    configurationCar(cor: string, year: number, engine: number, seats: number): void {
        console.log(cor, year, engine, seats)
    }

    configurationMotorCycle(cor: string, year: number, engine: number) {
        console.log(cor, year, engine)
    }

    startVechicle(): void {
        console.log('Ligando')
    }

}