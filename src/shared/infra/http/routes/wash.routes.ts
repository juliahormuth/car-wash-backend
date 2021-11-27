import { Router } from "express";
import { GetWashController } from '../../../../modules/wash/presentation/get-wash.controller'
import { CreateWashController} from '../../../../modules/wash/presentation/create-wash.controller'
import { GetByIdWashController  } from '../../../../modules/wash/presentation/get-wash-byId.controller'
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CompletWashController } from '../../../../modules/wash/presentation/complet-wash.controller'
import { DetailWashController  } from '../../../../modules/wash/presentation/detail-wash.controller.use-case'


const washRouter = Router();


const createWashController = new CreateWashController()
const getWashController = new GetWashController()
const getByIdWashController = new GetByIdWashController()
const completWashController = new CompletWashController()
const detailWashController = new DetailWashController()


washRouter.use(ensureAuthenticated)
washRouter.post('/simple', createWashController.handle)
washRouter.get('/', getWashController.handle)
washRouter.get('/:id', getByIdWashController.handle)
washRouter.post('/complet', completWashController.handle)
washRouter.post('/detail', detailWashController.handle)


export { washRouter }


