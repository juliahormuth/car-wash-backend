import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { CreateServicesUseCase } from './create-services.use-case';


class CreateServicesController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {customer_id, car_id, wash_id, value, start_wash, expected_end_wash } =  request.body;

        const servicesUseCase = container.resolve(CreateServicesUseCase);

        await servicesUseCase.execute({
            customer_id, car_id, wash_id, value, start_wash, expected_end_wash
        });

        return response.status(201).send();
    }

}

export { CreateServicesController };