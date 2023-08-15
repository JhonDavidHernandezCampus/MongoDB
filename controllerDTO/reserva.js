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
export class Reserva {
    constructor(data) {
        Object.assign(this, data);
        this.ID_Reserva_id = 1,
            this.ID_Cliente_id = 1,
            this.ID_Automovil_id = 1,
            this.Fecha_Reserva = "2000",
            this.Fecha_Inicio = "dc",
            this.Fecha_Fin = "2",
            this.Estado = "230221";
    }
}
__decorate([
    Expose({ name: 'ID_Reserva_id' }),
    IsDefined({ message: () => { throw { status: 422, message: `La ID_Reserva_id del usuario es hobligatoria` }; } }),
    __metadata("design:type", Number)
], Reserva.prototype, "ID_Reserva_id", void 0);
__decorate([
    Expose({ name: 'ID_Cliente_id' }),
    IsDefined({ message: () => { throw { status: 422, message: `El ID_Cliente_id del cliente debe ser hobligatorio` }; } }),
    __metadata("design:type", Number)
], Reserva.prototype, "ID_Cliente_id", void 0);
__decorate([
    Expose({ name: "ID_Automovil_id" }),
    IsDefined({ message: () => { throw { status: 422, message: `El ID_Automovil_id del cliente debe ser hobligatoria` }; } }),
    __metadata("design:type", Number)
], Reserva.prototype, "ID_Automovil_id", void 0);
__decorate([
    Expose({ name: 'Fecha_Reserva' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Fecha_Reserva del cliente debe ser hobligatorio` }; } }),
    __metadata("design:type", String)
], Reserva.prototype, "Fecha_Reserva", void 0);
__decorate([
    Expose({ name: 'Fecha_Inicio' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parameAniotro Fecha_Inicio es hobligatoria" }; } }),
    __metadata("design:type", String)
], Reserva.prototype, "Fecha_Inicio", void 0);
__decorate([
    Expose({ name: 'Fecha_Fin' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro Fecha_Fin es hobligatorio" }; } }),
    __metadata("design:type", String)
], Reserva.prototype, "Fecha_Fin", void 0);
__decorate([
    Expose({ name: 'Estado' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro Estado debe ser hobligatorio" }; } }),
    __metadata("design:type", String)
], Reserva.prototype, "Estado", void 0);
