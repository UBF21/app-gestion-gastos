import { Component, Input, OnInit } from '@angular/core';
import { TipoSaldoSupabaseService } from '../../services/tipo-saldo-supabase.service';
import { TipoSaldo } from '../../models/TipoSaldo';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'saldo-add-component',
  templateUrl: './saldo-add-component.component.html',
  styleUrls: ['./saldo-add-component.component.css']
})
export class SaldoAddComponentComponent implements OnInit {

  @Input()
  tiposSaldo: TipoSaldo[] = [];
  IsShowDialogAddSaldo: boolean = false;
  formAddSaldo:FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder,private tipoSaldoService: TipoSaldoSupabaseService) { }

  ngOnInit(): void {    
    this.formAddSaldo = this.formBuilder.group({
      monto: [0],
      tipoIngreso: [""],
      descripcion: [""]
    });


  }
  showDialogAddSaldo(): void {
    this.IsShowDialogAddSaldo = true;
  }
  onSubmitSaldo(): void {
    console.log(this.formAddSaldo.value);
  }
}
