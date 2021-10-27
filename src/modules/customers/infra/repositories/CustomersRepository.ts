import { DeleteResult, getRepository, Repository } from "typeorm";
import { ICustomersDTO } from "../../dto/ICustomersDTO";
import { Customers } from "../entities/customers";
import { ICustomersRepository } from "./ICustomersRepository";


class CustomersRepository implements ICustomersRepository{
    private repository: Repository<Customers>

    constructor(){
        this.repository = getRepository(Customers);
    }
    async create(request: ICustomersDTO): Promise<void> {
        const user = this.repository.create({
            name: request.name,
            cpf: request.cpf,
            endereco: request.endereco,
            telefone: request.telefone
        });

        await this.repository.save(user)
    }
    
    async list(): Promise<Customers[]> {
        const employees = await this.repository.find();
        return employees;
    }

    async deleteCustomer(cpf: ICustomersDTO): Promise<DeleteResult> {
        const employees = await this.repository.delete(cpf);

        return employees
    }
}
export { CustomersRepository }