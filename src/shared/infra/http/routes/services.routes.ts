import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateServicesController } from '../../../../modules/services/domain/create-services.controller'


const serviceRouter = Router();

const createServiceController = new CreateServicesController()


serviceRouter.use(ensureAuthenticated)
serviceRouter.post('/', createServiceController.handle)


export { serviceRouter };