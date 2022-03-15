"use strict";
// import { DepartamentosModels } from './../model/Departamentos.Models';
// import { CiudadModels } from './../model/Ciudad.Models';
Object.defineProperty(exports, "__esModule", { value: true });
exports.migracion = void 0;
const Alumno_Models_1 = require("../model/Alumno.Models");
const Profesor_Models_1 = require("../model/Profesor.Models");
const Seccion_Models_1 = require("../model/Seccion.Models");
const Curso_Models_1 = require("../model/Curso.Models");
const Alumno_Curso_1 = require("../model/Alumno.Curso");
// const Departmigraion:DepartamentosModels = new  DepartamentosModels()
// const CiudadMigration:CiudadModels = new CiudadModels();
const AlumnoMigration = new Alumno_Models_1.AlumnoModels();
const ProfesorMigration = new Profesor_Models_1.ProfesorModels();
const SeccionMigration = new Seccion_Models_1.SeccionModels();
const CursoMigration = new Curso_Models_1.CursoModels();
const CursoAlumnoMigration = new Alumno_Curso_1.CursoAlumno();
function migracion() {
    // CiudadMigration.migration();
    // Departmigraion.migration();
    AlumnoMigration.migration();
    CursoMigration.migration();
    ProfesorMigration.migration();
    SeccionMigration.migration();
    CursoAlumnoMigration.migration();
}
exports.migracion = migracion;
//# sourceMappingURL=Migrations.Database.js.map