import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimengModule } from './primeng/primeng.module';
import { SaldoModule } from './saldo/saldo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengModule,
    SaldoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
