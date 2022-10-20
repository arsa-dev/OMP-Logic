import { ModeloFabricacion } from "./modelo_fabricacion.ts";

//Contiene uno o más paquetes de modelos y el número de unidades por modelo que deben fabricarse
export class OrdenDeFabricacion{
    
    //Conjunto de modelos con los números de unidades
    modelos: Array<ModeloFabricacion>;

    constructor(modelosParametro:Array<ModeloFabricacion>){
        this.modelos = modelosParametro;
    }
}
