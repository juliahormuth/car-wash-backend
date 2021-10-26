import { ICustomersDTO } from "../../dto/ICustomersDTO";


interface ICustomersRepository {
create(request: ICustomersDTO): Promise<void>
 }
 export { ICustomersRepository }