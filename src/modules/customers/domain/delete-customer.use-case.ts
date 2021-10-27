import { injectable, inject } from "tsyringe";
import { DeleteResult } from "typeorm";
import { ICustomersDTO } from "../dto/ICustomersDTO";
import { ICustomersRepository } from "../infra/repositories/ICustomersRepository";

@injectable()
class DeleteCustomersUseCase {
    
    constructor(
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository
    ) {}

    async execute(cpf: ICustomersDTO): Promise<DeleteResult>{

            const employees = await this.customersRepository.deleteCustomer(cpf);
            return employees;
        }
}

export { DeleteCustomersUseCase }