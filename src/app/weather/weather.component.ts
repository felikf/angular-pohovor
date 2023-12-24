import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from '../services/config.service';
import { Weather, WeatherModel } from '../model/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  response: WeatherModel;
  name = 'Prague';

  constructor(
    private readonly configService: ConfigService,
    private readonly http: HttpClient
  ) {}

  ngOnInit(): void {
    this.configService.configuration$.subscribe(config => {
      this.http
        .get<WeatherModel>(
          config.apiUrl + '/data/2.5/weather?q=' + this.name + '&' + 'appid=' + config.key + '&units=metric&lang=CZ'
        )
        .subscribe(response => {
          this.response = response;
        });
    });
  }

  getImg(weather: Weather): string {
    return 'http://openweathermap.org/img/wn/' + weather.icon + '@2x.png';
  }

  getSunrise(): string {
    return new Date(this.response.sys.sunrise * 1000).toString();
  }

  getSunset(): string {
    return new Date(this.response.sys.sunset * 1000).toString();
  }
}
