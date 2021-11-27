import { injectable , inject} from "tsyringe";
import { Customers } from '../infra/entities/Customers'
import { ICustomersRepository } from "../infra/repositories/ICustomersRepository";


@injectable()
class GetByIdCustomersUseCase {
    
    constructor(
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository
    ) {}

    async execute(id: string): Promise<Customers>{

            const employees = await this.customersRepository.findById(id);
            return employees;
        }
}

export {GetByIdCustomersUseCase}