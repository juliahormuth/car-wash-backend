import { IEmployeesDTO } from '../../dto/IEmployeesDTO';
import { Employees } from '../entities/employees';



interface IEmployeesRepository {
   create(request: IEmployeesDTO): Promise<void>
  // findByEmail(email: string): Promise<Employees>

}
export { IEmployeesRepository }