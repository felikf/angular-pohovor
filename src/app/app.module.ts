import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxMaskModule} from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { InputRefDirective } from '../shared/input-ref.directive';
import { DebounceInputDirective } from '../shared/debounce-input-component.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputRefDirective,
    DebounceInputDirective
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
