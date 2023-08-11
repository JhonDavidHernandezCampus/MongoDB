import express  from "express";
import { conx } from "./../db/db.js";
import  {limit}  from "./../limit/limit.js";

const router = express.Router();

router.get('/',limit(),async(req,res)=>{
    try {
        console.log(req.rateLimit, "esto es");
        let db = await conx();
        let cliente = db.collection("cliente");
        let result = await cliente.find().toArray();
        res.send(result);   
    } catch (error) {
        console.error("Error en la consulta de los datos de los clientes:", error);
        res.status(500).send({Message:"Hubo un error al obtener los datos de los clientes."});
    }
});

export default router;