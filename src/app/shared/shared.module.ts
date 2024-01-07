import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCharPieComponentComponent } from './components/shared-char-pie-component/shared-char-pie-component.component';
import { SharedNavbarComponentComponent } from './components/shared-navbar-component/shared-navbar-component.component';
import { SharedFooterComponentComponent } from './components/shared-footer-component/shared-footer-component.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedErrorMessageFieldsComponent } from './components/shared-error-message-fields/shared-error-message-fields.component';



@NgModule({
  declarations: [
    SharedCharPieComponentComponent,
    SharedNavbarComponentComponent,
    SharedFooterComponentComponent,
    SharedErrorMessageFieldsComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[
    SharedCharPieComponentComponent,
    SharedNavbarComponentComponent,
    SharedFooterComponentComponent,
    SharedErrorMessageFieldsComponent
  ],
  providers:[]
})
export class SharedModule { }
