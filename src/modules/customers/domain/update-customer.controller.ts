import { Request, Response} from 'express';
import { container } from "tsyringe";
import { UpdateCustomersUseCase } from "./update-customer.use-case";


class UpdateCustomersController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id, iCustomersDTO } =  request.body;

        const curstomersUseCase = container.resolve(UpdateCustomersUseCase);

        await curstomersUseCase.execute(id, iCustomersDTO)

        return response.status(201).send();
    }
}
export {  UpdateCustomersController };