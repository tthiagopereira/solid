import {IVehicle} from "./IVehicle";

export interface IVehicleMotorCycle extends IVehicle{
    startVechicle(): void
    configurationMotorCycle(cor: string, year: number, engine: number)
}