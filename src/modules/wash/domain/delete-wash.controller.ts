import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { DeleteWashByIdUseCase } from './delete-wash.use-case';



class DeleteByIdWashController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } =  request.params;

        const washUseCase = container.resolve(DeleteWashByIdUseCase);

        await washUseCase.execute(id)

        return response.status(201).json("Lavagem deletada com sucesso!")
    }

}

export { DeleteByIdWashController }