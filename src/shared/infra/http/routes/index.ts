import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';

import { categoriesRoutes } from './categories.routes';

import { specificationsRoutes } from './specifications.routes';

import { usersRouter } from './users.routes';

import { employeesRouter } from './employees.routes'


const router = Router();


//router.use("/categories", categoriesRoutes);
//router.use("/specifications", specificationsRoutes);
//router.use("/users", usersRouter);
//router.use(authenticateRoutes);

router.use('/employees',employeesRouter)

export { router };