import { Router } from 'express';

import { CreateUserController } from '../modules/accounts/useCases/CreateUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/UpdateUserVatar/UpdateUserAvatarController';

const usersRouter = Router();

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouter.post('/', createUserController.handle)

usersRouter.patch('/avatar', updateUserAvatarController.handle)


export { usersRouter }