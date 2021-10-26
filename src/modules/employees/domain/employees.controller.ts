import { Request, Response } from 'express'
import { container } from "tsyringe"
import { EmployeesUseCase } from './employees.use-case';



class EmployeesController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {name, cpf, email, password, endereco, telefone } =  request.body;

        const employeesUseCase = container.resolve(EmployeesUseCase);

        await employeesUseCase.execute({
            name, cpf, email, password, endereco, telefone
        });

        return response.status(201).send();
    }

}

export { EmployeesController };