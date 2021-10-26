import { Request, Response } from 'express'
import { container } from "tsyringe";
import { CreateCustomersUseCase } from "./create-customer.use-case";

class CreateCustomersController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {name, cpf, endereco, telefone } =  request.body;

        const curstomersUseCase = container.resolve(CreateCustomersUseCase);

        await curstomersUseCase.execute({
            name, cpf, endereco, telefone
        });

        return response.status(201).send();
    }

}

export { CreateCustomersController };