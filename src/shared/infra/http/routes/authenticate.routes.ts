import { Router } from 'express';
import { AuthenticateEmployeeController } from '../../../../modules/employees/domain/authentication.controller'

const authenticateRoutes = Router();

const authenticateEmployeeController = new AuthenticateEmployeeController()

authenticateRoutes.post('/session', authenticateEmployeeController.handle)

export {authenticateRoutes}