import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";

/* 
    {   
        "ID_Empleado": 2,
        "Nombre": "Sebastian_2",
        "Apellido": "Hernandez_2",
        "DNI": "asd-22",
        "Direccion": "Sentenario-122-22",
        "Telefono": "3224729192",
        "Cargo": "Empleado_2"
    },
*/

export class Empleado{
    @Expose({name: 'ID_Empleado'})
    @IsDefined({message: ()=>{ throw {status: 422, message: `La ID_Empleado del usuario es hobligatoria`}}})
    ID_Empleado:number;

    @Expose({name:'Nombre'})
    @IsDefined({message: ()=>{ throw { status:422, message:`El Nombre del empleado debe ser hobligatorio`}}})
    Nombre:string;

    @Expose({name:"Apellido"})
    @IsDefined({message: ()=>{throw { status:422, message:`El Apellido del empleado debe ser hobligatoria`}}})
    Apellido:string;
    
    @Expose({name: 'DNI'})
    @IsDefined({message: ()=>{throw {status:422,message:`El DNI del empleado debe ser hobligatorio`}}})
    DNI:string

    @Expose({name:'Direccion'})
    @IsDefined({message: ()=>{throw { status:422,message:"El parameAniotro Direccion es hobligatoria"}}})
    Direccion:string;

    @Expose({name:'Telefono'})
    @IsDefined({message: ()=>{throw {status:422, message:"El parametro Telefono es hobligatorio"}}})
    Telefono:number;

    @Expose({name:'Cargo'})
    @IsDefined({message: ()=>{throw { status:422, message:"El parametro Cargo debe ser hobligatorio"}}})
    Cargo:string;

    constructor(data: Partial<Empleado>){
        Object.assign(this, data);
        this.ID_Empleado = 1,
        this.Nombre = "f",
        this.Apellido = "12"
        this.DNI = "2000",
        this.Direccion = "dc",
        this.Telefono = 2,
        this.Cargo = "Directivo"
    }
}