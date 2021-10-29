import { inject, injectable } from "tsyringe";

import { hash } from "bcryptjs";

import { IEmployeesRepository } from "../infra/repositories/IEmployeesRepository";
import { IEmployeesDTO } from "../dto/IEmployees.dto";
import { AppError } from '../../../shared/errors/AppError'
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