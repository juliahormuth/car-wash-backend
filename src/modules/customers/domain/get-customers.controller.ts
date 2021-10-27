import { Request, Response } from 'express'
import { container } from "tsyringe"
import { GetCustomersUseCase } from './get-customers.use-case';




class GetCustomersController {

    async handle(request: Request, response: Response): Promise<Response> {

        const getCustomersUseCase = container.resolve(GetCustomersUseCase);

        const all = await getCustomersUseCase.execute();
    
        return response.json(all);
    }

}

export { GetCustomersController };