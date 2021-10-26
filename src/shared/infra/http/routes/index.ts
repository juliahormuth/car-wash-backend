import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';


import { employeesRouter } from './employees.routes'


const router = Router();


router.use('/employees',employeesRouter)
router.use(authenticateRoutes)
router.use('/customers',customersRouter)
export { router };