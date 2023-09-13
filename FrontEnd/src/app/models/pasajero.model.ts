import { Sube } from "./sube.model";

export class Pasajero {
    private nombre: string;
    private apellido: string;
    private documento: string;
    private sube: Sube;

    constructor(nombre: string, apellido: string, documento: string, sube: Sube) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.sube = sube;
    }
}