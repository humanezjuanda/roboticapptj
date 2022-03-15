"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfesorModels = void 0;
const sequelize_1 = require("sequelize");
const export_database_1 = require("../database/export.database");
const tabla_1 = require("../database/Tablas/tabla");
class ProfesorModels extends export_database_1.Database {
    constructor() {
        super();
        this.Tabla = tabla_1.TbProfesor;
    }
    Models() {
        return this.db.define(this.Tabla, {
            idprofesor: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nombre: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            correo: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            clave: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            // idprofesor:{
            //     type:DataTypes.INTEGER,
            //      references:{model:TbProfesor, key:"idprofesor"}
            // }
        }, { modelName: tabla_1.TbProfesor });
    }
    migration() {
        this.Models().sync({ force: false }).then(data => console.log(data));
    }
}
exports.ProfesorModels = ProfesorModels;
//# sourceMappingURL=Profesor.Models.js.map