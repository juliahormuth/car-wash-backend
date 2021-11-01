import { Request, Response } from 'express'
import { container } from "tsyringe";
import { CreateCarsUseCase } from "./create-cars.use-case";



class CreateCarsController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { board, model, brand, size, color } =  request.body;

        const carsUseCase = container.resolve(CreateCarsUseCase);

        await carsUseCase.execute({
            board, model, brand, size, color
        });

        return response.status(201).send();
    }

}

export { CreateCarsController };