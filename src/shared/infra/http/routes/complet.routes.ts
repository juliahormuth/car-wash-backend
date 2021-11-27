import { Router } from "express";
import { GetWashController } from '../../../../modules/wash/presentation/get-wash.controller'
import { CreateWashController} from '../../../../modules/wash/presentation/create-wash.controller'
import { GetByIdWashController  } from '../../../../modules/wash/presentation/get-wash-byId.controller'
import { UpdateWashController } from '../../../../modules/wash/presentation/update-byId.controller' 
import { DeleteByIdWashController } from '../../../../modules/wash/presentation/delete-wash.controller'
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CompletWashController } from '../../../../modules/wash/presentation/complet-wash.controller'
import { DetailWashController  } from '../../../../modules/wash/presentation/detail-wash.controller.use-case'


const completRouter = Router();




const completWashController = new CompletWashController()



washRouter.use(ensureAuthenticated)
washRouter.post('/complet', completWashController.handle)
washRouter.post('/detail', detailWashController.handle)


export { washRouter }


