import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TipoGasto } from '../../models/TipoGasto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuilderValidationMessageError } from 'src/app/utils/models/BuilderValidationMessageError';
import { GastoSupabaseService } from '../../services/gasto-supabase.service';
import { ItemBuilderValidationMessageError } from 'src/app/utils/interfaces/ItemBuilderValidationMessageError';
import { GastoWrite } from '../../models/GastoWrite';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'gasto-add-component',
  templateUrl: './gasto-add-component.component.html',
  styleUrls: ['./gasto-add-component.component.css']
})
export class GastoAddComponentComponent implements OnInit {

  @Input()
  tipoGastos: TipoGasto[] = [];

  @Output()
  onIsGastoAdd: EventEmitter<boolean> = new EventEmitter<boolean>();

  formAddGasto: FormGroup = new FormGroup({});
  validationsMessages: ItemBuilderValidationMessageError = { itemsValidationMessageError: {} };

  IsShowDialogAddGasto: boolean = false;

  constructor(private gastoService: GastoSupabaseService, private builderValidationsMessage: BuilderValidationMessageError,
    private formBuilder: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {
    this.formAddGasto = this.formBuilder.group({
      monto: ["", Validators.required],
      tipoIngreso: ["", Validators.required],
      descripcion: ["", Validators.required]
    });

    this.generateValidationsMessage();
  }

  showDialogAddGasto(): void {
    this.IsShowDialogAddGasto = true;
  }

  get getControls(): FormGroup {
    return this.formAddGasto;
  }

  onSubmitGasto(): void {
    let gasto: GastoWrite = new GastoWrite();
    gasto.id = 0;
    gasto.descripcion = this.getControls.get("descripcion")?.value;
    gasto.idAuth = 1;
    gasto.monto = +(this.getControls.get("monto")?.value);
    gasto.idTipoGasto = +(this.getControls.get("tipoIngreso")?.value);
    gasto.fecha = new Date();

    // console.log(gasto);
    this.addGasto(gasto);
  }

  addGasto(gasto: GastoWrite) {

    this.gastoService.addGastoSupaBase(gasto)
      .subscribe(
        {
          next: (response) => {
            this.onIsGastoAdd.emit(true);
            this.messageService.add({ severity: 'success', summary: 'Existoso', detail: 'Se Guardó correctamente el Gasto.' });
            console.log(response);
          },
          error: (error) => {
            this.onIsGastoAdd.emit(false);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se Guardó correctamente el saldo.' });
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
