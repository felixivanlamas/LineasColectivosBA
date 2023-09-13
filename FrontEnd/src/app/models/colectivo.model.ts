import { Chofer } from "./chofer.model";
import { Pasajero } from "./pasajero.model";
import { Recorrido } from "./recorrido.model";

export class Colectivo{
    public chofer:Chofer;
    public recorrido:Recorrido;
    public pasajeros:Pasajero[];

    constructor(chofer:Chofer, recorrido:Recorrido, pasajeros:Pasajero[]){
        this.chofer=chofer
        this.recorrido=recorrido
        this.pasajeros=pasajeros
    }

}