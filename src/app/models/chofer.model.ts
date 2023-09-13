export class Chofer{
    public id : number;
    public nombre : string;
    public apellido : string;
    public documento : string;

    constructor(id:number,nombre:string,apellido:string,documento:string){
        this.id=id
        this.nombre=nombre
        this.apellido=apellido
        this.documento=documento
    }
}