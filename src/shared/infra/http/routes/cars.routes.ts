import { Router } from 'express';
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateCarsController } from '../../../../modules/cars/domain/create-cars.controller'
import { GetByIdCarsController } from '../../../../modules/cars/domain/get-car-byId.controller'
import { GetCarsController } from '../../../../modules/cars/domain/get-cars.controller'
import { UpdateCarsController } from '../../../../modules/cars/domain/update-car.controller'
import { DeleteByIdCarsController } from '../../,./../../../modules/cars/domain/delete-carById.controller'

const carsRouter = Router();


const createCustomersController = new CreateCarsController()
const getCarByIdController = new GetByIdCarsController()
const getCarsController = new GetCarsController()
const updateCarsController = new UpdateCarsController()
const deleteCarByIdController = new DeleteByIdCarsController()



carsRouter.use(ensureAuthenticated)
carsRouter.post('/', createCustomersController.handle)
carsRouter.get('/', getCarsController.handle)
carsRouter.get('/:id', getCarByIdController.handle)
carsRouter.put('/:id', updateCarsController.handle)
carsRouter.delete('/:id', deleteCarByIdController.handle)

export { carsRouter }