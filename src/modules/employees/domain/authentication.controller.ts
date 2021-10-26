import { Request, Response } from 'express'
import { container } from "tsyringe"
import { AuthenticateEmployeeUseCase } from "./authentication.use-case"



class AuthenticateEmployeeController {
    async handle(request: Request, response: Response): Promise<Response>{

        const {email, password} = request.body

        const authenticateUserUseCase = container.resolve(AuthenticateEmployeeUseCase)

        const token = await authenticateUserUseCase.execute({
            email,
            password
        });

        return response.json(token)

    }
}

export { AuthenticateEmployeeController }