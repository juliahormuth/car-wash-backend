import { Router } from 'express';
import { CreateEmployeesController  } from '../../../../modules/employees/domain/create-employees.controller'
import { AppError } from 'src/shared/errors/AppError';
import { GetEmployeesController} from '../../../../modules/employees/domain/get-employees.controller'



const employeesRouter = Router();



const createEmployeesController = new CreateEmployeesController ();
const getEmployeesController = new GetEmployeesController();

employeesRouter.post('/', createEmployeesController.handle)
employeesRouter.get('/', getEmployeesController.handle)

export {employeesRouter}