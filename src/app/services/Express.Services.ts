import express , {Application} from 'express'
import { servicesClass } from "../helper/Helper.export";

export class ExpressServices extends servicesClass {
    public app:Application | any ;
    public port:string = '8001'; 
    constructor() {
        super();
        this.listen();
        this.Services();
        
    }
    listen(): void {
        this.app = express()
    }
    Services(): void {
        this.app.listen(this.port,()=>{
            console.log("Se inicio el Servidor en puerto" ,this.port );
        })
    }
}