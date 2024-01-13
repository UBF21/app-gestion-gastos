import { GastoBase } from "./base/GastoBase";

export class GastoWrite extends GastoBase {

    operation: 'Add' | 'Update' = 'Add';

    constructor() {
        super();
    }

    buildSaldoObjectWrite(): void {

        const body: any = {
            monto: this.monto,
            descripcion: this.descripcion,
            id_auth: this.idAuth,
            id_tipo_gasto: this.idTipoGasto
        }

        if (this.operation === 'Add') body['fecha'] = this.fecha;
        if (this.operation === 'Update' && (this.id !== 0)) body['id'] = this.id;
    
        return body;
    }
}