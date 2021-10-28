import { CsvError } from "csv-parse";
import { CustomRepositoryNotFoundError, DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
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

    async deleteById(id: string): Promise<void> {
        const employees = await this.repository.delete(id);
    }


    async findById(id:string): Promise<Customers> {
        const customer = await this.repository.findOne(id)
        
        return customer;
   }

    async updateById(id: string, request: ICustomersDTO): Promise<Customers>{

        const customer = await this.repository.findOne(id)

        this.repository.merge(customer, request)

        const result = await this.repository.save(customer)

        return result
    }

}
export { CustomersRepository }

