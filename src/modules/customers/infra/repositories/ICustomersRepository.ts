import { DeleteResult, UpdateResult } from "typeorm";
import { ICustomersDTO } from "../../dto/ICustomersDTO";
import { Customers } from "../entities/customers";


interface ICustomersRepository {
create(request: ICustomersDTO): Promise<void>
list(): Promise<Customers[]>
deleteCustomer(cpf: ICustomersDTO): Promise<DeleteResult>
updateCustomer({id, name, cpf, endereco, telefone}: ICustomersDTO): Promise<Customers>

}
 export { ICustomersRepository }