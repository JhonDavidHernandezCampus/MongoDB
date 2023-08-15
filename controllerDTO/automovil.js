var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
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
export class Automovil {
    constructor(data) {
        Object.assign(this, data);
        this.ID_Automovil = 1,
            this.Marca = "f",
            this.Modelo = "12";
        this.Anio = "2000",
            this.Tipo = "dc",
            this.Capacidad = 2,
            this.Precio_Diario = 230221;
    }
}
__decorate([
    Expose({ name: 'ID_Automovil' }),
    IsDefined({ message: () => { throw { status: 422, message: `La ID_Automovil del usuario es hobligatoria` }; } }),
    __metadata("design:type", Number)
], Automovil.prototype, "ID_Automovil", void 0);
__decorate([
    Expose({ name: 'Marca' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Marca del cliente debe ser hobligatorio` }; } }),
    __metadata("design:type", String)
], Automovil.prototype, "Marca", void 0);
__decorate([
    Expose({ name: "Modelo" }),
    IsDefined({ message: () => { throw { status: 422, message: `El apellido del cliente debe ser hobligatoria` }; } }),
    __metadata("design:type", String)
], Automovil.prototype, "Modelo", void 0);
__decorate([
    Expose({ name: 'Anio' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Modelo del cliente debe ser hobligatorio` }; } }),
    __metadata("design:type", String)
], Automovil.prototype, "Anio", void 0);
__decorate([
    Expose({ name: 'Tipo' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parameAniotro Tipo es hobligatoria" }; } }),
    __metadata("design:type", String)
], Automovil.prototype, "Tipo", void 0);
__decorate([
    Expose({ name: 'Capacidad' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro Capacidad es hobligatorio" }; } }),
    __metadata("design:type", Number)
], Automovil.prototype, "Capacidad", void 0);
__decorate([
    Expose({ name: 'Precio_Diario' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro Precio_Diario debe ser hobligatorio" }; } }),
    __metadata("design:type", Number)
], Automovil.prototype, "Precio_Diario", void 0);
