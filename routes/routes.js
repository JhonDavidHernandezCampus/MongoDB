import Express, { Router }  from "express";
import cliente from './../controller/cliente.js';

let Routes = Express();

Routes.use('/cliente',cliente);


export default Routes;