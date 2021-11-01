import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { UpdateCarsUseCase } from './update-car.use-case';



class UpdateCarsController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { board, model, brand, size, color } =  request.body;
    
        const customersUseCase = container.resolve(UpdateCarsUseCase);

       const result = await customersUseCase.execute(id, {board, model, brand, size, color})

        return response.status(200).json(result)
    }
}
export { UpdateCarsController }