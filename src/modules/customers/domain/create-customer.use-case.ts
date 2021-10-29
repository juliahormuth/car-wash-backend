import { injectable, inject } from "tsyringe"
import { ICustomersDTO } from "../dto/ICustomersDTO"
import { ICustomersRepository } from "../infra/repositories/ICustomersRepository"




@injectable()
class CreateCustomersUseCase {
    
    constructor(
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository
    ) {}

    async execute( { 
        name, 
        document: document,
        address: address,
        phoneNumber: phoneNumber
        }: ICustomersDTO): Promise<void> {
            

            const customer = await this.customersRepository.create({
            name,
            document: document,
            address: address,
            phoneNumber: phoneNumber
            })
        }
}

export { CreateCustomersUseCase }