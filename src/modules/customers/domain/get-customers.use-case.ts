import { injectable, inject } from "tsyringe";
import { Customers } from "../infra/entities/customers";
import { ICustomersRepository } from "../infra/repositories/ICustomersRepository";

@injectable()
class GetCustomersUseCase {
    
    constructor(
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository
    ) {}

    async execute(): Promise<Customers[]>{

            const employees = await this.customersRepository.list();
            return employees;
        }
}

export { GetCustomersUseCase }