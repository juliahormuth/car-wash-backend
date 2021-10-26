import { Router } from "express";
import { CreateCustomersController } from "src/modules/customers/domain/create-customer.controller";



const customersRouter = Router();


const createCustomersController = new CreateCustomersController ();




customersRouter.post('/', createCustomersController.handle)