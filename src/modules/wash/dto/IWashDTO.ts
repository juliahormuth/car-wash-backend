import { Cars } from "src/modules/cars/infra/entities/Cars";
import { Customers } from "src/modules/customers/infra/entities/Customers";

interface IWashDTO {
    id?: string;
    washType: string;
    value: number;
    start_wash: number;
    expected_end_wash: number;
    customer: Customers;
    car: Cars;
}

export { IWashDTO }