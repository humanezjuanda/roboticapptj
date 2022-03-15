import { DataTypes } from "sequelize";
import { Database } from "../database/export.database";
import { TbAlumnoCurso, TbAlumno, TbCurso } from '../database/Tablas/tabla';



export class CursoAlumno extends Database {

    public Tabla: string = TbAlumnoCurso
    constructor() {
        super()
    }

    Models() {
        return this.db.define(this.Tabla, {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },


            
            idalumno:{
                type:DataTypes.INTEGER,
                references:{model:TbAlumno, key:"idalumno"}
            },
            idcurso:{
                type:DataTypes.INTEGER,
                references:{model:TbCurso, key:"idcurso"}
            }
        },
            {modelName:TbAlumnoCurso}
        )
    }
    migration() {

        this.Models().sync({ force: false }).then(data => console.log(data))
    }
}