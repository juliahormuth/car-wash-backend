import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteCustomersUseCase} from '../../customers/domain/delete-customer.use-case'



class DeleteCustomerController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { cpf  } =  request.body;

        const curstomersUseCase = container.resolve(DeleteCustomersUseCase);

        await curstomersUseCase.execute(cpf)

        return response.status(201).send();
    }

}

export { DeleteCustomerController };