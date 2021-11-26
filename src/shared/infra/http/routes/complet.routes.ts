import { Router } from "express";
import { GetWashController } from '../../../../modules/wash/domain/get-wash.controller'
import { CreateWashController} from '../../../../modules/wash/domain/create-wash.controller'
import { GetByIdWashController  } from '../../../../modules/wash/domain/get-wash-byId.controller'
import { UpdateWashController } from '../../../../modules/wash/domain/update-byId.controller' 
import { DeleteByIdWashController } from '../../../../modules/wash/domain/delete-wash.controller'
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CompletWashController } from '../../../../modules/wash/domain/complet-wash.controller'
import { DetailWashController  } from '../../../../modules/wash/domain/detail-wash.controller.use-case'


const completRouter = Router();




const completWashController = new CompletWashController()



washRouter.use(ensureAuthenticated)
washRouter.post('/complet', completWashController.handle)
washRouter.post('/detail', detailWashController.handle)


export { washRouter }


