import { inject, injectable } from "tsyringe";


import { IEmployeesRepository } from "../infra/repositories/IEmployeesRepository";
import { Employees } from "../infra/entities/employees";

@injectable()
class GetEmployeesUseCase {
    
    constructor(
        @inject("EmployeesRepository")
        private employeesRepository: IEmployeesRepository
    ) {}

    async execute(): Promise<Employees[]>{

            const employees = await this.employeesRepository.getAll();
            return employees;
        }
}

export { GetEmployeesUseCase }