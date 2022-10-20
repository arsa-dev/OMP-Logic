import { Tiempo } from "./tiempo.ts";
import { Operacion } from "./operacion.ts";

//Conjunto de operaciones necesarias para la fabricación de un modelo concreto
export class Modelo{
    
    //Concepto del modelo
    concepto: string;

    //Conjunto de operaciones
    operaciones: Array<Operacion>;

    //Duracion estimada para la fabricación si solo hay un trabajador
    duracionEstimadaLineal: Tiempo;

    constructor(conceptoParametro:string, operacionesParametro: Array<Operacion>){
        this.concepto = conceptoParametro;
        this.operaciones = operacionesParametro;
        this.duracionEstimadaLineal = new Tiempo();

        //Sumamos la duracion estimada de todas las operaciones
        operacionesParametro.forEach(operacionParametro => {
            this.duracionEstimadaLineal.sumar(operacionParametro.duracionEstimada)
        });
    }

}
