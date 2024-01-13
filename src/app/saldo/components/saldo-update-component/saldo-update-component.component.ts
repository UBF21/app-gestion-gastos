import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TipoSaldoSupabaseService } from '../../services/tipo-saldo-supabase.service';
import { TipoSaldo } from '../../models/TipoSaldo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuilderValidationMessageError } from 'src/app/utils/models/BuilderValidationMessageError';
import { ItemBuilderValidationMessageError } from 'src/app/utils/interfaces/ItemBuilderValidationMessageError';
import { SaldoWrite } from '../../models/SaldoWrite';
import { SaldoSupebaseService } from '../../services/saldo-supebase.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'saldo-update-component',
  templateUrl: './saldo-update-component.component.html',
  styleUrls: ['./saldo-update-component.component.css']
})
export class SaldoUpdateComponentComponent implements OnInit {

  @Input()
  tiposSaldo: TipoSaldo[] = [];

  @Input()
  saldo: SaldoWrite = new SaldoWrite();

  @Output()
  onIsSaldoUpdate: EventEmitter<boolean> = new EventEmitter<boolean>();

  IsShowDialogUpdateSaldo: boolean = false;
  formUpdateSaldo: FormGroup = new FormGroup({});
  validationsMessages: ItemBuilderValidationMessageError = { itemsValidationMessageError: {} };

  constructor(private formBuilder: FormBuilder, private tipoSaldoService: TipoSaldoSupabaseService, private builderValidationsMessage: BuilderValidationMessageError,
    private saldoService: SaldoSupebaseService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.formUpdateSaldo = this.formBuilder.group({
      monto: ["", Validators.required],
      tipoIngreso: ["", Validators.required],
      descripcion: ["", Validators.required]
    });

    this.generateValidationsMessage();
  }

  get getControls(): FormGroup {
    return this.formUpdateSaldo;
  }

  showDialogUpdateSaldo(): void {

    this.getControls.get('monto')?.setValue(this.saldo.monto);
    this.getControls.get('descripcion')?.setValue(this.saldo.descripcion);
    this.getControls.get('tipoIngreso')?.setValue(this.saldo.idTipoSaldo);

    this.IsShowDialogUpdateSaldo = true;
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

  onSubmitSaldo(): void {
    let body: SaldoWrite = new SaldoWrite();
    body.id = this.saldo.id;
    body.idAuth = 1;
    body.monto = +(this.getControls.get("monto")?.value);
    body.idTipoSaldo = +(this.getControls.get("tipoIngreso")?.value);
    body.descripcion = this.getControls.get("descripcion")?.value;
    body.operation = 'Update';

    this.updateSaldo(body);
  }

  updateSaldo(saldo: SaldoWrite) {
    this.saldoService.updateSaldoSupaBase(saldo)
      .subscribe(
        {
          next: (response) => {
            this.onIsSaldoUpdate.emit(true);
            this.messageService.add({severity:'success',summary:'Existoso',detail:'Se Actualizó correctamente el saldo.'});
            console.log(response);
          },
          error: (error) => {
            this.onIsSaldoUpdate.emit(false);
            this.messageService.add({severity:'error',summary:'Error',detail:'No se Actualizó correctamente el saldo.'});
            console.log(error);
          }
        }
      )
  }
}
