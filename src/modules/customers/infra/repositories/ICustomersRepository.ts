import { DeleteResult, UpdateResult } from "typeorm";
import { ICustomersDTO } from "../../dto/ICustomersDTO";
import { Customers } from "../entities/customers";


interface ICustomersRepository {
create(request: ICustomersDTO): Promise<void>
list(): Promise<Customers[]>
deleteCustomer(cpf: ICustomersDTO): Promise<DeleteResult>
updateCustomer(id: number, request: ICustomersDTO): Promise<UpdateResult>

}
 export { ICustomersRepository }