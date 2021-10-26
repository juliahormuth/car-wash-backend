import { Router } from 'express';
import { CreateEmployeesController  } from '../../../../modules/employees/domain/create-employees.controller'
import { AppError } from 'src/shared/errors/AppError';



const employeesRouter = Router();



const createEmployeesController = new CreateEmployeesController ();


employeesRouter.post('/',createEmployeesController.handle)


export {employeesRouter}