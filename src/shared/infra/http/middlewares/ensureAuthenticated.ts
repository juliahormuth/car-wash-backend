import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { EmployeesRepository} from '../../../../modules/employees/infra/repositories/EmployeesRepository';
import { AppError } from '../../../errors/AppError';

interface IPayload {
    sub: string;
}


export async function ensureAuthenticated(
    request: Request,
    response: Response, 
    next: NextFunction
    ) {

    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ")
    
    try{
   const { sub: employee_id } = verify(token, "a50a9aa79697dce0979b2ddcc960ac3a") as IPayload;
   
   const employeesRepository = new EmployeesRepository();

   const employee = await employeesRepository.findById(employee_id);

  if(!employee){
      throw new AppError("User does not exists!", 401)
  }

  request.employee = {
    id: employee_id,
  }

   next();
    } catch {
        throw new AppError ( "Invalid token!", 401);
    }
}