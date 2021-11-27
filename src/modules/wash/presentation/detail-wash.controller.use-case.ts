import { Request, Response } from 'express'
import { DetailWashUseCase } from '../domain/detail-wash.use-case';
import { container } from 'tsyringe';



class DetailWashController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { customer, car } =  request.body;

        const createWashUseCase = container.resolve(DetailWashUseCase);

       const result = await createWashUseCase.execute({
            customer,car
        });
        return response.status(201).json(result);
    }
}

export { DetailWashController };