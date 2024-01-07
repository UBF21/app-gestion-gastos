import { Component, OnInit } from '@angular/core';
import { SaldoSupebaseService } from '../../services/saldo-supebase.service';
import { SaldoRead } from '../../models/SaldoRead';
import { ItemChartPie } from '../../models/ItemChartPie';
import { TipoSaldoSupabaseService } from '../../services/tipo-saldo-supabase.service';
import { TipoSaldo } from '../../models/TipoSaldo';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'saldo-list-page',
  templateUrl: './saldo-list-page.component.html',
  styleUrls: ['./saldo-list-page.component.css']
})
export class SaldoListPageComponent implements OnInit {

  saldos: SaldoRead[] = [];
  tiposSaldo: TipoSaldo[] = [];
  itemsChartPie: ItemChartPie[] = [];

  constructor(private saldoService: SaldoSupebaseService, private tipoSaldoService: TipoSaldoSupabaseService, private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllSaldos();
    this.getDatosChartTipoSaldo();
    this.getAllTiposSaldo();
  }

  getIsSaldoUpdate(isSaldoUpdate: boolean): void {
    if (isSaldoUpdate) {
      this.getAllSaldos();
      this.getDatosChartTipoSaldo();
    }
  }

  getIsSaldoAdd(isSaldoAdd: boolean): void {
    if (isSaldoAdd) {
      this.getAllSaldos();
      this.getDatosChartTipoSaldo();
    }
  }

  getAllSaldos(): void {
    this.saldoService.getAllSaldosSupaBase()
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

  getDatosChartTipoSaldo(): void {
    this.itemsChartPie = [];
    this.saldoService.getDataChartTiposIngresoSupaBase()
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
          next: (response) => {
            console.log(response);
            this.tiposSaldo = response;
          },
          error: (error) => console.log(error)
        });
  }

  onDeleteSaldo(id: number): void {

    this.confirmationService.confirm({
      message: 'Estás seguro de eliminar este registros?',
      header: 'Confirmación de eliminación.',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({ severity: 'success', summary: 'Exítoso', detail: 'Se Eliminó correctamente.' });
        this.deleteSaldo(id);
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'Se Canceló la eliminación.' });
            break;
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'No Eliminar', detail: 'No se procedió la eliminación.' });
            break;
          default:
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error severo.' });
            break;
        }
      }
    });

  }

  deleteSaldo(id: number) {
    this.saldoService.deleteSaldoSupaBase(id)
      .subscribe(
        {
          next: (response) => {
            this.getAllSaldos();
            this.getDatosChartTipoSaldo();
          },
          error: (error) => { console.log(error); }
        }
      )
  }
}
