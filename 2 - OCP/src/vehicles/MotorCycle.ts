import {IVehicleCar} from "./IVehicleCar";
import {IVehicleMotorcycle} from "./IVehicleMotorcycle";

export class MotorCycle implements IVehicleMotorcycle{

    constructor(
        color: string,
        year: number,
        engine: number) {
        this.configure(color, year, engine)
    }

    configure(color: string, year: number, engine: number): void {
        console.log(`Criano um carro: ${color}, ${year}, ${engine}`)
        this.startVehicle()
    }

    startVehicle(): void {
        console.log('Ligando os motores.')
    }

}