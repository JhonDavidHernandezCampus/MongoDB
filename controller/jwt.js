import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import dotenv from 'dotenv';
import { Router } from 'express';
import { SignJWT, jwtVerify } from 'jose';
import { Sucursal } from './../controllerDTO/sucursal.js';

const clases = {
    Sucursal,
}

dotenv.config("../");
const JWT = Router();

JWT.use('/:collection', async(req,res)=>{
    try {
        let collection = (clases.hasOwnProperty(req.params.collection))?req.params.collection:null;
        console.log(clases[req.params.collection]);

        let instan = plainToClass(clases[req.params.collection],{},{ignoreDecorators:true});
        const encoder = new TextEncoder();
        const jwtConstructor = new SignJWT(Object.assign({},classToPlain(instan)));
        const jwt = await jwtConstructor
        .setProtectedHeader({alg:"HS256", typ:"JWT"})
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(encoder.encode(process.env.CLAVE_FIRMA));
        req.data = jwt;
        res.status(201).send({status: 201, message: jwt});
    } catch (error) {
        console.log(error);
        res.status(404).send({status: 404, message: "Token solicitado no valido"});
    }
})



export {
    JWT
};