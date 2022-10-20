import { Tiempo } from "./tiempo.ts";

//Define las acciones que realizan los operarios
export class Operacion{

    //Descripcion de la accion que un operario debe llevar a cabo
    accion: string;

    //Duracion estimada de la operacion
    duracionEstimada: Tiempo;

    constructor(accionParametro:string, duracionEstimadaParametro:Tiempo){
        this.accion = accionParametro;
        this.duracionEstimada = duracionEstimadaParametro;
    }
    
}
