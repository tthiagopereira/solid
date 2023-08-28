import {TypeVehicle} from "./TypeVehicle";
import {Car} from "./vehicles/Car";
import {MotorCycle} from "./vehicles/MotorCycle";

const type = TypeVehicle.CAR
let vehicle

if (type === TypeVehicle.CAR) {
    vehicle = new Car("Amarelo", 2023, 2.0, 4, 4)
}

if (type === TypeVehicle.MOTORCYCLE) {
    vehicle = new MotorCycle("Amarelo", 2023, 2.0)
}


