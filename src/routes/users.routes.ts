import { Router } from 'express';

import { CreateUserController } from '../modules/accounts/useCases/CreateUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/UpdateUserVatar/UpdateUserAvatarController';
import uploadConfig from '../config/upload';
import multer from 'multer';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouter.post('/', createUserController.handle)

usersRouter.patch(
'/avatar', 
ensureAuthenticated, 
uploadAvatar.single("avatar"),
updateUserAvatarController.handle
);


export { usersRouter }