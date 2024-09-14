import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({ declarations: [AppComponent, WeatherComponent],
    bootstrap: [AppComponent], imports: [BrowserModule, AppRoutingModule, FormsModule, NgOptimizedImage], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
