import Express from "express";

const validate = Express.Router();

let validateID = (req,res,next)=>{
    let id = req.params.id;
    if (isNaN(id) || parseInt(id) < 0) {
        res.status(400).send({status:400,message:"El parametro enviado no es valido"});
    }else{
        next();
    }
}

export {
    validateID,
};