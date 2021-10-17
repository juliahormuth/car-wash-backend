import { Request, response, Response } from 'express';
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { container } from 'tsyringe';

class AuthenticateUserController{

    async handle(request: Request, response: Response ){
    
        const { password, email } = request.body;
    
     const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

     const authenticateInfo = await authenticateUserUseCase.execute({email, password})

     return response.json(authenticateInfo)


  }
}
export { AuthenticateUserController };