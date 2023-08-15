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
    ID_Alquiler: 1,
    ID_Cliente: 1,
    ID_Automovil: 1,
    Fecha_Inicio: "2020-12-12T00:00:00.000Z",
    Fecha_Fin: "2020-12-15T00:00:00.000Z",
    Costo_Total: 2000.1,
    Estado: "Libre"
  },
*/
export class Alquiler {
    constructor(data) {
        Object.assign(this, data);
        this.ID_Alquiler = 1,
            this.ID_Cliente = 1,
            this.ID_Automovil = 1;
        this.Fecha_Inicio = "2000",
            this.Fecha_Fin = "dc",
            this.Costo_Total = 2,
            this.Estado = 230221;
    }
}
__decorate([
    Expose({ name: 'ID_Alquiler' }),
    IsDefined({ message: () => { throw { status: 422, message: `La ID_Alquiler del usuario es hobligatoria` }; } }),
    __metadata("design:type", Number)
], Alquiler.prototype, "ID_Alquiler", void 0);
__decorate([
    Expose({ name: 'ID_Cliente' }),
    IsDefined({ message: () => { throw { status: 422, message: `El ID_Cliente del cliente debe ser hobligatorio` }; } }),
    __metadata("design:type", Number)
], Alquiler.prototype, "ID_Cliente", void 0);
__decorate([
    Expose({ name: "ID_Automovil" }),
    IsDefined({ message: () => { throw { status: 422, message: `El ID_Automovil del cliente debe ser hobligatoria` }; } }),
    __metadata("design:type", Number)
], Alquiler.prototype, "ID_Automovil", void 0);
__decorate([
    Expose({ name: 'Fecha_Inicio' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Fecha_Inicio del cliente debe ser hobligatorio` }; } }),
    __metadata("design:type", String)
], Alquiler.prototype, "Fecha_Inicio", void 0);
__decorate([
    Expose({ name: 'Fecha_Fin' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro Fecha_Fin es hobligatoria" }; } }),
    __metadata("design:type", String)
], Alquiler.prototype, "Fecha_Fin", void 0);
__decorate([
    Expose({ name: 'Costo_Total' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro Costo_Total es hobligatorio" }; } }),
    __metadata("design:type", Number)
], Alquiler.prototype, "Costo_Total", void 0);
__decorate([
    Expose({ name: 'Estado' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro Estado debe ser hobligatorio" }; } }),
    __metadata("design:type", Number)
], Alquiler.prototype, "Estado", void 0);
