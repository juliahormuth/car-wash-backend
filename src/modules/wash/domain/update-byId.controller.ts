import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { UpdateWashUseCase } from './update-byId.use-case';


class UpdateWashController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { washType, value } =  request.body;
    
        const washUseCase = container.resolve(UpdateWashUseCase);

       const result = await washUseCase.execute(id, {washType, value })

        return response.status(200).json(result)
    }
}
export {  UpdateWashController };