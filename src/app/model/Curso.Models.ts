import { DataTypes } from "sequelize";
import { Database } from "../database/export.database";
import { TbCurso,TbProfesor } from "../database/Tablas/tabla";


export class CursoModels extends Database {

    public Tabla: string = TbCurso
    constructor() {
        super()
    }

    Models() {
        return this.db.define(this.Tabla, {
            idcurso: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            titulo: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            descripccion: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            alumno: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            profesor: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            secciones: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            imagen: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            video: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            precio: {
                type: DataTypes.DOUBLE,
                allowNull: true,
            },
            idprofesor:{
                type:DataTypes.INTEGER,
                references:{model:TbProfesor, key:"idprofesor"}
            },
            
        },
            {modelName:TbCurso}
        )
    }
    migration() {

        this.Models().sync({ force: false }).then(data => console.log(data))
    }
}