import { TipoSaldo } from "./TipoSaldo";

export class Saldo {
    id:number;
    fecha:Date;
    monto:number;
    descripcion:string;
    idAuth:number;
    idTipoSaldo:number;
    TipoSaldo?:TipoSaldo;

    constructor(){
        this.id = 0;
        this.fecha = new Date();
        this.monto = 0.0;
        this.descripcion = "";
        this.idAuth = 0;
        this.idTipoSaldo = 0;
        this.TipoSaldo = new TipoSaldo();
    }
}