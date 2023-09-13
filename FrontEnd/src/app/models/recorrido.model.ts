import { Parada } from "./parada.model";

export class Recorrido{
    public paradas: Parada[];

    constructor(paradas:Parada[]){
        this.paradas=paradas
    }
}