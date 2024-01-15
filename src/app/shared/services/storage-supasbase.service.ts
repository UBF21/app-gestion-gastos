import { Injectable } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import { Observable, catchError, from, map } from 'rxjs';
import { SupabaseConnection } from 'src/app/utils/models/SupabaseConnection';

@Injectable({
  providedIn: 'root'
})
export class StorageSupasbaseService {

  private supabase: SupabaseClient = SupabaseConnection.GetInstanceSupaBase();

  constructor() { }

  uploadStorageFileSupaBase(file: File): Observable<any> {
    return from(
      this.supabase.storage.from("img")
        .upload(file.name, file, {
          cacheControl: '3600',
          upsert: false
        })
    ).pipe(
      map((response) => response.data),
      catchError((error) => { throw error })
    );
  }

  deleteStorageFileSupaBase(fileName: string): Observable<any> {
    return from(
      this.supabase.storage.from("images")
        .remove([fileName])
    )
      .pipe(
        map((response) => response.data),
        catchError((error) => { throw error })
      );
  }

  getStorageFileSupaBase(fileName: string): Observable<any> {
    return from(
      this.supabase.storage.from('img')
        .download(`${fileName}`)
    )
      .pipe(
        map((response) => response.data),
        catchError((error) => { throw error })
      );
  }
}
