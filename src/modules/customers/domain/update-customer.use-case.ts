import { injectable, inject } from "tsyringe";
import { UpdateResult } from "typeorm";
import { ICustomersDTO } from "../dto/ICustomersDTO";
import { ICustomersRepository } from "../infra/repositories/ICustomersRepository";



@injectable()
class UpdateCustomersUseCase {
    
    constructor(
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository
    ) {}

    async execute(id: number, iCustomersDTO: ICustomersDTO): Promise<UpdateResult>{

            const employees = await this.customersRepository.updateCustomer(id, iCustomersDTO);
            return employees;
        }
}

export { UpdateCustomersUseCase }