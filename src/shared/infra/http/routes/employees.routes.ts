import { Router } from 'express';
import { EmployeesController } from "src/modules/employees/domain/employees.controller";



const employeesRouter = Router();



const employeesController = new EmployeesController();


employeesRouter.post('/', employeesController.handle)


export {employeesRouter}