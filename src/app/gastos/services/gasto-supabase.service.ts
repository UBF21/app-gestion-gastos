import { Injectable } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import { Observable, catchError, filter, from, map } from 'rxjs';
import { SupabaseConnection } from 'src/app/utils/models/SupabaseConnection';
import { GastoRead } from '../models/GastoRead';
import { GastoWrite } from '../models/GastoWrite';
import { TipoGasto } from '../models/TipoGasto';

@Injectable({
  providedIn: 'root'
})
export class GastoSupabaseService {
  private supabase: SupabaseClient = SupabaseConnection.GetInstanceSupaBase();
  constructor() { }

  getAllGastosQuincenal(): Observable<GastoRead[]> {

    return from(
      this.supabase.rpc("sp_get_gastos_quincenales")
    )
      .pipe(
         map((response: any) => response.data.map((item: any) => {
           const gasto: GastoRead = new GastoRead();
           const tipoGasto: TipoGasto = new TipoGasto();
           gasto.id = item.id;
           gasto.descripcion = item.descripcion;
           gasto.monto = item.monto;
           gasto.fecha = item.fecha;
           gasto.idAuth = item.id_auth;
           gasto.idTipoGasto = item.id_tipo_gasto;
           tipoGasto.id = item.id_tipo_gasto;
           tipoGasto.descripcion = item.tipo_gasto_descripcion;
           gasto.tipoGasto = tipoGasto;
           return gasto;
         })),
        catchError((error) => { throw error })
      );
  }

  addGastoSupaBase(gasto: GastoWrite): Observable<GastoWrite[]> {
    return from(
      this.supabase.from("Gastos")
        .insert(gasto.buildSaldoObjectWrite())
        .select(`
        id,
        fecha,
        monto,
        descripcion,
        idAuth: id_auth,
        idTipoGasto: id_tipo_gasto
      `)
    )
      .pipe(
        map((response) => response.data as GastoWrite[]),
        catchError((error) => { throw error })
      );
  }

  updateGastoSupaBase(gasto: GastoWrite): Observable<GastoWrite[]> {
    return from(
      this.supabase.from("Gastos")
        .update(gasto.buildSaldoObjectWrite())
        .eq('id', gasto.id)
        .select(`
        id,
        fecha,
        monto,
        descripcion,
        idAuth: id_auth,
        idTipoGasto: id_tipo_gasto
        `)

    )
      .pipe(
        map((response) => response.data as GastoWrite[]),
        catchError((error) => { throw error })
      )
  }

  deleteGastoSupaBase(id: number): Observable<number> {
    return from(
      this.supabase.from("Gastos")
        .delete()
        .eq('id', id)
    )
      .pipe(
        map((response) => response.status),
        catchError((error) => { throw error })
      )
  }
}
