import { Tiempo } from "./tiempo.ts";
import { Operacion } from "./operacion.ts";

//Conjunto de operaciones necesarias para la fabricación de un modelo concreto
export class Modelo{
    
    //Concepto del modelo
    concepto: string;

    //Conjunto de operaciones
    operaciones: Array<Operacion>;

    //Duracion estimada para la fabricación según los modelos
    duracion_estimada: Tiempo;

    constructor(concepto:string, operaciones: Array<Operacion>){
        this.concepto = concepto;
        this.operaciones = operaciones;
        this.duracion_estimada = new Tiempo();

        //Sumamos la duracion estimada de todas las operaciones
        operaciones.forEach(operacion => {
            this.duracion_estimada.sumar(operacion.duracion_estimada)
        });
    }

}
