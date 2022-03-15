"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoAlumno = void 0;
const sequelize_1 = require("sequelize");
const export_database_1 = require("../database/export.database");
const tabla_1 = require("../database/Tablas/tabla");
class CursoAlumno extends export_database_1.Database {
    constructor() {
        super();
        this.Tabla = tabla_1.TbAlumnoCurso;
    }
    Models() {
        return this.db.define(this.Tabla, {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            idalumno: {
                type: sequelize_1.DataTypes.INTEGER,
                references: { model: tabla_1.TbAlumno, key: "idalumno" }
            },
            idcurso: {
                type: sequelize_1.DataTypes.INTEGER,
                references: { model: tabla_1.TbCurso, key: "idcurso" }
            }
        }, { modelName: tabla_1.TbAlumnoCurso });
    }
    migration() {
        this.Models().sync({ force: false }).then(data => console.log(data));
    }
}
exports.CursoAlumno = CursoAlumno;
//# sourceMappingURL=Alumno.Curso.js.map