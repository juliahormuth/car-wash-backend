import { DeleteResult } from "typeorm";
import { ICustomersDTO } from "../../dto/ICustomersDTO";
import { Customers } from "../entities/customers";


interface ICustomersRepository {
create(request: ICustomersDTO): Promise<void>
list(): Promise<Customers[]>
deleteCustomer(cpf: ICustomersDTO): Promise<DeleteResult>

}
 export { ICustomersRepository }