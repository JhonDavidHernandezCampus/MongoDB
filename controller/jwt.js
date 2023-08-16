import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import dotenv from 'dotenv';
import { Router } from 'express';
import { SignJWT, jwtVerify } from 'jose';
import { Sucursal } from './../controllerDTO/sucursal.js';
import {Reserva} from './../controllerDTO/reserva.js';
import { Cliente } from './../controllerDTO/cliente.js';
import { Automovil} from './../controllerDTO/automovil.js';
import { Alquiler } from './../controllerDTO/Alquiler.js';
import { Empleado } from './../controllerDTO/empleado.js';


dotenv.config("../");
const JWT = Router();
const JWTVerify = Router();

const DTO = (p1) =>{
    const match = {
        'Sucursal': Sucursal,
        'Reserva': Reserva,
        'Cliente': Cliente,
        'Automovil': Automovil,
        'Alquiler': Alquiler,
        'Empleado': Empleado
    };  
    const instan = match[p1];
    if(!instan) throw {status:404, message:"Token que solisita no es valido"}
    return {atributos: plainToClass(instan, {},{ ignoreDecorators:true }), class: instan}
    
};

JWT.use('/:collection', async(req,res)=>{
    try {
        let instan = DTO(req.params.collection).atributos;
        //console.log(instan);
        const encoder = new TextEncoder();
        const jwtConstructor = new SignJWT(Object.assign({},classToPlain(instan)));
        const jwt = await jwtConstructor
        .setProtectedHeader({alg:"HS256", typ:"JWT"})
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(encoder.encode(process.env.CLAVE_FIRMA));
        req.data = jwt;
        // console.log(req.data, "constructor");
        res.status(201).send({status: 201, message: jwt});
    } catch (error) {
        res.status(404).send({status: 404, message: error});
    }
});

JWTVerify.use('/', async(req, res, next)=>{
    const { authorization } = req.headers;
    if(!authorization) return res.status(400).send({status:400,token:"Token de autorizacion faltante"});
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.CLAVE_FIRMA)
        );
        req.data =  jwtData;
        next();
    }catch(error){
        res.status(498).send({status:498,Message:"Token caducado o contaminado"});
    }
});

export {
    JWT,
    JWTVerify,
    DTO
};