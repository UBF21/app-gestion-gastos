import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginPageComponent } from './pages/auth-login-page/auth-login-page.component';
import { AuthRegisterPageComponent } from './pages/auth-register-page/auth-register-page.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule, NgModel ,ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    AuthLoginPageComponent,
    AuthRegisterPageComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[
    AuthLoginPageComponent,
    AuthRegisterPageComponent
  ],
  providers:[MessageService]
})
export class AuthModule { }
