import { getRepository, Repository } from "typeorm";
import { IEmployeesDTO } from "../../dto/IEmployees.dto";
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
            document: request.document,
            email: request.email,
            password: request.password,
            address: request.address,
            phoneNumber: request.phoneNumber
           
        });

        await this.repository.save(user)
    }
       
    async findByEmail(email: string): Promise<Employees>{

        const user = await this.repository.findOne({email})

        return user
    }
    async getAll(): Promise<Employees[]> {
        const employees = await this.repository.find();
        return employees;
    }

    async findById(id: string): Promise<Employees>{
        const employee = await this.repository.findOne(id)
       
       return employee;
    }
}

export { EmployeesRepository}