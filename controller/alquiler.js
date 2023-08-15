import { Router } from "express";
import {conx} from './../db/db.js';
import {limit} from './../middleware/limit.js';
import { verify, DTOData } from "./../middleware/verifyData.js";

const router = Router();

const db = await conx();
const cliente = db.collection("cliente");
const alquiler = db.collection("alquiler");

// 4. Listar todos los alquileres activos junto con los datos de los 
// clientes relacionados. 
router.get('/', limit(),verify,async(req,res)=>{
    try {
        let result = await cliente.aggregate([
            {
                $lookup:{
                    from:"alquiler",
                    localField:"ID_Cliente",
                    foreignField:"ID_Alquiler",
                    as: "Alquiler_FK"
                }
            },
            {
                $project:{
                    "Alquiler_FK._id":0,
                    "Alquiler_FK.ID_Cliente":0,
                    "Alquiler_FK.ID_Alquiler":0,
                    "Alquiler_FK.ID_Automovil":0
                }
            },
            {
                $unwind: "$Alquiler_FK"
            },
            {
                $match:{
                    "Alquiler_FK.Estado":{$eq: "Libre"}
                }
            }
        ]).toArray();

        res.send(result);
    } catch (error) {
        res.status(400).send(error);
    }
});







export default router;