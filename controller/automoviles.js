import { Router } from "express";
import {conx} from './../db/db.js';
import {limit} from './../middleware/limit.js';
import { verify, DTOData } from "./../middleware/verifyData.js";

const router = Router();

const db = await conx();
const automovil = db.collection("automovil");
const sucursal_automovil = db.collection("sucursal_automovil");
const sucursal = db.collection("sucursal");



// 3. Obtener todos los automóviles disponibles para alquiler.
router.get('/disponibles',limit(), verify,async(req,res)=>{
    try {
        //let result = await alquiler.find({Estado:"Libre"}).toArray();
        let result = await alquiler.aggregate([
            {
                $lookup:{
                    from:'automovil',
                    localField:'ID_Alquiler',
                    foreignField:'ID_Automovil',
                    as: "Automovil_FK"
                }
            },
            {
                $match: {
                    "Estado" : {$eq: "Libre"}
                }
            },
            {
                $unwind: "$Automovil_FK"
            }
        ]).toArray();

        res.send(result);
    } catch (error) {
        
    }
});


// 8. Mostrar la cantidad total de automóviles disponibles en cada
// sucursal.
router.get('/sucursal',limit(), verify,async (req,res)=>{
    try {
        
        let result = await sucursal_automovil.aggregate([
            {
                $lookup:{
                    from:"sucursal",
                    localField:"ID_Sucursal",
                    foreignField:"ID_Sucursal",
                    as:"Sucursal_FK"
                }
            },
            {
                $unwind:"$Sucursal_FK"
            },
            {
                $group:{
                    _id:"$_id",
                    Nombre:{$first:"$Sucursal_FK.Nombre"},
                    Direccion: { $first:"$Sucursal_FK.Direccion"},
                    Cantidad_Total_Automoviles:{$sum:"$Cantidad_Disponible"},
        
                }
            },
            {
                $project: {
                    _id:1,
                    Nombre:1,
                    Cantidad_Total_Automoviles:1,
                    Direccion:1
                }
            }
        ]).toArray();

        res.send(result)
    } catch (error) {
        res.status(400).send({status:400, mesagge:error});
    }
});

// 11.Mostrar todos los automóviles con una capacidad mayor a 5
// personas.
//use("db_campus_alquiler");
//db.automovil.find({Capacidad : { $gt : 5}});

router.get('/capacidad',limit(), verify, async(req,res)=>{
    try {
        let result = await automovil.find({Capacidad : { $gt : 5}}).toArray();
        res.send(result);
    } catch (error) {
        res.status(400).send({status:400,message:error});
    }
});

// 16.Listar todos los automóviles ordenados por marca y modelo.
// http://127.121.12.10:9110/Automovil/orden
router.get('/orden', limit(), verify,async(req,res)=>{
    try {
        let result = await automovil.find().sort({Marca:1, Modelo:1}).toArray();
        res.send(result);
    } catch (error) {
        res.status(400).send({status:400,message:error});
    }
});

//17.Mostrar la cantidad total de automóviles en cada sucursal junto
// con su dirección.
//  http://127.121.12.10:9110/Automovil/total

router.get('/total',limit(),verify,async(req,res)=>{
    try {
        let result = await sucursal.aggregate([
            {    
                $lookup: {
                    from: "sucursal_automovil",
                    localField: "ID_Sucursal",
                    foreignField: "ID_Sucursal",
                    as: "FK_Sucursal_Auto" 
                }
            },
            {
                $unwind: "$FK_Sucursal_Auto"
            },
            {
                $group: {
                    _id:"$_id",
                    Nombre:{$first:"$Nombre"},
                    Direccion:{$first:"$Direccion"},
                    Cantidad_Autos:{$sum:"$FK_Sucursal_Auto.Cantidad_Disponoble"}
                }
            },
            {
                $project: {
                    _id: 1,
                    Nombre: 1,
                    Direccion: 1,
                    Cantidad_Autos: 1
                }
            }
        ]).toArray();
        res.send(...result);
    } catch (error) {
        res.status(400).send({status:400,message:error});
    }
});

// 19.Mostrar los automóviles con capacidad igual a 5 personas y que
// estén disponibles.

//http://127.121.12.10:9110/Automovil/capadisponibles

router.get('/capadisponibles',limit(), verify,async(req,res)=>{
    try {
        let result = await automovil.aggregate([
            {
                $lookup: {
                    from: "reserva",
                    localField: "ID_Automovil",
                    foreignField: "ID_Automovil_id",
                    as: "FK_Reserva"
                }
            },
            {
                $unwind: "$FK_Reserva"
            },
            {
                $match: {
                    "FK_Reserva.Estado": "Libre",
                    "Capacidad":5
                }
            }
        ]).toArray();
        res.send(result);
    } catch (error) {
        res.status(400).send({status:400,message:error});
    }
});


export default router;