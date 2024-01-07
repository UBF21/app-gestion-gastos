import { Injectable } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import { Observable, catchError, from, map } from 'rxjs';
import { SaldoRead } from '../models/SaldoRead';
import { SupabaseConnection } from 'src/app/utils/models/SupabaseConnection';
import { ItemChartPie } from '../models/ItemChartPie';
import { SaldoWrite } from '../models/SaldoWrite';

@Injectable({
  providedIn: 'root'
})
export class SaldoSupebaseService {

  private supabase: SupabaseClient = SupabaseConnection.GetInstanceSupaBase();
  constructor() { }

  getAllSaldosSupaBase(): Observable<SaldoRead[]> {
    return from(
      this.supabase.from("Saldos")
        .select(`
          id,
          fecha,
          monto,
          descripcion,
          idAuth: id_auth,
          idTipoSaldo: id_tipo_saldo,
          TipoSaldo: Tipos_ingresos_saldos (id,descripcion)
        `)
    ).pipe(
      map((response: any) => response.data as SaldoRead[]),
      catchError((error) => { throw error })
    );

  }
  
  getDataChartTiposIngresoSupaBase(): Observable<ItemChartPie[]> {
    return from(
      this.supabase.rpc("sp_list_tipos_saldo_chart")
    ).pipe(
      map((response: any) => response.data as ItemChartPie[]),
      catchError((error) => { throw error })
    );
  }
  
  addSaldoSupabase(saldo: SaldoWrite): Observable<SaldoWrite[]> {
    return from(
      this.supabase.from("Saldos")
        .insert(saldo.buildSaldoObjectWrite(saldo))
        .select(` 
        id,
        fecha,
        monto,
        descripcion,
        idAuth: id_auth,
        idTipoSaldo: id_tipo_saldo
        `)
    )
      .pipe(
        map((response) => response.data as SaldoWrite[]),
        catchError((error) => { throw error })
      )
  }

  updateSaldoSupaBase(saldo: SaldoWrite, id: number): Observable<SaldoWrite[]> {
    return from(
      this.supabase.from("Saldos")
        .update(saldo.buildSaldoObjectWrite(saldo))
        .eq('id', saldo.id)
        .select(` id,
        fecha,
        monto,
        descripcion,
        idAuth: id_auth,
        idTipoSaldo: id_tipo_saldo`)
    )
      .pipe(
        map((response) => response.data as SaldoWrite[]),
        catchError((error) => { throw error })
      )
  }

  deleteSaldoSupaBase(id: number): Observable<number> {
    return from(
      this.supabase.from("Saldos")
        .delete()
        .eq('id', id)
    )
      .pipe(
        map((response) => response.status),
        catchError((error) => { throw error })
      )
  }
}
