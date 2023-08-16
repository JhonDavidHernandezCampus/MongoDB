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


export default router;