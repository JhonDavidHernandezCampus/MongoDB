import Express, { Router }  from "express";
import cliente from './../controller/cliente.js';
import { JWT,JWTVerify } from './../controller/jwt.js';

let Routes = Express();

Routes.use('/cliente',JWTVerify,cliente);
Routes.use('/token', JWT);


export default Routes;