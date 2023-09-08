export class Sube{
    private nroTarjeta : string;

    constructor(nroTarjeta:string){
        this.nroTarjeta = nroTarjeta
    }

    getNroTarjeta(): string {
        return this.nroTarjeta;
    }
}