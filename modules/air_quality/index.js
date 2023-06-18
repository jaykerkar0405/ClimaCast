// App's Environment Variable Imports
import { OPEN_WEATHER_MAP_API_KEY, OPEN_WEATHER_MAP_API_BASE_URL } from "@env";

// fetch_air_quality() ----> The said function will be used to fetch air quality by `GEOLOCATION` (Latitude, Longitude) method
const fetch_air_quality = async (latitude, longitude) => {
  const api = `${OPEN_WEATHER_MAP_API_BASE_URL}/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_MAP_API_KEY}`;
  const fetch_air_quality = await fetch(api);
  const air_quality = fetch_air_quality.json();

  return air_quality;
};

// fetch_hourly_air_quality() ----> The said function will be used to fetch hourly air quality by `GEOLOCATION` (Latitude, Longitude) method
const fetch_hourly_air_quality = async (latitude, longitude) => {
  const api = `${OPEN_WEATHER_MAP_API_BASE_URL}/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_MAP_API_KEY}`;
  const fetch_air_quality = await fetch(api);
  const air_quality = fetch_air_quality.json();

  return air_quality;
};

export { fetch_air_quality, fetch_hourly_air_quality };
