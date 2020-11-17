import { WeatherModel } from '../model/weather.model';

export const WEATHER_MOCK: WeatherModel =
  {
    coord: {
      lon: 14.42,
      lat: 50.09
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n'
      }
    ],
    base: 'stations',
    main: {
      temp: 282.84,
      feels_like: 279.68,
      temp_min: 282.04,
      temp_max: 283.71,
      pressure: 1027,
      humidity: 76
    },
    visibility: 10000,
    wind: {
      speed: 3.1,
      deg: 210
    },
    clouds: {
      all: 75
    },
    dt: 1605644804,
    sys: {
      type: 1,
      id: 6835,
      country: 'CZ',
      sunrise: 1605593953,
      sunset: 1605626145
    },
    timezone: 3600,
    id: 3067696,
    name: 'Prague',
    cod: 200
  }
;
