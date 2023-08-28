import {IVehicle} from "./IVehicle";

export interface IVehicleCar extends IVehicle{
    startVechicle(): void
    configurationCar(cor: string, year: number, engine: number, seats: number): void
}