import { injectable, inject } from "tsyringe"
import { UpdateResult } from "typeorm"
import { ICustomersDTO } from "../dto/ICustomersDTO"
import { Customers } from "../infra/entities/customers"
import { ICustomersRepository } from "../infra/repositories/ICustomersRepository"


interface IRequest {
    name: string;
    telefone: string;
    endereco: string;
}

@injectable()
class UpdateCustomersUseCase {
    
    constructor(
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository
    ) {}

    async execute(id: string,{name, cpf, telefone, endereco}: ICustomersDTO): Promise<Customers> {
        
        
        const teste = await this.customersRepository.updateById(id, {name, cpf, telefone, endereco})
        console.log(teste)
        return teste

    }
}

export { UpdateCustomersUseCase }