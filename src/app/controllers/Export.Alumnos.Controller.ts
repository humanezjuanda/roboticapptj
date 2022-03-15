// import { DepartamentosModels } from "../model/Departamentos.Models";
import { AlumnoModelos } from "../model/export.model";

export class Alumno {
    constructor() {
        
    }

    create(req:Request){
        AlumnoModelos.create()
    }
}