
// import { DepartamentosModels } from './../model/Departamentos.Models';
// import { CiudadModels } from './../model/Ciudad.Models';

import { AlumnoModels } from '../model/Alumno.Models';
import { ProfesorModels } from '../model/Profesor.Models';

import { SeccionModels } from '../model/Seccion.Models';
import { CursoModels } from '../model/Curso.Models';
import { CursoAlumno } from '../model/Alumno.Curso';

// const Departmigraion:DepartamentosModels = new  DepartamentosModels()
// const CiudadMigration:CiudadModels = new CiudadModels();

const AlumnoMigration:AlumnoModels = new AlumnoModels();
const ProfesorMigration:ProfesorModels = new ProfesorModels();

const SeccionMigration:SeccionModels = new SeccionModels();
const CursoMigration:CursoModels = new CursoModels();
const CursoAlumnoMigration:CursoAlumno = new CursoAlumno();



export function migracion(){

     
     // CiudadMigration.migration();
     // Departmigraion.migration();
     AlumnoMigration.migration();
     CursoMigration.migration();
     ProfesorMigration.migration();

     SeccionMigration.migration();
     CursoAlumnoMigration.migration();
}