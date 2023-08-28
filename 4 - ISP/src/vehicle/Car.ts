import {IVehicleCar} from "./IVehicleCar";

export class Car implements IVehicleCar{

    constructor(
        cor: string, year: number, engine: number, seats: number
    ) {
        this.configurationCar(cor, year, engine, seats)
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