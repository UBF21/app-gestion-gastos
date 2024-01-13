import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastoListPageComponent } from './pages/gasto-list-page/gasto-list-page.component';
import { GastoAddComponentComponent } from './components/gasto-add-component/gasto-add-component.component';
import { GastoUpdateComponentComponent } from './components/gasto-update-component/gasto-update-component.component';
import { PrimengModule } from '../primeng/primeng.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    GastoListPageComponent,
    GastoAddComponentComponent,
    GastoUpdateComponentComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    GastoListPageComponent,
    GastoAddComponentComponent,
    GastoUpdateComponentComponent
  ],
  providers: [MessageService, ConfirmationService]
})
export class GastosModule { }
