import express  from "express";
import mongodb from 'mongodb';
import { conx } from "./../db/db.js";

const router = express.Router();

router.get('/mostrar', async(req,res)=>{
    try {
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