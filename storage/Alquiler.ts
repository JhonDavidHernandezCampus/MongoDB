import { Expose, Transform } from 'class-transformer';
import { IsDefined } from 'class-validator';

/* 
  {
    ID_Alquiler: 1,
    ID_Cliente: 1,
    ID_Automovil: 1,
    Fecha_Inicio: "2020-12-12T00:00:00.000Z",
    Fecha_Fin: "2020-12-15T00:00:00.000Z",
    Costo_Total: 2000.1,
    Estado: "Libre"
  },
*/

export class Alquiler{
    @Expose({name: 'ID_Alquiler'})
    @IsDefined({message: ()=>{ throw {status: 422, message: `La ID_Alquiler del usuario es hobligatoria`}}})
    ID_Alquiler:number;

    @Expose({name:'ID_Cliente'})
    @IsDefined({message: ()=>{ throw { status:422, message:`El ID_Cliente del cliente debe ser hobligatorio`}}})
    ID_Cliente:number;

    @Expose({name:"ID_Automovil"})
    @IsDefined({message: ()=>{throw { status:422, message:`El ID_Automovil del cliente debe ser hobligatoria`}}})
    ID_Automovil:number;
    
    @Expose({name: 'Fecha_Inicio'})
    @IsDefined({message: ()=>{throw {status:422,message:`El Fecha_Inicio del cliente debe ser hobligatorio`}}})
    Fecha_Inicio:string

    @Expose({name:'Fecha_Fin'})
    @IsDefined({message: ()=>{throw { status:422,message:"El parametro Fecha_Fin es hobligatoria"}}})
    Fecha_Fin:string;

    @Expose({name:'Costo_Total'})
    @IsDefined({message: ()=>{throw {status:422, message:"El parametro Costo_Total es hobligatorio"}}})
    Costo_Total:number;

    @Expose({name:'Estado'})
    @IsDefined({message: ()=>{throw { status:422, message:"El parametro Estado debe ser hobligatorio"}}})
    Estado:number;

    constructor(data: Partial<Alquiler>){
        Object.assign(this, data);
        this.ID_Alquiler = 1,
        this.ID_Cliente = 1,
        this.ID_Automovil = 1
        this.Fecha_Inicio = "2000",
        this.Fecha_Fin = "dc",
        this.Costo_Total = 2,
        this.Estado = 230221
    }
}