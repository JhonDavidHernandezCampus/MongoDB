import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import { Validate } from 'class-validator';
import {DTO} from './../controller/jwt.js';   
import { Router } from 'express';

const verify = Router();
const DTOData = Router();

verify.use((req,res,next)=>{
    if(!req.rateLimit) return;
    /* let { payload } = req.data;
    console.log(req.data);
    const {iat,exp, ...newpayload} = payload;

    console.log(payload, "Este es payload");
    console.log(newpayload, "Este es newpayload");

    payload = newpayload; */
    next();
});

DTOData.use((req,res,next)=>{

});


export {
    verify,
    DTOData,
};

