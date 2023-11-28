// React Hook Imports
import { useRef, useState } from "react";

// App's Internal Imports
import {
  Footer,
  Timeline,
  HourlyForecast,
  UtilityComponents,
  WeatherComponents,
  WeatherParameters,
  WeatherInformation,
} from "../../components";

const Weather = ({
  future_forecast,
  weather_location,
  weather_forecast,
  temperature_unit,
  is_timeline_active,
  set_is_timeline_active,
}) => {
  const snapshot_ref = useRef(null);
  const [timeline_id, set_timeline_id] = useState(1);

  return (
    <>
      <Timeline
        timeline_id={timeline_id}
        timeline_type={"weather"}
        set_timeline_id={set_timeline_id}
        future_forecast={future_forecast}
        temperature_unit={temperature_unit}
        is_timeline_active={is_timeline_active}
        set_is_timeline_active={set_is_timeline_active}
      />

      <WeatherComponents
        snapshot_ref={snapshot_ref}
        temperature_unit={temperature_unit}
        is_timeline_active={is_timeline_active}
        weather_forecast={{
          temperature: weather_forecast.main.temp,
          wind_speed: weather_forecast.wind.speed,
          humidity: weather_forecast.main.humidity,
          pressure: weather_forecast.main.pressure,
          weather_icon: weather_forecast.weather[0].icon,
        }}
      />

      <HourlyForecast
        offset={0}
        temperature_unit={temperature_unit}
        future_forecast={future_forecast.list}
      />

      <WeatherParameters
        temperature_unit={temperature_unit}
        weather_forecast={{
          sunset: weather_forecast.sys.sunset,
          sunrise: weather_forecast.sys.sunrise,
          feels_like: weather_forecast.main.feels_like,
        }}
      />

      <UtilityComponents
        snapshot_ref={snapshot_ref}
        weather_forecast_location={weather_location}
      />

      <WeatherInformation
        temperature_unit={temperature_unit}
        weather_forecast={{
          clouds: weather_forecast.clouds.all,
          latitude: weather_forecast.coord.lat,
          longitude: weather_forecast.coord.lon,
          wind_gust: weather_forecast.wind.gust,
          visibility: weather_forecast.visibility,
          wind_speed: weather_forecast.wind.speed,
          wind_direction: weather_forecast.wind.deg,
          min_temperature: weather_forecast.main.temp_min,
          max_temperature: weather_forecast.main.temp_max,
          weather_condition: weather_forecast.weather[0].main,
        }}
      />

      <Footer />
    </>
  );
};

export default Weather;
