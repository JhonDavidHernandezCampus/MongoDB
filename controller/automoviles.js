import { Router } from "express";
import {conx} from './../db/db.js';
import {limit} from './../middleware/limit.js';
import { verify, DTOData } from "./../middleware/verifyData.js";

const router = Router();

const db = await conx();
const automovil = db.collection("automovil");
const alquiler = db.collection("alquiler");


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


export default router;