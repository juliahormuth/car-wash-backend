import { inject, injectable } from "tsyringe";
import { IUsersRepository } from '../../../accounts/repositories/IUsersRepository'
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { AppError } from "../../../../errors/AppError";

interface IRequest {
 email: string;
 password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string
    },
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    
 constructor(
 @inject("UsersRepository")
 private usersRepository: IUsersRepository
 ){}
     
 
  async execute({email, password}: IRequest): Promise<IResponse>{

     const user = await this.usersRepository.findByEmail(email)
      
     if(!user){
         throw new AppError("Email or password incorrect!")
        }
      // Senha está correta
      const passwordMatch = await compare(password, user.password);

      if(!passwordMatch) {
          throw new AppError ("Email or password incorrect");
      }
      // Gerar jsonwebtoken

      const token = sign({}, "a50a9aa79697dce0979b2ddcc960ac3a", {
          subject: user.id,
          expiresIn: "1d"
      });
        
     const tokenReturn: IResponse =  {
         token,
         user: {
             name: user.name,
             email: user.email,
         }
        };
          return tokenReturn
    }
}


export { AuthenticateUserUseCase }