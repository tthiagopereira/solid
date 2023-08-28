import {IVehicleCar} from "./IVehicleCar";

export class Car implements IVehicleCar{

    constructor(
        color: string,
        year: number,
        engine: number,
        seats: number,
        doors: number) {
        this.configure(color, year, engine, seats, doors)
    }

    configure(color: string, year: number, engine: number, seats: number, doors: number): void {
        console.log(`Criano um carro: ${color}, ${year}, ${doors}, ${seats}, ${engine}`)
        this.startVehicle()
    }

    startVehicle(): void {
        console.log('Ligando os motores.')
    }

}