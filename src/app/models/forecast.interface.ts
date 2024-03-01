export interface Forecast {
  Headline: Headline;
  DailyForecasts: DailyForecast[];
}

interface Headline {
  EffectiveDate: string;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate: string | null;
  EndEpochDate: string | null;
  MobileLink: string;
  Link: string;
}

export interface DailyForecast {
  Date: string;
  EpochDate: number;
  Temperature: Temperature;
  Day: DayNight;
  Night: DayNight;
  Sources: string[];
  MobileLink: string;
  RealFeelTemperature: Temperature;
  Link: string;
  Sun: SunMoon;
  Moon: SunMoon;
}

interface SunMoon {
  Rise: string;
  Set: string;
  EpochSet: string;
  EpochRise: string;
  Phase: string;
  Age: string;
}
interface Temperature {
  Minimum: TemperatureValue;
  Maximum: TemperatureValue;
}

interface TemperatureValue {
  Value: number;
  Unit: string;
  UnitType: number;
}

interface DayNight {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  ShortPhrase: string;
  LongPhrase: string;
  Wind: {Speed: TemperatureValue}
}
