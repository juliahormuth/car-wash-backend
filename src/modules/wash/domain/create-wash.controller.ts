import { Request, Response } from 'express'
import { CreateWashUseCase } from '../domain/create-wash.use-case';
import { container } from 'tsyringe';



class CreateWashController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {washType, value, start_wash, expected_end_wash, customer, car } =  request.body;

        const createWashUseCase = container.resolve(CreateWashUseCase);

        await createWashUseCase.execute({
            washType, value, start_wash,expected_end_wash ,customer,car
        });
        return response.status(201).json("Lavagem criada com sucesso!");
    }
}

export { CreateWashController };