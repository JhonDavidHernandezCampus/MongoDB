import Express, { Router }  from "express";
import cliente from './../controller/cliente.js';
import automovil from './../controller/automoviles.js';
import alquiler from "./../controller/alquiler.js"
import reserva from './../controller/reserva.js';
import { JWT,JWTVerify } from './../controller/jwt.js';

let Routes = Express();

Routes.use('/Cliente',JWTVerify, cliente);
Routes.use('/Automovil', JWTVerify , automovil);
Routes.use('/Alquiler', JWTVerify, alquiler)
Routes.use('/Reserva', JWTVerify,reserva);
Routes.use('/token', JWT);


export default Routes;