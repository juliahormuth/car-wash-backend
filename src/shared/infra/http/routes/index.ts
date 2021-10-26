import { Router } from 'express';


import { employeesRouter } from './employees.routes'


const router = Router();


//router.use("/categories", categoriesRoutes);
//router.use("/specifications", specificationsRoutes);
//router.use("/users", usersRouter);
//router.use(authenticateRoutes);

router.use('/employees',employeesRouter)

export { router };