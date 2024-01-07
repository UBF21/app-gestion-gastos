export abstract class SaldoBase{
    id:number;
    fecha:Date;
    monto:number;
    descripcion:string;
    idAuth:number;
    idTipoSaldo:number;

    constructor(){
        this.id = 0;
        this.fecha = new Date();
        this.monto = 0.0;
        this.descripcion = "";
        this.idAuth = 0;
        this.idTipoSaldo = 0;
    }
} 