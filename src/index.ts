import * as yargs from 'yargs'
import { app } from './app/app';
import { migracion } from './app/database/Migrations.Database';



let args: any = yargs
    .option('serve', {
        alias: 's',
        type: "string"
    })
    .option('migrate', {
        alias: 'm',
        type: "string"
    }).argv;


if(args.m== "migration"){
    migracion()
    console.log("welcome")
}else{
    new app()
}
// console.log(args.migrate)