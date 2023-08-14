import { Router } from "express";
import {conx} from './../db/db.js';
import {limit} from './../middleware/limit.js';
import { verify, DTOData } from "./../middleware/verifyData.js";

const router = Router();

const db = await conx();
const automovil = db.collection('automovil');

router.get('/disponibles',limit(), verify, async(req,res)=>{
    try {
        let result = await automovil
    } catch (error) {
        
    }
});


export default router
;