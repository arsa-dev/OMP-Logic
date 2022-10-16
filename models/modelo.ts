import { Tiempo } from "./tiempo.ts";
import { Operacion } from "./operacion.ts";

//Conjunto de operaciones necesarias para la fabricación de un modelo concreto
export class Modelo{
    
    //Concepto del modelo
    concepto: string;

    //Conjunto de operaciones
    operaciones: Array<Operacion>;

    //Duracion estimada para la fabricación si solo hay un trabajador
    duracion_estimada_lineal: Tiempo;

    constructor(concepto:string, operaciones: Array<Operacion>){
        this.concepto = concepto;
        this.operaciones = operaciones;
        this.duracion_estimada_lineal = new Tiempo();

        //Sumamos la duracion estimada de todas las operaciones
        operaciones.forEach(operacion => {
            this.duracion_estimada_lineal.sumar(operacion.duracion_estimada)
        });
    }

}
