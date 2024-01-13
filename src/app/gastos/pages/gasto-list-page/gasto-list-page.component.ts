import { Component, OnInit } from '@angular/core';
import { GastoRead } from '../../models/GastoRead';
import { GastoSupabaseService } from '../../services/gasto-supabase.service';
import { TipoGastoSupabaseService } from '../../services/tipo-gasto-supabase.service';
import { TipoGasto } from '../../models/TipoGasto';
import { identifierName } from '@angular/compiler';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { filter, map, pipe } from 'rxjs';

@Component({
  selector: 'gasto-list-page',
  templateUrl: './gasto-list-page.component.html',
  styleUrls: ['./gasto-list-page.component.css']
})
export class GastoListPageComponent implements OnInit {

  gastos: GastoRead[] = [];
  tipoGastos: TipoGasto[] = [];

  constructor(private gastoService: GastoSupabaseService, private tipoGastoService: TipoGastoSupabaseService,
    private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllGastosQuincenales();
    this.getAllTipoGastos();

  }

  getAllGastosQuincenales(): void {
    this.gastoService.getAllGastosQuincenal()
      .subscribe(
        {
          next: (response) => {
            this.gastos = response;
            console.log(response);
          },
          error: (error) => { console.log(error); }
        }
      )
  }

  getAllTipoGastos(): void {
    this.tipoGastoService.getAllTipoGastos()
      .subscribe(
        {
          next: (response) => {
            this.tipoGastos = response;
            console.log(response);
          },
          error: (error) => {
            console.log(error);
          }
        }
      )
  }

  getIsSaldoUpdate(isGastoUpdate: boolean): void {
    if (isGastoUpdate) this.getAllGastosQuincenales();
  }

  getIsGastoAdd(isGastoAdd: boolean): void {
    if (isGastoAdd) this.getAllGastosQuincenales();
  }

  onDeleteSaldo(id: number): void {
    this.confirmationService.confirm({
      message: 'Estás seguro de eliminar este registros?',
      header: 'Confirmación de eliminación.',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({ severity: 'success', summary: 'Exítoso', detail: 'Se Eliminó correctamente.' });
        this.deleteGasto(id);
        this.getAllGastosQuincenales();
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

  deleteGasto(id: number): void {
    this.gastoService.deleteGastoSupaBase(id)
      .subscribe(
        {
          next: (response) => console.log(response),
          error: (error) => console.log(error)
        }
      );
  }
}
