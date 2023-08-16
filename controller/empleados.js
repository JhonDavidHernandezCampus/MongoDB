import { Router } from "express";
import {conx} from './../db/db.js';
import {limit} from './../middleware/limit.js';
import {validateID} from './../middleware/validateID.js';
import { verify, DTOData } from "./../middleware/verifyData.js";


const router = Router();

const db = await conx();
const empleado = db.collection("empleado");
const alquiler = db.collection("alquiler");


// 7. Listar los empleados con el cargo de "Vendedor".
// use('db_campus_alquiler');
// db.empleado.find({Cargo:"Vendedor"});

router.get('/',limit(),verify, async (req,res)=>{
    try {
        let result = await empleado.find({Cargo:"Vendedor"}).toArray();
        res.send(result);
    } catch (error){
        res.status(400).send({error:error});
    }
});




export default router;
