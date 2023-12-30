import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [],
  imports: [],
  exports:[
    ButtonModule,
    TableModule,
    CardModule,
    ChartModule,
    DialogModule
  ]
})
export class PrimengModule { }
