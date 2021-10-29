import { Request, Response } from 'express'
import { container } from "tsyringe";
import { CreateCustomersUseCase } from "./create-customer.use-case";

class CreateCustomersController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {name, document, address, phoneNumber } =  request.body;

        const curstomersUseCase = container.resolve(CreateCustomersUseCase);

        await curstomersUseCase.execute({
            name, document: document, address: address, phoneNumber: phoneNumber
        });

        return response.status(201).send();
    }

}

export { CreateCustomersController };

