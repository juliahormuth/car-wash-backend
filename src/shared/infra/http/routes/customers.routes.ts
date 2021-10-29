import { Router } from "express";
import { GetCustomersController } from '../../../../modules/customers/domain/get-customers.controller'
import { CreateCustomersController } from '../../../../modules/customers/domain/create-customer.controller'
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { UpdateCustomersController } from '../../../../modules/customers/domain/update-customer.controller'
import { DeleteByIdCustomerController } from '../../../../modules/customers/domain/delete-customer-byId.controller'



const customersRouter = Router();


const createCustomersController = new CreateCustomersController()
const getCustomersController = new GetCustomersController()
const updateCustomerController = new UpdateCustomersController()
const getByIdCustomerController = new GetCustomersController()
const deleteByIdCustomerController = new DeleteByIdCustomerController()



customersRouter.use(ensureAuthenticated)
customersRouter.post('/', createCustomersController.handle)
customersRouter.get('/', getCustomersController.handle)
customersRouter.get('/:id', getByIdCustomerController.handle)
customersRouter.put('/:id', updateCustomerController.handle)
customersRouter.delete('/:id', deleteByIdCustomerController.handle)

export { customersRouter }