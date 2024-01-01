import { Component, OnInit } from '@angular/core';
import { SaldoSupebaseService } from '../../services/saldo-supebase.service';
import { Saldo } from '../../models/Saldo';
import { ItemChartPie } from '../../models/ItemChartPie';
import { Observable } from 'rxjs';
import { TipoSaldoSupabaseService } from '../../services/tipo-saldo-supabase.service';
import { TipoSaldo } from '../../models/TipoSaldo';

@Component({
  selector: 'saldo-list-page',
  templateUrl: './saldo-list-page.component.html',
  styleUrls: ['./saldo-list-page.component.css']
})
export class SaldoListPageComponent implements OnInit {

  saldos: Saldo[] = [];
  tiposSaldo:TipoSaldo[] = [];
  itemsChartPie: ItemChartPie[] = [];

  constructor(private saldoService: SaldoSupebaseService,private tipoSaldoService:TipoSaldoSupabaseService ) { }

  ngOnInit(): void {
    this.getAllSaldosSupaBase();
    this.getDatosChartTipoSaldoSupaBase();
    this.getAllTiposSaldo();
  }

  getAllSaldosSupaBase(): void {
    this.saldoService.getAllSaldos()
      .subscribe(
        {
          next: (response) => {
            this.saldos = response;
          },
          error: (error) => {
            console.log(error);
          }
        }
      )
  }
  getDatosChartTipoSaldoSupaBase(): void {
    this.saldoService.getDataChartTiposIngreso()
      .subscribe(
        {
          next: (response) => {
            this.itemsChartPie = response;
            },
          error: (error) => console.log(error)
        }
      )
  }

  getAllTiposSaldo(): void {
    this.tipoSaldoService.getAllTiposSaldoSupaBase()
      .subscribe(
        {
          next:(response)=> {
            console.log(response);
            this.tiposSaldo = response;
          },
          error:(error)=> console.log(error)
        });
  }
}
