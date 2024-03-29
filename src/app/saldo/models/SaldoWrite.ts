import { SaldoBase } from "./base/SaldoBase";

export class SaldoWrite extends SaldoBase {

    operation: 'Add' | 'Update' = 'Add';

    constructor() {
        super();
    }

    buildSaldoObjectWrite(): Object {

        const body: any = {
            monto: this.monto,
            descripcion: this.descripcion,
            id_auth: this.idAuth,
            id_tipo_saldo: this.idTipoSaldo
        };

        if (this.operation === 'Add') body['fecha'] = this.fecha;
        if (this.operation === 'Update' && (this.id !== 0)) body['id'] = this.id;

        return body;
    }
}