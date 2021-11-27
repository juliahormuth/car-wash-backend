import { Router } from 'express';
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateCarsController } from '../../../../modules/cars/presentation/create-cars.controller'
import { GetByIdCarsController } from '../../../../modules/cars/presentation/get-car-byId.controller'
import { GetCarsController } from '../../../../modules/cars/presentation/get-cars.controller'
import { UpdateCarsController } from '../../../../modules/cars/presentation/update-car.controller'
import { DeleteByIdCarsController } from '../../../../modules/cars/presentation/delete-carById.controller'

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