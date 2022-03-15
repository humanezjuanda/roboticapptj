"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabasePolimorfimos = void 0;
const sequelize_1 = require("sequelize");
class DatabasePolimorfimos {
    constructor(DB_CONNECTION, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD) {
        this.op = sequelize_1.Op;
        this.DB_CONNECTION = DB_CONNECTION;
        this.DB_HOST = DB_HOST;
        this.DB_PORT = DB_PORT;
        this.DB_DATABASE = DB_DATABASE;
        this.DB_USERNAME = DB_USERNAME;
        this.DB_PASSWORD = DB_PASSWORD;
        this.database = this.Connecter();
    }
    Connecter() {
        console.log("s");
        return new sequelize_1.Sequelize(this.DB_DATABASE, this.DB_USERNAME, this.DB_PASSWORD, {
            host: this.DB_HOST,
            dialect: this.DB_CONNECTION,
            define: {
                createdAt: false,
                freezeTableName: false,
                updatedAt: false,
                timestamps: false
            }
        });
    }
    verificaConexion() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.conection();
                this.database = this.Connecter();
            }
            catch (error) {
            }
        });
    }
    conection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.Connecter().authenticate();
                console.log("Conexion exitosa");
            }
            catch (error) {
                throw new Error(" Error en la conexion");
            }
        });
    }
}
exports.DatabasePolimorfimos = DatabasePolimorfimos;
//# sourceMappingURL=Database.polimorfismo.js.map