import { Router } from "express";
import { GetCustomersController } from '../../../../modules/customers/presentation/get-customers.controller'
import { CreateCustomersController } from '../../../../modules/customers/presentation/create-customer.controller'
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { UpdateCustomersController } from '../../../../modules/customers/presentation/update-customer.controller'
import { DeleteByIdCustomerController } from '../../../../modules/customers/presentation/delete-customer-byId.controller'
import { GetByIdCustomerController } from '../../../../modules/customers/presentation/get-customer-ID.controller'



const customersRouter = Router();


const createCustomersController = new CreateCustomersController()
const getCustomersController = new GetCustomersController()
const updateCustomerController = new UpdateCustomersController()
const getByIdCustomerController = new GetByIdCustomerController()
const deleteByIdCustomerController = new DeleteByIdCustomerController()



customersRouter.use(ensureAuthenticated)
customersRouter.post('/', createCustomersController.handle)
customersRouter.get('/', getCustomersController.handle)
customersRouter.get('/:id', getByIdCustomerController.handle)
customersRouter.put('/:id', updateCustomerController.handle)
customersRouter.delete('/:id', deleteByIdCustomerController.handle)

export { customersRouter }