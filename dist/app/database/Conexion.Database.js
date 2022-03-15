"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConexionMysql = void 0;
const Helper_export_1 = require("../helper/Helper.export");
const db_config_1 = require("./../config/db.config");
class ConexionMysql {
    constructor() {
        this.DB_CONNECTION = db_config_1.mysql.DB_CONNECTION;
        this.DB_HOST = db_config_1.mysql.DB_HOST;
        this.DB_PORT = db_config_1.mysql.DB_PORT;
        this.DB_DATABASE = db_config_1.mysql.DB_DATABASE;
        this.DB_USERNAME = db_config_1.mysql.DB_USERNAME;
        this.DB_PASSWORD = db_config_1.mysql.DB_PASSWORD;
        this.connect = new Helper_export_1.DatabaseP(this.DB_CONNECTION, this.DB_HOST, this.DB_PORT, this.DB_DATABASE, this.DB_USERNAME, this.DB_PASSWORD);
        this.db = this.connect.database;
    }
}
exports.ConexionMysql = ConexionMysql;
//# sourceMappingURL=Conexion.Database.js.map