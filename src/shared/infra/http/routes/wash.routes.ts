import { Router } from "express";
import { GetWashController } from '../../../../modules/wash/domain/get-wash.controller'
import { CreateWashController} from '../../../../modules/wash/domain/create-wash.controller'
import { GetByIdWashController  } from '../../../../modules/wash/domain/get-wash-byId.controller'
import { UpdateWashController } from '../../../../modules/wash/domain/update-byId.controller' 
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const washRouter = Router();


const createWashController = new CreateWashController()
const getWashController = new GetWashController()
const getByIdWashController = new GetByIdWashController()
const updateByIdWashController = new UpdateWashController()


washRouter.use(ensureAuthenticated)
washRouter.post('/', createWashController.handle)
washRouter.get('/', getWashController.handle)
washRouter.get('/:id', getByIdWashController.handle)
washRouter.put('/:id', updateByIdWashController.handle)



export { washRouter }