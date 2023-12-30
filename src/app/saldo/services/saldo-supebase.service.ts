import { Injectable } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import { Observable, catchError, from, map } from 'rxjs';
import { Saldo } from '../models/Saldo';
import { SupabaseConnection } from 'src/app/utils/SupabaseConnection';
import { ItemChartPie } from '../models/ItemChartPie';

@Injectable({
  providedIn: 'root'
})
export class SaldoSupebaseService {

  private supabase: SupabaseClient = SupabaseConnection.GetInstanceSupaBase();
  constructor() { }

  getAllSaldos(): Observable<Saldo[]> {
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
      map((response: any) => response.data as Saldo[]),
      catchError((error) => { throw error })
    );

  }


  getDataChartTiposIngreso(): Observable<ItemChartPie[]> {

    return from(
      this.supabase.rpc("sp_list_tipos_saldo_chart")
    ).pipe(
      map((response: any) => response.data as ItemChartPie[]),
      catchError((error) => { throw error })
    );
  }

}
