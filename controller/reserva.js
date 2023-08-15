import { Router } from "express";
import {conx} from './../db/db.js';
import {limit} from './../middleware/limit.js';
import { verify, DTOData } from "./../middleware/verifyData.js";

const router = Router();

const db = await conx();
const cliente = db.collection("cliente");
const reserva = db.collection("reserva");

// 5. Mostrar todas las reservas pendientes con los datos del cliente
// y el automóvil reservado.

router.get('/', limit(),async (req,res)=>{
    let result = await reserva.aggregate([
        {
            $lookup:{
                from:'cliente',
                localField:'ID_Cliente_id',
                foreignField:'ID_Cliente',
                as:'Cliente_FK'
            }
        },
        {
            $lookup:{
                from:'automovil',
                localField:'ID_Automovil_id',
                foreignField:'ID_Automovil',
                as:'Automovil_FK'
            }
        },
        {
            $unwind: "$Cliente_FK"
        },
        {
            $unwind: "$Automovil_FK"
        },
        {
            $match:{Estado:"Pendiente"}
        }
    ]).toArray();
    res.send(result);
    
});


export default router;
