import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ConfigModel } from './config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configurationStream$ = new BehaviorSubject<ConfigModel>({
    apiUrl: 'https://api.openweathermap.org',
    key: '505b73a751eb3dcb4f9fb34582504e59',
    docs: 'https://openweathermap.org/current'
  });
  configuration$ = this.configurationStream$.asObservable();
}
