import { DataTypes } from "sequelize";
import { Database } from "../database/export.database";
import {  TbProfesor } from '../database/Tablas/tabla';

export class ProfesorModels  extends Database {
    
    public Tabla:string = TbProfesor
    constructor() {
            super()
    }

    Models(){
        return this.db.define(this.Tabla,{
            idprofesor:{
                type:DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true
            },
            nombre:{
                type:DataTypes.STRING,
                allowNull:true,
            },
            correo:{
                type:DataTypes.STRING,
                allowNull:true,
            },
            clave:{
                type:DataTypes.STRING,
                allowNull:true,
            },
            // idprofesor:{
            //     type:DataTypes.INTEGER,
            //      references:{model:TbProfesor, key:"idprofesor"}
            // }
        }, {modelName:TbProfesor})
    }
    migration(){
        this.Models().sync({force:false}).then(data=>console.log(data))
    }
}