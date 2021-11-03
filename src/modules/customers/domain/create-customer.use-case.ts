import { injectable, inject } from "tsyringe"
import { ICustomersDTO } from "../dto/ICustomersDTO"
import { ICustomersRepository } from "../infra/repositories/ICustomersRepository"
import { AppError } from '../../../shared/errors/AppError'




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

         const customerAlreadyExists = await this.customersRepository.findByDocument(document)

         if(customerAlreadyExists){
          throw new AppError('Customer already exists!')
         }

          await this.customersRepository.create({
            name,
            document,
            address,
            phoneNumber
            })
        }
}

export { CreateCustomersUseCase }