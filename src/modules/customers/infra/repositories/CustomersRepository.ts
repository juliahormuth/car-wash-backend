import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
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

    /*async updateCustomer(id: number): Promise<Customers> {
      const customer = await this.repository.findOne(id)

      this.repository.merge(customer)

      const results = await this.repository.save(customer)

      return results

      
    }*/

    async updateCustomer({
        id, 
        name,
        telefone,
        endereco,
    }: ICustomersDTO): Promise<Customers> {
        
        const customer = await this.repository.findOne(id);

        await this.repository.update(id, {name, telefone, endereco})

        return customer
    }
}
export { CustomersRepository }
