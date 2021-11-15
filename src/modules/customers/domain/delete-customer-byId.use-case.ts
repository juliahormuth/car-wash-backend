import { injectable, inject} from "tsyringe";
import { ICustomersRepository } from "../infra/repositories/ICustomersRepository";



@injectable()
class DeleteCustomersByIdUseCase {
    
    constructor(
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository
    ) {}

    async execute(id: string): Promise<void>{

            const employees = await this.customersRepository.deleteById(id);
            return employees;
        }
}

export {DeleteCustomersByIdUseCase}