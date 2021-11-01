import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { GetCarsUseCase } from './get-cars.use-case';



class GetCarsController {

    async handle(request: Request, response: Response): Promise<Response> {

        const getCustomersUseCase = container.resolve(GetCarsUseCase);

        const all = await getCustomersUseCase.execute();
    
        return response.json(all);
    }

}

export { GetCarsController };