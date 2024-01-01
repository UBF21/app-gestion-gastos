import { Component, Input, OnInit } from '@angular/core';
import { TipoSaldoSupabaseService } from '../../services/tipo-saldo-supabase.service';
import { TipoSaldo } from '../../models/TipoSaldo';

@Component({
  selector: 'saldo-update-component',
  templateUrl: './saldo-update-component.component.html',
  styleUrls: ['./saldo-update-component.component.css']
})
export class SaldoUpdateComponentComponent implements OnInit{

  @Input()
  tiposSaldo:TipoSaldo[] = [];
  IsShowDialogUpdateSaldo:boolean = false;

  constructor(private tipoSaldoService:TipoSaldoSupabaseService){}

  ngOnInit(): void {
  }

  showDialogUpdateSaldo(){
    this.IsShowDialogUpdateSaldo = true;
  }
  onSubmitSaldo():void {
    
  }
}
