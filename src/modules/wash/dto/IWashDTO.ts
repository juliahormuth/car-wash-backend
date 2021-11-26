import { Cars } from "src/modules/cars/infra/entities/Cars";
import { Customers } from "src/modules/customers/infra/entities/Customers";


// enum WashType {
//     simples = "simples",
//     completa = "completa",
//    detalhada = "detalhada",
// }


interface IWashDTO {
    id?: string;
    washType?: string;
    value?: number;
    start_wash?: Date;
    expected_end_wash?: Date;
    // customerId: string;
    // carId: string;
    customer: Customers;
    car: Cars;
}

export { IWashDTO }