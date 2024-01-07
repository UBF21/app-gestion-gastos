import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TipoSaldoSupabaseService } from '../../services/tipo-saldo-supabase.service';
import { TipoSaldo } from '../../models/TipoSaldo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuilderValidationMessageError } from 'src/app/utils/models/BuilderValidationMessageError';
import { ItemBuilderValidationMessageError } from 'src/app/utils/interfaces/ItemBuilderValidationMessageError';
import { SaldoWrite } from '../../models/SaldoWrite';
import { ChevronLeftIcon } from 'primeng/icons/chevronleft';
import { SaldoSupebaseService } from '../../services/saldo-supebase.service';

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
    private saldoService: SaldoSupebaseService) { }

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

    this.updateSaldo(body, this.saldo.id);
  }

  updateSaldo(saldo: SaldoWrite, id: number) {
    this.saldoService.updateSaldoSupaBase(saldo, id)
      .subscribe(
        {
          next: (response) => {
            this.onIsSaldoUpdate.emit(true);
            console.log(response);
          },
          error: (error) => {
            this.onIsSaldoUpdate.emit(false);
            console.log(error);
          }
        }
      )
  }
}
