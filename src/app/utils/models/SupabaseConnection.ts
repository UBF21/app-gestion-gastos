import { ENVIRONMENT_INITIALIZER } from "@angular/core";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { environment } from "src/environments/environment";

export class SupabaseConnection {

    private static URL: string = environment.URL_SUPABASE;
    private static API_KEY: string = environment.API_KEY;
    private static INSTANTE_SUPABASE: SupabaseClient = null!;

    public static GetInstanceSupaBase(): SupabaseClient {
        if (this.INSTANTE_SUPABASE === null) this.INSTANTE_SUPABASE = createClient(this.URL, this.API_KEY);
        return this.INSTANTE_SUPABASE;
    }
}  