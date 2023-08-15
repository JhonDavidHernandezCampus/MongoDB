import express  from "express";
import { conx } from "./../db/db.js";
import  {limit}  from "../middleware/limit.js";
import { verify , DTOData } from './../middleware/verifyData.js';
const router = express.Router();

let db = await conx();
let cliente = db.collection("cliente");

router.get('/',limit(), verify , async(req,res)=>{
    try {
        let result = await cliente.find().toArray();
        res.send(result);   
    } catch (error) {
        console.error("Error en la consulta de los datos de los clientes:", error);
        res.status(500).send({Message:"Hubo un error al obtener los datos de los clientes."});
    }
});

router.post('/', DTOData,(req, res)=>{
    
})

export default router;