import express  from "express";
import { conx } from "./../db/db.js";
import  {limit}  from "../middleware/limit.js";
import { verify , DTOData } from './../middleware/verifyData.js';
const router = express.Router();

let db = await conx();
let cliente = db.collection("cliente");
let reserva = db.collection("reserva");

router.get('/',limit(), verify , async(req,res)=>{
    try {
        let result = await cliente.find().toArray();
        res.send(result);   
    } catch (error) {
        console.error("Error en la consulta de los datos de los clientes:", error);
        res.status(500).send({Message:"Hubo un error al obtener los datos de los clientes."});
    }
});


// 10.Listar los clientes con el DNI específico.
// http://127.121.12.10:9110/Cliente/espesifico/SAL-123

router.get('/espesifico/:dni', limit(),verify, async(req, res)=>{
    try {
        let dni = req.params.dni;
        let result = await cliente.find({DNI:dni}).toArray();
        res.send(result);
    } catch (error) {
        res.status(500).send({error:error});
    }
    
});

// 15.Obtener los datos de los clientes que realizaron al menos un
// alquiler.

//http://127.121.12.10:9110/Cliente/alquiler
router.get('/alquiler',limit(),verify, async(req,res)=>{
    try {
        let result = await cliente.aggregate([
            {
                $lookup: {
                    from: "alquiler",
                    localField: "ID_Cliente",
                    foreignField: "ID_Cliente",
                    as: "FK_Alquiler"
                }
            },
            {
                $match: { "FK_Alquiler":{$ne:[]} }
            },
            {
                $project:{
                    FK_Alquiler:0,
                    _id:0
                }
            }
        ]).toArray();
        res.send(result);
    } catch (error) {
        res.status(500).send({error:error});
        
    }
});

// 20.Obtener los datos del cliente que realizó la reserva con un
// Automovil espesifico
// http://127.121.12.10:9110/Alquiler/intervalo
router.get('/reserva',limit(),verify,async(req,res)=>{
    try {
        let result = await reserva.aggregate([
            {
                $match: { ID_Automovil_id:1 }
            },
            {
                $lookup: {
                    from: "cliente",
                    localField: "ID_Cliente_id",
                    foreignField: "ID_Cliente",
                    as: "FK_Cliente"
                }
            },
            {
                $unwind: "$FK_Cliente"
            }
        ]).toArray();
        res.send(result);
    } catch (error) {
        res.status(500).send({error:error});
    }
});



export default router;