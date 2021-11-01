import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { GetByIdCarUseCase } from './get-car-byId.use-case';




class GetByIdCarsController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } =  request.params;

        const carsUseCase = container.resolve(GetByIdCarUseCase);

       const result =  await carsUseCase.execute(id)

        return response.status(201).json(result)
    }

}

export { GetByIdCarsController }