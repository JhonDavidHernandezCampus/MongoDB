import { Router } from "express";
import {conx} from './../db/db.js';
import {limit} from './../middleware/limit.js';
import { verify, DTOData } from "./../middleware/verifyData.js";

const router = Router();

const db = await conx();
const cliente = db.collection("cliente");
const reserva = db.collection("reserva");

router.get('/', limit(),async (req,res)=>{
    let result = await reserva.find().toArray();
    res.send(result);
});


export default router;
