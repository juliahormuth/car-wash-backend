import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from '../../../shared/errors/AppError'
import { inject, injectable } from "tsyringe";
import { IEmployeesRepository } from "../infra/repositories/IEmployeesRepository";


interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    employee: {
        name: string;
        email: string;
    },
    token: string;
}

@injectable()
class AuthenticateEmployeeUseCase {

    constructor(
        @inject("EmployeesRepository")
        private employeesRepository: IEmployeesRepository
    ){}

    async execute({email, password}: IRequest): Promise<IResponse> {

        const employee = await this.employeesRepository.findByEmail(email)

        if(!employee){
            throw new AppError('Email or password incorrect')
        }

        const passwordMatch = await compare(password, employee.password)

        if(!passwordMatch) {
            throw new AppError('Email or password incorrect')
        }

        const token = sign({}, "a50a9aa79697dce0979b2ddcc960ac3a", {
            subject: employee.id,
            expiresIn: "1d"
        })
        
        const tokenReturn: IResponse = {
            token,
            employee: {
                name: employee.document,
                email: employee.email
            }
        }

        return tokenReturn
    }
}

export { AuthenticateEmployeeUseCase }