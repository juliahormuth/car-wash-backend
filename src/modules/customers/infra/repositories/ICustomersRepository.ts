import { DeleteResult, UpdateResult } from "typeorm";
import { ICustomersDTO } from "../../dto/ICustomersDTO";
import { Customers } from "../entities/customers";


interface ICustomersRepository {
create(request: ICustomersDTO): Promise<void>
list(): Promise<Customers[]>
deleteCustomer(cpf: ICustomersDTO): Promise<DeleteResult>
findById(id: string): Promise<Customers>
updateById(id: string, request: ICustomersDTO): Promise<Customers>
deleteById(id: string): Promise<void>
}
 export { ICustomersRepository }