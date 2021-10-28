import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { GetByIdCustomersUseCase } from './get-customer-ID.use.case';






class GetByIdCustomerController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } =  request.params;

        const curstomersUseCase = container.resolve(GetByIdCustomersUseCase);

       const result =  await curstomersUseCase.execute(id)

        return response.status(201).json(result)
    }

}

export { GetByIdCustomerController };