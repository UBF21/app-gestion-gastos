import { Injectable } from '@angular/core';
import { Observable, catchError, from, map } from 'rxjs';
import { SupabaseConnection } from 'src/app/utils/models/SupabaseConnection';
import { TipoSaldo } from '../models/TipoSaldo';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class TipoSaldoSupabaseService {

  private supabase: SupabaseClient = SupabaseConnection.GetInstanceSupaBase();

  constructor() { }

  getAllTiposSaldoSupaBase():Observable<TipoSaldo[]>{
    return from(
      this.supabase.from("Tipos_ingresos_saldos")
      .select("*")
    )
    .pipe(
      map((response: any) => response.data as TipoSaldo[]),
      catchError((error) => { throw error })
    );
  }
}
