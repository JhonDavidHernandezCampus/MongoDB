import { Expose, Transform  } from "class-transformer";
import { IsDefined } from "class-validator";

/* 
{
    "cc": 1,
    "nombre": "Jhon",
    "apellido": "Hernandez",
    "DNI": "SAL-122",
    "direccion": "calle 23 - 2",
    "telefono": "433212121",
    "email": "Email1.email.com.co"
}
*/

export class Cliente{
    @Expose({name: 'cc'})
    @IsDefined({message: ()=>{ throw {status: 422, message: `La cedula del usuario es hobligatoria`}}})
    ID_Cliente:number;

    @Expose({name:'nombre'})
    @IsDefined({message: ()=>{ throw { status:422, message:`El nombre del cliente debe ser hobligatorio`}}})
    Nombre:string;

    @Expose({name:"apellido"})
    @IsDefined({message: ()=>{throw { status:422, message:`El apellido del cliente debe ser hobligatoria`}}})
    Apellido:string;
    
    @Expose({name: 'DNI'})
    @IsDefined({message: ()=>{throw {status:422,message:`El DNI del cliente debe ser hobligatorio`}}})
    /* @Transform(({ value })=>{
        if(/^[a-z A-Z]+[0-9]+$/.test(value))return value;
        else throw {status:400,message:"El parametro DNI no cumple con los parametros establesidos"}
    }) */
    DNI:string

    @Expose({name:'direccion'})
    @IsDefined({message: ()=>{throw { status:422,message:"El parametro direccion es hobligatoria"}}})
   /*  @Transform(({value})=>{
        if(/^[0-9]+[a-zA-Z0-9\s\-\,]+$/.test(value)) return value; else throw {status:400,message:"El parametro direccion no cumple con los parametros establesidos"}
    }) */
    Direccion:string;

    @Expose({name:'telefono'})
    @IsDefined({message: ()=>{throw {status:422, message:"El parametro telefono es hobligatorio"}}})
    /* @Transform(({value})=>{
        if(/^[0-9]+$/.test(value)) return value; else throw {status:400,message:"El parametro telefono no cumple con los parametros establesidos"}
    }) */
    Telefono:string;

    @Expose({name:'email'})
    @IsDefined({message: ()=>{throw { status:422, message:"El parametro email debe ser hobligatorio"}}})
   /*  @Transform(({value})=>{
        if(/\S+@\S+\.\S+/.test(value)) return value; else throw {status:400, message: "El parametro email no cumple con los parametros establesidos"}
    }) */
    Email:string;
    constructor(data:Partial<Cliente>){
        Object.assign(this,data);
        this.ID_Cliente=0,
        this.Nombre = "clase",
        this.Apellido = "clase",
        this.DNI = "1ac",
        this.Direccion = "1si",
        this.Telefono = "112431",
        this.Email = "1json@gamil.pcm"
    }
/* 
    constructor(
        ID_Cliente:number,
        Nombre:string,
        Apellido:string,
        DNI:string,
        Direccion:string,
        Telefono:string,
        Email:string
    ){
        this.ID_Cliente = ID_Cliente,
        this.Nombre = Nombre,
        this.Apellido = Apellido,
        this.DNI = DNI,
        this.Direccion = Direccion,
        this.Telefono = Telefono,
        this.Email = Email
    } */


}