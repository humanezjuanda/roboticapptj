"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartamentosModels = void 0;
const sequelize_1 = require("sequelize");
const export_database_1 = require("../database/export.database");
const tabla_1 = require("../database/Tablas/tabla");
class DepartamentosModels extends export_database_1.Database {
    constructor() {
        super();
        this.Tabla = tabla_1.TbDepartments;
    }
    Models() {
        return this.db.define(this.Tabla, {
            idDepartamentos: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nombre: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            pais: {
                type: sequelize_1.DataTypes.STRING,
            }
        });
    }
    migration() {
        this.Models().sync({ force: false }).then(data => console.log(data));
    }
}
exports.DepartamentosModels = DepartamentosModels;
//# sourceMappingURL=Departamentos.Models.js.map