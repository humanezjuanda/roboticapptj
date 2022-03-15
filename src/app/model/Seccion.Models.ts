import { DataTypes } from "sequelize";
import { Database } from "../database/export.database";
import { TbSeccion, TbCurso} from "../database/Tablas/tabla";

export class SeccionModels  extends Database {
    
    public Tabla:string = TbSeccion
    constructor() {
            super()
    }

    Models(){
        return this.db.define(this.Tabla,{
            idseccion:{
                type:DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true
            },
            titulo:{
                type:DataTypes.STRING,
                allowNull:true,
            },
            descripccion:{
                type:DataTypes.STRING,
                allowNull:true,
            },
            imagen:{
                type:DataTypes.STRING,
                allowNull:true,
            },
            video:{
                type:DataTypes.STRING,
                allowNull:true,
            },
              idcurso:{
                  type:DataTypes.INTEGER,
                  references:{model:TbCurso, key:"idcurso"}
              }
         })
    }
    migration(){
        this.Models().sync({force:false}).then(data=>console.log(data))
    }
}