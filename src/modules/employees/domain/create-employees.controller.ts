import { Request, Response } from 'express'
import { container } from "tsyringe"
import { CreateEmployeesUseCase } from './create-employees.use-case';


class CreateEmployeesController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {name, document, email, password, address, phoneNumber } =  request.body;

        const employeesUseCase = container.resolve(CreateEmployeesUseCase);

        await employeesUseCase.execute({
            name, document, email, password, address, phoneNumber
        });

        return response.status(201).send();
    }
}

export { CreateEmployeesController };