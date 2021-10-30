import { Request, Response } from 'express'
import { container } from "tsyringe"
import { CreateCarsUseCase} from '../domain/create-cars.use-case'


class CreateCarsController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {board, model, brand, size, color} =  request.body;

        const carsCreateUseCase = container.resolve(CreateCarsUseCase);

        await carsCreateUseCase.execute({
           board, model, brand, size, color
        });

        return response.status(201).send();
    }

}

export { CreateCarsController };