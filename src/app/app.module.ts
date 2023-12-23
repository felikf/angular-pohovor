import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QRCodeModule } from 'angularx-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';

@NgModule({
  declarations: [
    AppComponent,
    FibonacciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
