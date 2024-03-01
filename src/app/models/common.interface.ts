export interface WeatherInfo {
  app_temp: number; //feels like
  app_max_temp: number; //feels like
  app_min_temp: number; //feels like
  temp: number;
  min_temp: number;
  max_temp: number;
  lat: number;
  lon: number;
  sunrise: string;
  sunset: string;
  datetime: string;
  clouds: number;
  ob_time: string;
  weather: {
    icon: string;
    code: string;
    description: string;
  };
  wind_spd: number;
}
export interface DailyForecastInfo {
  data: WeatherInfo[],
  city_name: string;
  country_code: string;
  lat: number;
  lon: number;
  state_code: string;
  timezone: string;
}
