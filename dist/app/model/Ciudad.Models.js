"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiudadModels = void 0;
const sequelize_1 = require("sequelize");
const export_database_1 = require("../database/export.database");
const tabla_1 = require("../database/Tablas/tabla");
class CiudadModels extends export_database_1.Database {
    constructor() {
        super();
        this.Tabla = tabla_1.TbCiudad;
    }
    Models() {
        return this.db.define(this.Tabla, {
            idciudad: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nombre: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            idDepartamentos: {
                type: sequelize_1.DataTypes.INTEGER,
                references: { model: tabla_1.TbDepartments, key: "idDepartamentos" }
            }
        });
    }
    migration() {
        this.Models().sync({ force: false }).then(data => console.log(data));
    }
}
exports.CiudadModels = CiudadModels;
//# sourceMappingURL=Ciudad.Models.js.map