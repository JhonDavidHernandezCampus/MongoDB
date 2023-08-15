import { Expose, Transform } from 'class-transformer';
import { IsDefined } from 'class-validator';

/* 
    ID_Automovil: 1,
    Marca: "Chebrolet",
    Modelo: "ZQ 12000",
    Anio: "2023",
    Tipo: "Camioneta",
    Capacidad: 7,
    Precio_Diario: 120000.2
*/

export class Automovil{
    @Expose({name: 'ID_Automovil'})
    @IsDefined({message: ()=>{ throw {status: 422, message: `La ID_Automovil del usuario es hobligatoria`}}})
    ID_Automovil:number;

    @Expose({name:'Marca'})
    @IsDefined({message: ()=>{ throw { status:422, message:`El Marca del cliente debe ser hobligatorio`}}})
    Marca:string;

    @Expose({name:"Modelo"})
    @IsDefined({message: ()=>{throw { status:422, message:`El apellido del cliente debe ser hobligatoria`}}})
    Modelo:string;
    
    @Expose({name: 'Anio'})
    @IsDefined({message: ()=>{throw {status:422,message:`El Modelo del cliente debe ser hobligatorio`}}})
    Anio:string

    @Expose({name:'Tipo'})
    @IsDefined({message: ()=>{throw { status:422,message:"El parameAniotro Tipo es hobligatoria"}}})
    Tipo:string;

    @Expose({name:'Capacidad'})
    @IsDefined({message: ()=>{throw {status:422, message:"El parametro Capacidad es hobligatorio"}}})
    Capacidad:number;

    @Expose({name:'Precio_Diario'})
    @IsDefined({message: ()=>{throw { status:422, message:"El parametro Precio_Diario debe ser hobligatorio"}}})
    Precio_Diario:number;

    constructor(data: Partial<Automovil>){
        Object.assign(this, data);
        this.ID_Automovil = 1,
        this.Marca = "f",
        this.Modelo = "12"
        this.Anio = "2000",
        this.Tipo = "dc",
        this.Capacidad = 2,
        this.Precio_Diario = 230221
    }
}