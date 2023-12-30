import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCharPieComponentComponent } from './components/shared-char-pie-component/shared-char-pie-component.component';
import { SharedNavbarComponentComponent } from './components/shared-navbar-component/shared-navbar-component.component';
import { SharedFooterComponentComponent } from './components/shared-footer-component/shared-footer-component.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    SharedCharPieComponentComponent,
    SharedNavbarComponentComponent,
    SharedFooterComponentComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[
    SharedCharPieComponentComponent,
    SharedNavbarComponentComponent,
    SharedFooterComponentComponent
  ],
  providers:[]
})
export class SharedModule { }
