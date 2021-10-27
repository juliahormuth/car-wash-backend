import { Router } from "express";
import { GetCustomersController } from '../../../../modules/customers/domain/get-customers.controller'
import { CreateCustomersController } from '../../../../modules/customers/domain/create-customer.controller'
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { DeleteCustomerController } from '../../../../modules/customers/domain/delele-customer.controller'
import { UpdateCustomersController } from '../../../../modules/customers/domain/update-customer.controller'



const customersRouter = Router();


const createCustomersController = new CreateCustomersController()
const getCustomersController = new GetCustomersController()
const deleteCustomersController = new DeleteCustomerController
const updateCustomerController = new UpdateCustomersController



customersRouter.use(ensureAuthenticated)
customersRouter.post('/', createCustomersController.handle)
customersRouter.get('/', getCustomersController.handle)
customersRouter.delete('/', deleteCustomersController.handle)
customersRouter.put('/', updateCustomerController.handle)

export { customersRouter }