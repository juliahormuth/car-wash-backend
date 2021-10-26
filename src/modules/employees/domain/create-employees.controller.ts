import { Request, Response } from 'express'
import { container } from "tsyringe"
import { CreateEmployeesUseCase } from './create-employees.use-case';
import { AppError } from '../../../shared/errors/AppError'



class CreateEmployeesController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {name, cpf, email, password, endereco, telefone } =  request.body;

        const employeesUseCase = container.resolve(CreateEmployeesUseCase);

        await employeesUseCase.execute({
            name, cpf, email, password, endereco, telefone
        });

        return response.status(201).send();
    }

}

export { CreateEmployeesController };