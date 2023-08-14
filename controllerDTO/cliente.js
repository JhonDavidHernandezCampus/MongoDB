var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
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
export class Cliente {
    constructor(data) {
        Object.assign(this, data);
        this.ID_Cliente = 0,
            this.Nombre = "clase",
            this.Apellido = "clase",
            this.DNI = "1ac",
            this.Direccion = "1si",
            this.Telefono = "112431",
            this.Email = "1json@gamil.pcm";
    }
}
__decorate([
    Expose({ name: 'cc' }),
    IsDefined({ message: () => { throw { status: 422, message: `La cedula del usuario es hobligatoria` }; } }),
    __metadata("design:type", Number)
], Cliente.prototype, "ID_Cliente", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: () => { throw { status: 422, message: `El nombre del cliente debe ser hobligatorio` }; } }),
    __metadata("design:type", String)
], Cliente.prototype, "Nombre", void 0);
__decorate([
    Expose({ name: "apellido" }),
    IsDefined({ message: () => { throw { status: 422, message: `El apellido del cliente debe ser hobligatoria` }; } }),
    __metadata("design:type", String)
], Cliente.prototype, "Apellido", void 0);
__decorate([
    Expose({ name: 'DNII' }),
    IsDefined({ message: () => { throw { status: 422, message: `El DNI del cliente debe ser hobligatorio` }; } })
    /* @Transform(({ value })=>{
        if(/^[a-z A-Z]+[0-9]+$/.test(value))return value;
        else throw {status:400,message:"El parametro DNI no cumple con los parametros establesidos"}
    }) */
    ,
    __metadata("design:type", String)
], Cliente.prototype, "DNI", void 0);
__decorate([
    Expose({ name: 'direccion' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro direccion es hobligatoria" }; } })
    /*  @Transform(({value})=>{
         if(/^[0-9]+[a-zA-Z0-9\s\-\,]+$/.test(value)) return value; else throw {status:400,message:"El parametro direccion no cumple con los parametros establesidos"}
     }) */
    ,
    __metadata("design:type", String)
], Cliente.prototype, "Direccion", void 0);
__decorate([
    Expose({ name: 'telefono' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro telefono es hobligatorio" }; } })
    /* @Transform(({value})=>{
        if(/^[0-9]+$/.test(value)) return value; else throw {status:400,message:"El parametro telefono no cumple con los parametros establesidos"}
    }) */
    ,
    __metadata("design:type", String)
], Cliente.prototype, "Telefono", void 0);
__decorate([
    Expose({ name: 'email' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro email debe ser hobligatorio" }; } })
    /*  @Transform(({value})=>{
         if(/\S+@\S+\.\S+/.test(value)) return value; else throw {status:400, message: "El parametro email no cumple con los parametros establesidos"}
     }) */
    ,
    __metadata("design:type", String)
], Cliente.prototype, "Email", void 0);
