"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
// import { DepartamentosModels } from "../model/Departamentos.Models";
const export_model_1 = require("../model/export.model");
class Alumno {
    constructor() {
    }
    create(req) {
        export_model_1.AlumnoModelos.create();
    }
}
exports.Alumno = Alumno;
//# sourceMappingURL=Export.Alumnos.Controller.js.map