import { injectable, inject } from "tsyringe"
import { ICustomersDTO } from "../dto/ICustomersDTO"
import { Customers } from '../infra/entities/Customers'
import { ICustomersRepository } from "../infra/repositories/ICustomersRepository"



@injectable()
class UpdateCustomersUseCase {
    
    constructor(
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository
    ) {}

    async execute(id: string,{name, document, phoneNumber, address}: ICustomersDTO): Promise<Customers> {
        
        
        const teste = await this.customersRepository.updateById(id, {name, document,phoneNumber,address})
    
        return teste
    }
}

export { UpdateCustomersUseCase }