import { Request, Response } from 'express'
import { container } from "tsyringe"
import { GetEmployeesUseCase } from './get-employees.use-case';
import { AppError } from '../../../shared/errors/AppError'



class GetEmployeesController {

    async handle(request: Request, response: Response): Promise<Response> {

        const getEmployeesUseCase = container.resolve(GetEmployeesUseCase);

        const all = await getEmployeesUseCase.execute();
    
        return response.json(all);
    }

}

export { GetEmployeesController };