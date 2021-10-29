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
       document,
       address,
       phoneNumber
        }: ICustomersDTO): Promise<void> {
            

            const customer = await this.customersRepository.create({
            name,
            document,
            address,
            phoneNumber
            })
        }
}

export { CreateCustomersUseCase }