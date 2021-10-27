import { Router } from "express";
import { CreateCustomersController } from '../../../../modules/customers/domain/create-customer.controller'
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";



const customersRouter = Router();


const createCustomersController = new CreateCustomersController ();



customersRouter.use(ensureAuthenticated)
customersRouter.post('/', createCustomersController.handle)


export { customersRouter }