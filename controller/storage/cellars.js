var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform, Expose } from "class-transformer";
export class Cellars {
    constructor(param1, param2, param3, param4, param5) {
        this.NAME = param1;
        this.RESPONSIBLE_NUMBER = param2;
        this.CREATED_BY = param4;
        this.UPDATED_BY = param5;
        this.STATUS = param3;
    }
}
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => {
        let data = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/g.test(value);
        if (data) {
            return value;
        }
        else {
            throw { status: 500, message: "Error: Invalid data type or structure. Please ensure that the provided data matches the expected format. For more information, please visit https://github.com/miusarname/NODEJS_Prueba_campuslands_miPrimeraPruebaLaboral" };
        }
    }),
    __metadata("design:type", String)
], Cellars.prototype, "NAME", void 0);
__decorate([
    Expose({ name: "id_responsable" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data) {
            return parseInt(value);
        }
        else {
            throw { status: 500, message: "Error: Invalid data type or structure. Please ensure that the provided data matches the expected format. For more information, please visit https://github.com/miusarname/NODEJS_Prueba_campuslands_miPrimeraPruebaLaboral" };
        }
    }),
    __metadata("design:type", Number)
], Cellars.prototype, "RESPONSIBLE_NUMBER", void 0);
__decorate([
    Expose({ name: "estado" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data) {
            return parseInt(value);
        }
        else {
            throw { status: 500, message: "Error: Invalid data type or structure. Please ensure that the provided data matches the expected format. For more information, please visit https://github.com/miusarname/NODEJS_Prueba_campuslands_miPrimeraPruebaLaboral" };
        }
    }),
    __metadata("design:type", Number)
], Cellars.prototype, "STATUS", void 0);
__decorate([
    Expose({ name: "created_by" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data) {
            return parseInt(value);
        }
        else {
            throw { status: 500, message: "Error: Invalid data type or structure. Please ensure that the provided data matches the expected format. For more information, please visit https://github.com/miusarname/NODEJS_Prueba_campuslands_miPrimeraPruebaLaboral" };
        }
    }),
    __metadata("design:type", Number)
], Cellars.prototype, "CREATED_BY", void 0);
__decorate([
    Expose({ name: "update_by" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data) {
            return parseInt(value);
        }
        else {
            throw { status: 500, message: "Error: Invalid data type or structure. Please ensure that the provided data matches the expected format. For more information, please visit https://github.com/miusarname/NODEJS_Prueba_campuslands_miPrimeraPruebaLaboral" };
        }
    }),
    __metadata("design:type", Number)
], Cellars.prototype, "UPDATED_BY", void 0);
