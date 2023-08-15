import { Expose, Transform } from 'class-transformer';
import { IsDefined } from 'class-validator';

/* 
  {
    ID_Reserva_id: 6,
    ID_Cliente_id: 6,
    ID_Automovil_id: 6,
    Fecha_Reserva: "2023-12-01T05:00:00.000Z",
    Fecha_Inicio: "2023-12-01T05:00:00.000Z",
    Fecha_Fin: "2023-12-01T05:00:00.000Z",
    Estado: "Bueno"
  }

*/

export class Reserva{

    @Expose({name: 'ID_Reserva_id'})
    @IsDefined({message: ()=>{ throw {status: 422, message: `La ID_Reserva_id del usuario es hobligatoria`}}})
    ID_Reserva_id:number;

    @Expose({name:'ID_Cliente_id'})
    @IsDefined({message: ()=>{ throw { status:422, message:`El ID_Cliente_id del cliente debe ser hobligatorio`}}})
    ID_Cliente_id:number;

    @Expose({name:"ID_Automovil_id"})
    @IsDefined({message: ()=>{throw { status:422, message:`El ID_Automovil_id del cliente debe ser hobligatoria`}}})
    ID_Automovil_id:number;
    
    @Expose({name: 'Fecha_Reserva'})
    @IsDefined({message: ()=>{throw {status:422,message:`El Fecha_Reserva del cliente debe ser hobligatorio`}}})
    Fecha_Reserva:string

    @Expose({name:'Fecha_Inicio'})
    @IsDefined({message: ()=>{throw { status:422,message:"El parameAniotro Fecha_Inicio es hobligatoria"}}})
    Fecha_Inicio:string;

    @Expose({name:'Fecha_Fin'})
    @IsDefined({message: ()=>{throw {status:422, message:"El parametro Fecha_Fin es hobligatorio"}}})
    Fecha_Fin:string;

    @Expose({name:'Estado'})
    @IsDefined({message: ()=>{throw { status:422, message:"El parametro Estado debe ser hobligatorio"}}})
    Estado:string;

    constructor(data: Partial<Reserva>){
        Object.assign(this, data);
        this.ID_Reserva_id = 1,
        this.ID_Cliente_id = 1,
        this.ID_Automovil_id = 1,
        this.Fecha_Reserva = "2000",
        this.Fecha_Inicio = "dc",
        this.Fecha_Fin = "2",
        this.Estado = "230221"
    }
} 