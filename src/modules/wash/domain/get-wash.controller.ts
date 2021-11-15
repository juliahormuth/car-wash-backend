import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { GetWashUseCase } from './get-wash.use-case';



class GetWashController {

    async handle(request: Request, response: Response): Promise<Response> {

        const getWashUseCase = container.resolve(GetWashUseCase);

        const all = await getWashUseCase.execute();
    
        return response.json(all);
    }

}

export { GetWashController  };