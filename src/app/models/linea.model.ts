import { Colectivo } from "./colectivo.model";

export class Linea{
    public nombre: string;
    public colectivos: Colectivo[];

    constructor(nombre: string, colectivos: Colectivo[]){
        this.nombre = nombre
        this.colectivos = colectivos
    }
}