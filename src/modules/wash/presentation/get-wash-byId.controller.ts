import {Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetByIdWashUseCase } from '../domain/get-wash-byId.use-case';



class GetByIdWashController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } =  request.params;

        const washUseCase = container.resolve(GetByIdWashUseCase);

       const result =  await washUseCase.execute(id)

        return response.status(201).json(result)
    }

}

export { GetByIdWashController }