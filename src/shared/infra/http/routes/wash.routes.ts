import { Router } from "express";
import { CreateWashController } from "src/modules/wash/domain/create-wash.controller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const washRouter = Router();


const createWashController = new CreateWashController()



washRouter.use(ensureAuthenticated)
washRouter.post('/', createWashController.handle)



export { washRouter }