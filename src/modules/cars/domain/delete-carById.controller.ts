import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { DeleteCarByIdUseCase } from '../domain/delete-carById.use-case'

class DeleteByIdCarsController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } =  request.params;

        const carsUseCase = container.resolve(DeleteCarByIdUseCase);

        await carsUseCase.execute(id)


        return response.status(201).json("Carro deletado com sucesso!")
    }

}

export { DeleteByIdCarsController }