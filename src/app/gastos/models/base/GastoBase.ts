export abstract class GastoBase {
    id: number;
    monto: number;
    descripcion: string;
    idAuth: number;
    idTipoGasto: number;
    fecha:Date;

    constructor() {
        this.id = 0;
        this.monto = 0;
        this.descripcion = '';
        this.idAuth = 0;
        this.idTipoGasto = 0;
        this.fecha = new Date();
    }
}