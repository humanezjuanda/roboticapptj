import { Op, Sequelize } from "sequelize";
import { DatabaseI } from "../Helper.export";


export class DatabasePolimorfimos implements DatabaseI {
    public DB_CONNECTION: any
    public DB_HOST: string
    public DB_PORT: string
    public DB_DATABASE: string
    public DB_USERNAME: string
    public DB_PASSWORD: string
    public database: Sequelize;
    public op = Op
    constructor(DB_CONNECTION: string,
        DB_HOST: string,
        DB_PORT: string,
        DB_DATABASE: string,
        DB_USERNAME: string,
        DB_PASSWORD: string) {
        this.DB_CONNECTION = DB_CONNECTION
        this.DB_HOST = DB_HOST
        this.DB_PORT = DB_PORT
        this.DB_DATABASE = DB_DATABASE
        this.DB_USERNAME = DB_USERNAME
        this.DB_PASSWORD = DB_PASSWORD
        this.database = this.Connecter()
    }

    Connecter() {
        console.log("s")
        return new Sequelize(this.DB_DATABASE, this.DB_USERNAME, this.DB_PASSWORD, {
            host: this.DB_HOST,
            dialect: this.DB_CONNECTION,

            define: {
                createdAt: false,
                freezeTableName: false,
                updatedAt: false,
                timestamps: false
            }

        })
    }

    public async verificaConexion() {
        try {
            await this.conection()
            this.database = this.Connecter()
        } catch (error) {

        }
    }
    public async conection() {
        try {
            await this.Connecter().authenticate()
            console.log("Conexion exitosa")
        } catch (error) {
            throw new Error(" Error en la conexion");

        }
    }
}