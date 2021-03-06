import { IEmployeesDTO } from '../../dto/IEmployees.dto';
import { Employees } from '../entities/employees';

interface IEmployeesRepository {
   create(request: IEmployeesDTO): Promise<void>
   findByEmail(email: string): Promise<Employees>
   getAll(): Promise<Employees[]>
   findById(id: string): Promise<Employees>
}
export { IEmployeesRepository }