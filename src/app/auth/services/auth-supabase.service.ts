import { Injectable } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseConnection } from 'src/app/utils/models/SupabaseConnection';
import { UserCredentials } from '../interfaces/UserCredentials';
import { Observable, from, map } from 'rxjs';
import { UserCurrent } from '../models/UserCurrent';

@Injectable({
  providedIn: 'root'
})
export class AuthSupabaseService {

  private supabase: SupabaseClient = SupabaseConnection.GetInstanceSupaBase();

  constructor() { }

  signInSupabase(userCredentials: UserCredentials): Observable<any> {
    return from(
      this.supabase.auth.signInWithPassword({ email: userCredentials.username, password: userCredentials.password })
    ).pipe(
      map((response) => response.data)
    );
  }

  getCurrentUserSupaBase(uid: string): Observable<UserCurrent> {
    return from(
      this.supabase.from("Auth")
      .select(`
      id,
      nombres,
      apellidos,
      edad,
      saldo,
      idUser: id_user,
      sexo,
      img
    `).eq("id_user", uid)
    )
      .pipe(
        map((response:any) => response.data as UserCurrent)
      );
  }
}
