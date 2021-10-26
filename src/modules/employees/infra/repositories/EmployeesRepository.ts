import { getRepository, Repository } from "typeorm";
import { IEmployeesDTO } from "../../dto/IEmployeesDTO";
import { Employees } from "../entities/employees";
import { IEmployeesRepository } from "./IEmployeesRepository";

class EmployeesRepository implements IEmployeesRepository{
    private repository: Repository<Employees>

    constructor(){
        this.repository = getRepository(Employees);
    }
    async create(request: IEmployeesDTO): Promise<void> {
        const user = this.repository.create({
            name: request.name,
            cpf: request.cpf,
            email: request.email,
            password: request.password,
            endereco: request.endereco,
            telefone: request.telefone
           
        });

        await this.repository.save(user)
    }
       
    async findByEmail(email: string): Promise<Employees>{

        const user = await this.repository.findOne({email})

        return user
    }
    async list(): Promise<Employees[]> {
        const employees = await this.repository.find();
        return employees;
    }
}

export { EmployeesRepository}