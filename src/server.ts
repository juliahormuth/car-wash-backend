import express, { NextFunction, Request, Response } from  'express';
import "reflect-metadata";
import cors from 'cors';
import 'express-async-errors';


import { router } from './shared/infra/http/routes';

import "./shared/container";

import "./shared/infra/database";

import { AppError } from './shared/errors/AppError'
const app =  express();


 app.use(express.json());

app.use(cors());

 
 app.use(router);

 app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
   if(err instanceof AppError) {
       return response.status(err.statusCode).json({message: err.message}) 
   }
        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        })
 });

app.listen(3333, () => console.log("The server is running!"));