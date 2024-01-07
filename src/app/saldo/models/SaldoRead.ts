import { takeUntil } from "rxjs";
import { TipoSaldo } from "./TipoSaldo";
import { SaldoBase } from "./base/SaldoBase";

export class SaldoRead extends SaldoBase {
   
    TipoSaldo:TipoSaldo;

    constructor(){
        super();
        this.TipoSaldo = new TipoSaldo();
    }
}