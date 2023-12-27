import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaldoListPageComponent } from './pages/saldo-list-page/saldo-list-page.component';
import { SaldoAddPageComponent } from './pages/saldo-add-page/saldo-add-page.component';
import { SaldoUpdatePageComponent } from './pages/saldo-update-page/saldo-update-page.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    SaldoListPageComponent,
    SaldoAddPageComponent,
    SaldoUpdatePageComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[
    SaldoListPageComponent
  ],
  providers:[]
})
export class SaldoModule { }
