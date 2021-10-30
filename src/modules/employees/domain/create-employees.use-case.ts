import { inject, injectable } from "tsyringe";

import { hash } from "bcryptjs";

import { IEmployeesRepository } from "../infra/repositories/IEmployeesRepository";
import { IEmployeesDTO } from "../dto/IEmployees.dto";
import { AppError } from '../../../shared/errors/AppError'

@injectable()
class CreateEmployeesUseCase {
    
    constructor(
        @inject("EmployeesRepository")
        private employeesRepository: IEmployeesRepository
    ) {}

    async execute( { 
        name, 
        document,
        email,
        password, 
        address,
        phoneNumber
        }: IEmployeesDTO): Promise<void>{

            const userAlreadyExists = await this.employeesRepository.findByEmail(email)
            
            if (userAlreadyExists){
                throw new AppError('User already exists!')
            }

            const passwordHash = await hash(password, 8)

            const user = await this.employeesRepository.create({
            name,
            document,
            email,
            password: passwordHash,
            address,
            phoneNumber
            })
        }
}

export { CreateEmployeesUseCase }