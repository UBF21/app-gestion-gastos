import { SaldoBase } from "./base/SaldoBase";

export class SaldoWrite extends SaldoBase {

    operation: 'Add' | 'Update' = 'Add';

    constructor() {
        super();
    }

    buildSaldoObjectWrite(saldo: SaldoWrite, id?: number): Object {

        const body: any = {
            monto: saldo.monto,
            descripcion: saldo.descripcion,
            id_auth: saldo.idAuth,
            id_tipo_saldo: saldo.idTipoSaldo
        };

        if (saldo.operation === 'Add') body['fecha'] = saldo.fecha;
        if (saldo.operation === 'Update') body['id'] = id;

        return body;
    }
}