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
                allowNull: false,
            },
            descripccion: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            alumno: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            profesor: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            secciones: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            imagen: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            video: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            // idprofesor:{
            //     type:DataTypes.INTEGER,
            //     references:{model:TbProfesor, key:"idprofesor"}
            // }
        });
    }
    migration() {
        this.Models().sync({ force: false }).then(data => console.log(data));
    }
}
exports.CursoModels = CursoModels;
//# sourceMappingURL=Curso.Models%20copy.js.map