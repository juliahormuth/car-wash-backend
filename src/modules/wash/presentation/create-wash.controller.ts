import { Request, Response } from 'express'
import { CreateWashUseCase } from '../domain/create-wash.use-case';
import { container } from 'tsyringe';



class CreateWashController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { customer, car } =  request.body;

        const createWashUseCase = container.resolve(CreateWashUseCase);

       const result = await createWashUseCase.execute({
           customer,car
        });
        return response.status(201).json(result);
    }
}

export { CreateWashController };