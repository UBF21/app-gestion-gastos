import { Injectable } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import { Observable, catchError, from, map } from 'rxjs';
import { SupabaseConnection } from 'src/app/utils/models/SupabaseConnection';
import { TipoGasto } from '../models/TipoGasto';

@Injectable({
  providedIn: 'root'
})
export class TipoGastoSupabaseService {
  private supabase: SupabaseClient = SupabaseConnection.GetInstanceSupaBase();
  constructor() { }

  getAllTipoGastos(): Observable<TipoGasto[]> {
    return from(
      this.supabase.from("Tipos_gastos")
        .select(`
        id,
        descripcion
      `)
    )
      .pipe(
        map((response) => response.data as TipoGasto[]),
        catchError((error) => { throw error })
      );
  }
}
