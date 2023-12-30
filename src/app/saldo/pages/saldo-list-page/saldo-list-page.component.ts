import { Component, OnInit } from '@angular/core';
import { SaldoSupebaseService } from '../../services/saldo-supebase.service';
import { Saldo } from '../../models/Saldo';
import { ItemChartPie } from '../../models/ItemChartPie';
import { Observable } from 'rxjs';

@Component({
  selector: 'saldo-list-page',
  templateUrl: './saldo-list-page.component.html',
  styleUrls: ['./saldo-list-page.component.css']
})
export class SaldoListPageComponent implements OnInit {

  saldos: Saldo[] = [];
  $saldos:Observable<Saldo[]> = new Observable<Saldo[]>();
  itemsChartPie: ItemChartPie[] = [];

  constructor(private saldoService: SaldoSupebaseService) { }

  ngOnInit(): void {
    this.getAllSaldosSupaBase();
    this.getDatosTipoSaldoSupaBase();
    this.$saldos = this.saldoService.getAllSaldos();

  }

  getAllSaldosSupaBase(): void {
    this.saldoService.getAllSaldos()
      .subscribe(
        {
          next: (response) => {
            this.saldos = response;
            // console.log(response);
          },
          error: (error) => {
            console.log(error);
          }
        }
      )
  }

  getDatosTipoSaldoSupaBase(): void {
    this.saldoService.getDataChartTiposIngreso()
      .subscribe(
        {
          next: (response) => {
            this.itemsChartPie = response;
            console.log("Lo que enviaré al padre: ",this.itemsChartPie);
            },
          error: (error) => console.log(error)
        }
      )
  }
}
