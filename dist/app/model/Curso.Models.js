"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoModels = void 0;
const sequelize_1 = require("sequelize");
const export_database_1 = require("../database/export.database");
const tabla_1 = require("../database/Tablas/tabla");
class CursoModels extends export_database_1.Database {
    constructor() {
        super();
        this.Tabla = tabla_1.TbCurso;
    }
    Models() {
        return this.db.define(this.Tabla, {
            idcurso: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            titulo: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            descripccion: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            alumno: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            profesor: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            secciones: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            imagen: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            video: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            precio: {
                type: sequelize_1.DataTypes.DOUBLE,
                allowNull: true,
            },
            idprofesor: {
                type: sequelize_1.DataTypes.INTEGER,
                references: { model: tabla_1.TbProfesor, key: "idprofesor" }
            },
        }, { modelName: tabla_1.TbCurso });
    }
    migration() {
        this.Models().sync({ force: false }).then(data => console.log(data));
    }
}
exports.CursoModels = CursoModels;
//# sourceMappingURL=Curso.Models.js.map