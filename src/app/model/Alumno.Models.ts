import { DataTypes } from "sequelize";
import { Database } from "../database/export.database";
import { TbAlumno,  } from '../database/Tablas/tabla';


export class AlumnoModels extends Database {

    public Tabla: string = TbAlumno
    constructor() {
        super()
    }

    Models() {
        return this.db.define(this.Tabla, {
            idalumno: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            correo: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            clave: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            
        },{modelName:TbAlumno})
    }
    migration() {

        this.Models().sync({ force: false }).then(data => console.log(data))
    }
}