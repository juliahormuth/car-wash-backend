import { Request, Response} from 'express';
import { container } from "tsyringe";
import { UpdateCustomersUseCase } from "./update-customer.use-case";


class UpdateCustomersController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { name, document, phoneNumber, address } =  request.body;
    
        const customersUseCase = container.resolve(UpdateCustomersUseCase);

       const result = await customersUseCase.execute(id, {name, document, phoneNumber, address})

        return response.status(200).json(result)
    }
}
export {  UpdateCustomersController };