import express from  'express';
import swaggerUi from 'swagger-ui-express';
import "reflect-metadata";

import swaggerFile from './swagger.json';

import { router } from './routes';

import "./shared/container";

import "./database";

const app =  express();


 app.use(express.json());


 app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
 
 app.use(router);


app.listen(3333, () => console.log("The server is running!"));