import {Modelo} from "./modelo"

//Objeto valor intermedio asociando cada modelo con las unidades que deben fabricarse
export class ModeloFabricacion{

    //Modelo asociado
    modelo: Modelo;

    //Cantidad asociado al modelo
    cantidad: number;

    constructor(modeloParametro:Modelo, cantidadParametro:number){
        this.modelo = modeloParametro;
        this.cantidad = cantidadParametro;
    }


}