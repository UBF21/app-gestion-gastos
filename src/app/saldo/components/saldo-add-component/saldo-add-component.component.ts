import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TipoSaldoSupabaseService } from '../../services/tipo-saldo-supabase.service';
import { TipoSaldo } from '../../models/TipoSaldo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuilderValidationMessageError } from 'src/app/utils/models/BuilderValidationMessageError';
import { ItemBuilderValidationMessageError } from 'src/app/utils/interfaces/ItemBuilderValidationMessageError';
import { SaldoRead } from '../../models/SaldoRead';
import { SaldoSupebaseService } from '../../services/saldo-supebase.service';
import { SaldoWrite } from '../../models/SaldoWrite';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'saldo-add-component',
  templateUrl: './saldo-add-component.component.html',
  styleUrls: ['./saldo-add-component.component.css']
})
export class SaldoAddComponentComponent implements OnInit {

  @Input()
  tiposSaldo: TipoSaldo[] = [];

  @Output()
  onIsSaldoAdd: EventEmitter<boolean> = new EventEmitter<boolean>();

  IsShowDialogAddSaldo: boolean = false;
  formAddSaldo: FormGroup = new FormGroup({});

  validationsMessages: ItemBuilderValidationMessageError = { itemsValidationMessageError: {} };

  constructor(private formBuilder: FormBuilder, private tipoSaldoService: TipoSaldoSupabaseService, private builderValidationsMessage: BuilderValidationMessageError,
    private saldoService: SaldoSupebaseService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.formAddSaldo = this.formBuilder.group({
      monto: ["", Validators.required],
      tipoIngreso: ["", Validators.required],
      descripcion: ["", Validators.required]
    });

    this.generateValidationsMessage();
  }

  showDialogAddSaldo(): void {
    this.IsShowDialogAddSaldo = true;
  }

  onSubmitSaldo(): void {
    let body: SaldoWrite = new SaldoWrite();
    let tipoSaldo: TipoSaldo = this.formAddSaldo.get('tipoIngreso')?.value as TipoSaldo;

    body.descripcion = this.formAddSaldo.get('descripcion')?.value;
    body.monto = +(this.formAddSaldo.get('monto')?.value);
    body.fecha = new Date();
    body.idTipoSaldo = tipoSaldo.id;
    body.idAuth = 1;


    this.addSaldo(body);
  }

  addSaldo(saldo: SaldoWrite): void {
    this.saldoService.addSaldoSupabase(saldo)
      .subscribe(
        {
          next: (response) => {
            this.onIsSaldoAdd.next(true);
            this.messageService.add({ severity: 'success', summary: 'Existoso', detail: 'Se Guardó correctamente el saldo.' });
            console.log(response);
          },
          error: (error) => {
            this.onIsSaldoAdd.next(false);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se Guardó correctamente el saldo.' });
            console.log(error);
          }
        })
  }

  generateValidationsMessage(): void {
    this.builderValidationsMessage.addValidationMessage('monto',
      {
        required: 'El Monto es requerido.'
      });

    this.builderValidationsMessage.addValidationMessage('tipoIngreso',
      {
        required: 'El Tipo de ingreso es requerido.'
      });

    this.builderValidationsMessage.addValidationMessage('descripcion',
      {
        required: 'La Descripción es requerido.'
      });

    this.validationsMessages = this.builderValidationsMessage.getValidationsMessage;
  }
}
