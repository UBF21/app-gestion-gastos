import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaldoListPageComponent } from './pages/saldo-list-page/saldo-list-page.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SaldoAddComponentComponent } from './components/saldo-add-component/saldo-add-component.component';
import { SaldoUpdateComponentComponent } from './components/saldo-update-component/saldo-update-component.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule,NgModel } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SaldoListPageComponent,
    SaldoAddComponentComponent,
    SaldoUpdateComponentComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SaldoListPageComponent,
    SaldoAddComponentComponent
  ],
  providers: []
})
export class SaldoModule { }
