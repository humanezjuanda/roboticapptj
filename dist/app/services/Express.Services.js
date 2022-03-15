"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressServices = void 0;
const express_1 = __importDefault(require("express"));
const Helper_export_1 = require("../helper/Helper.export");
class ExpressServices extends Helper_export_1.servicesClass {
    constructor() {
        super();
        this.port = '8001';
        this.listen();
        this.Services();
    }
    listen() {
        this.app = (0, express_1.default)();
    }
    Services() {
        this.app.listen(this.port, () => {
            console.log("Se inicio el Servidor en puerto", this.port);
        });
    }
}
exports.ExpressServices = ExpressServices;
//# sourceMappingURL=Express.Services.js.map