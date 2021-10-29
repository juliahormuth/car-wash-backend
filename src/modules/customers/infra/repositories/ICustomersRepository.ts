import { ICustomersDTO } from "../../dto/ICustomersDTO";
import { Customers } from '../entities/Customers'


interface ICustomersRepository {
create(request: ICustomersDTO): Promise<void>
getAll(): Promise<Customers[]>
findById(id: string): Promise<Customers>
updateById(id: string, request: ICustomersDTO): Promise<Customers>
deleteById(id: string): Promise<void>
}

 export { ICustomersRepository }