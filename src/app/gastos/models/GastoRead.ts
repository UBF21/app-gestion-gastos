import { TipoGasto } from "./TipoGasto";
import { GastoBase } from "./base/GastoBase";

export class GastoRead extends GastoBase {

    tipoGasto: TipoGasto;

    constructor() {
        super();
        this.tipoGasto = new TipoGasto();
    }
}