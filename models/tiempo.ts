//Representa el tiempo en horas, minutos y segundos
export class Tiempo{

    hora:number;
    minuto:number;
    segundo:number;

    constructor(horas=0,minutos=0,segundos=0){

        if(horas<0 || minutos<0 || segundos<0){
            throw new Error("Error!!! No se admite tiempo negativo");
        }
        
        //Horas sin decimales
        let horas_sd = horas - horas%1;

        //Horas sobrantes, por las imprecisiones de js, pongo la precisión a 2
        let sobras = (horas%1).toFixed(2);

        //Sumamos los minutos con las horas sobrantes
        let minutos_sd = minutos + 60*sobras;

        //Minutos sobrantes
        sobras = (minutos_sd%1).toFixed(2);

        //Minutos sin decimales
        minutos_sd -= sobras;

        //Sumamos los segundos con los minutos sobrantes
        let segundos_sd = segundos + 60*sobras;
        
        //Segundos sin decimales, despreciamos los segundos sobrantes
        segundos_sd -= segundos_sd%1;
        
        this.hora = horas_sd;
        this.minuto = minutos_sd;
        this.segundo = segundos_sd;
        this.calibrar();
    }

    //Método que suma a la unidad superior aquellas cantidades que le sobra a la unidad inferior, se espera que ambas cantidades sean enteros
    private sumarUnidadSup(unidadSup:number, unidadInf:number){
        unidadSup += unidadInf/60-(unidadInf/60)%1;
        unidadInf = unidadInf%60;
        return [unidadSup,unidadInf];
    }

    //Calibrar el tiempo para que tenga una estructura solida
    private calibrar(){
        //Sumar los segundos mayores que 60 a los minutos
        if(this.segundo>60){
            let temp = this.sumarUnidadSup(this.minuto,this.segundo);
            this.minuto = temp[0];
            this.segundo = temp[1];
        }
        
        //Sumar los minutos mayores que 60 a las horas
        if(this.minuto>60){
            let temp = this.sumarUnidadSup(this.hora,this.minuto);
            this.hora = temp[0];
            this.minuto = temp[1];
        }
    }

    sumar(sumando:tiempo){
        this.hora += sumando.hora;
        this.minuto += sumando.minuto;
        this.segundo += sumando.segundo;
        this.calibrar();
    }

}
