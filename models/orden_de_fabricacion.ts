import { Modelo } from "./modelo.ts";

//Contiene uno o más paquetes de modelos y el número de unidades por modelo que deben fabricarse
export class OrdenDeFabricacion{
    
    //Conjunto de modelos con los números de unidades
    modelos: Array<[Modelo, number]>;

    constructor(modelosParametro:Array<[Modelo, number]>){
        this.modelos = modelosParametro;
    }
}
