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
        "ID_Empleado": 2,
        "Nombre": "Sebastian_2",
        "Apellido": "Hernandez_2",
        "DNI": "asd-22",
        "Direccion": "Sentenario-122-22",
        "Telefono": "3224729192",
        "Cargo": "Empleado_2"
    },
*/
export class Empleado {
    constructor(data) {
        Object.assign(this, data);
        this.ID_Empleado = 1,
            this.Nombre = "f",
            this.Apellido = "12";
        this.DNI = "2000",
            this.Direccion = "dc",
            this.Telefono = 2,
            this.Cargo = "Directivo";
    }
}
__decorate([
    Expose({ name: 'ID_Empleado' }),
    IsDefined({ message: () => { throw { status: 422, message: `La ID_Empleado del usuario es hobligatoria` }; } }),
    __metadata("design:type", Number)
], Empleado.prototype, "ID_Empleado", void 0);
__decorate([
    Expose({ name: 'Nombre' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Nombre del empleado debe ser hobligatorio` }; } }),
    __metadata("design:type", String)
], Empleado.prototype, "Nombre", void 0);
__decorate([
    Expose({ name: "Apellido" }),
    IsDefined({ message: () => { throw { status: 422, message: `El Apellido del empleado debe ser hobligatoria` }; } }),
    __metadata("design:type", String)
], Empleado.prototype, "Apellido", void 0);
__decorate([
    Expose({ name: 'DNI' }),
    IsDefined({ message: () => { throw { status: 422, message: `El DNI del empleado debe ser hobligatorio` }; } }),
    __metadata("design:type", String)
], Empleado.prototype, "DNI", void 0);
__decorate([
    Expose({ name: 'Direccion' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parameAniotro Direccion es hobligatoria" }; } }),
    __metadata("design:type", String)
], Empleado.prototype, "Direccion", void 0);
__decorate([
    Expose({ name: 'Telefono' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro Telefono es hobligatorio" }; } }),
    __metadata("design:type", Number)
], Empleado.prototype, "Telefono", void 0);
__decorate([
    Expose({ name: 'Cargo' }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro Cargo debe ser hobligatorio" }; } }),
    __metadata("design:type", String)
], Empleado.prototype, "Cargo", void 0);
