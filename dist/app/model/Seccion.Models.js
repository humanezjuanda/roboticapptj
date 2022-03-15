"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeccionModels = void 0;
const sequelize_1 = require("sequelize");
const export_database_1 = require("../database/export.database");
const tabla_1 = require("../database/Tablas/tabla");
class SeccionModels extends export_database_1.Database {
    constructor() {
        super();
        this.Tabla = tabla_1.TbSeccion;
    }
    Models() {
        return this.db.define(this.Tabla, {
            idseccion: {
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
            imagen: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            video: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            idcurso: {
                type: sequelize_1.DataTypes.INTEGER,
                references: { model: tabla_1.TbCurso, key: "idcurso" }
            }
        });
    }
    migration() {
        this.Models().sync({ force: false }).then(data => console.log(data));
    }
}
exports.SeccionModels = SeccionModels;
//# sourceMappingURL=Seccion.Models.js.map