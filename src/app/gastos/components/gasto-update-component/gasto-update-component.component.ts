import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TipoGasto } from '../../models/TipoGasto';
import { GastoSupabaseService } from '../../services/gasto-supabase.service';
import { BuilderValidationMessageError } from 'src/app/utils/models/BuilderValidationMessageError';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GastoWrite } from '../../models/GastoWrite';
import { ItemBuilderValidationMessageError } from 'src/app/utils/interfaces/ItemBuilderValidationMessageError';

@Component({
  selector: 'gasto-update-component',
  templateUrl: './gasto-update-component.component.html',
  styleUrls: ['./gasto-update-component.component.css']
})
export class GastoUpdateComponentComponent implements OnInit {

  @Input()
  tipoGastos: TipoGasto[] = []

  @Input()
  gasto: GastoWrite = new GastoWrite();

  @Output()
  onIsGastoUpdate: EventEmitter<boolean> = new EventEmitter<boolean>();

  formUpdateGasto: FormGroup = new FormGroup({});
  validationsMessages: ItemBuilderValidationMessageError = { itemsValidationMessageError: {} };

  IsShowDialogUpdateGasto: boolean = false;

  constructor(private gastoService: GastoSupabaseService, private builderValidationsMessage: BuilderValidationMessageError,
    private formBuilder: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {
    this.formUpdateGasto = this.formBuilder.group({
      monto: ["", Validators.required],
      tipoIngreso: ["", Validators.required],
      descripcion: ["", Validators.required]
    });

    this.generateValidationsMessage();
  }

  showDialogUpdateGasto(): void {
    this.getControls.get("monto")?.setValue(this.gasto.monto);
    this.getControls.get("descripcion")?.setValue(this.gasto.descripcion);
    this.getControls.get("tipoIngreso")?.setValue(this.gasto.idTipoGasto);
    this.IsShowDialogUpdateGasto = true;
  }

  get getControls(): FormGroup {
    return this.formUpdateGasto;
  }

  onSubmitGasto(): void {
    let body: GastoWrite = new GastoWrite();
    body.id = this.gasto.id;
    body.idAuth = this.gasto.idAuth;
    body.idTipoGasto = +(this.getControls.get("tipoIngreso")?.value);
    body.descripcion = this.getControls.get("descripcion")?.value;
    body.monto = +(this.getControls.get("monto")?.value);
    body.operation = 'Update';
    this.updateGasto(body);
  }

  updateGasto(gasto: GastoWrite): void {

    this.gastoService.updateGastoSupaBase(gasto)
      .subscribe(
        {
          next: (response) => {
            this.onIsGastoUpdate.emit(true);
            this.messageService.add({ severity: 'success', summary: 'Existoso', detail: 'Se Actualizó correctamente el saldo.' });
            console.log(response);
          },
          error: (error) => {
            this.onIsGastoUpdate.emit(false);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se Actualizó correctamente el saldo.' });
            console.log(error);
          }
        }
      )
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
