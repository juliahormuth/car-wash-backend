import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';


import { employeesRouter } from './employees.routes'
import { customersRouter } from './customers.routes'
import { carsRouter } from './cars.routes';


const router = Router();


router.use('/employees',employeesRouter)
router.use(authenticateRoutes)
router.use('/customers', customersRouter )
router.use('/cars', carsRouter)
export { router };