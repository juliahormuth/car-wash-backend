import { inject, injectable } from "tsyringe";

import { hash } from "bcryptjs";

import { IEmployeesRepository } from "../infra/repositories/IEmployeesRepository";
import { IEmployeesDTO } from "../dto/IEmployeesDTO";


@injectable()
class EmployeesUseCase {
    
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

            const user = await this.employeesRepository.create({
            name,
            cpf,
            email,
            password,
            endereco,
            telefone
            })
        }
}

export { EmployeesUseCase }