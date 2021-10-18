import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';


export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new Error("Token missing");
    }

    const [, token] = authHeader.split(" ")
    
    try{
   const { sub } = verify(token, "a50a9aa79697dce0979b2ddcc960ac3a");
   console.log(sub)
   next();
    } catch {
        throw new Error ( "Invalid token!");
    }
}