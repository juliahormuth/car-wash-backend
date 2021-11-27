import { Request, Response } from 'express'
import { CompletWashUseCase } from '../domain/complet-wash.use-case';
import { container } from 'tsyringe';



class CompletWashController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { customer, car } =  request.body;

        const createWashUseCase = container.resolve(CompletWashUseCase);

       const result = await createWashUseCase.execute({
            customer,car
        });
        return response.status(201).json(result);
    }
}

export { CompletWashController };