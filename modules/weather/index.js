// App's Environment Variable Imports
import { OPEN_WEATHER_MAP_API_KEY, OPEN_WEATHER_MAP_BASE_URL } from "@env";

// fetch_weather_by_geolocation() ----> The said function will be used to fetch weather by `GEOLOCATION` (Latitude, Longitude) method
const fetch_weather_by_geolocation = async (
  latitude,
  longitude,
  temperature_unit
) => {
  const api = `${OPEN_WEATHER_MAP_BASE_URL}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_MAP_API_KEY}&units=${temperature_unit}`;
  const fetch_weather_forecast = await fetch(api);
  const weather_forecast = await fetch_weather_forecast.json();

  return weather_forecast;
};

// fetch_weather_by_city() ----> The said function will be used to fetch weather by `CITY` method
const fetch_weather_by_city = async (city, temperature_unit) => {
  const api = `${OPEN_WEATHER_MAP_BASE_URL}/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_MAP_API_KEY}&units=${temperature_unit}`;
  const fetch_weather_forecast = await fetch(api);
  const weather_forecast = await fetch_weather_forecast.json();

  return weather_forecast;
};

// fetch_hourly_weather_by_geolocation() ----> The said function will be used to fetch hourly weather by `GEOLOCATION` (Latitude, Longitude) method
const fetch_hourly_weather_by_geolocation = async (
  latitude,
  longitude,
  temperature_unit
) => {
  const api = `${OPEN_WEATHER_MAP_BASE_URL}/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_MAP_API_KEY}&units=${temperature_unit}`;
  const fetch_weather_forecast = await fetch(api);
  const weather_forecast = await fetch_weather_forecast.json();

  return weather_forecast;
};

// fetch_hourly_weather_by_city() ----> The said function will be used to fetch hourly weather by `CITY` method
const fetch_hourly_weather_by_city = async (city, temperature_unit) => {
  const api = `${OPEN_WEATHER_MAP_BASE_URL}/data/2.5/forecast?q=${city}&appid=${OPEN_WEATHER_MAP_API_KEY}&units=${temperature_unit}`;
  const fetch_weather_forecast = await fetch(api);
  const weather_forecast = await fetch_weather_forecast.json();

  return weather_forecast;
};

export {
  fetch_weather_by_city,
  fetch_weather_by_geolocation,
  fetch_hourly_weather_by_city,
  fetch_hourly_weather_by_geolocation,
};
