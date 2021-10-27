import { injectable, inject } from "tsyringe"
import { ICustomersDTO } from "../dto/ICustomersDTO"
import { ICustomersRepository } from "../infra/repositories/ICustomersRepository"

@injectable()
class UpdateCustomersUseCase {
    
    constructor(
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository
    ) {}

    async execute( { 
        id,
        name, 
        cpf,
        endereco,
        telefone
        }: ICustomersDTO): Promise<void> {
            

            const customer = await this.customersRepository.deleteCustomer({
            id,
            name,
            cpf,
            endereco,
            telefone
            })
        }
}

export { UpdateCustomersUseCase }