import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  declarations: [],
  imports: [],
  exports:[
    ButtonModule,
    TableModule,
    CardModule,
    ChartModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    KeyFilterModule,
    DropdownModule,
    TooltipModule,
    ScrollPanelModule,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class PrimengModule { }
