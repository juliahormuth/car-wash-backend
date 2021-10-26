import { inject, injectable } from "tsyringe";

import { hash } from "bcryptjs";

import { IEmployeesRepository } from "../infra/repositories/IEmployeesRepository";
import { IEmployeesDTO } from "../dto/IEmployeesDTO";
import { AppError } from '../../../shared/errors/AppError'

@injectable()
class CreateEmployeesUseCase {
    
    constructor(
        @inject("EmployeesRepository")
        private employeesRepository: IEmployeesRepository
    ) {}

    async execute( { 
        name, 
        cpf,
        email,
        password, 
        endereco,
        telefone
        }: IEmployeesDTO): Promise<void>{

            const userAlreadyExists = await this.employeesRepository.findByEmail(email)
            
            if (userAlreadyExists){
                throw new AppError('User already exists!')
            }

            const passwordHash = await hash(password, 8)

            const user = await this.employeesRepository.create({
            name,
            cpf,
            email,
            password: passwordHash,
            endereco,
            telefone
            })
        }
}

export { CreateEmployeesUseCase }