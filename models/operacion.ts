import { Tiempo } from "./tiempo.ts";

//Define las acciones que realizan los operarios
export class Operacion{

    //Descripcion de la accion que un operario debe llevar a cabo
    accion: string;

    //Duracion estimada de la operacion
    duracion_estimada: Tiempo;

    constructor(accion:string, duracion_estimada:Tiempo){
        this.accion = accion;
        this.duracion_estimada = duracion_estimada;
    }
    
}
