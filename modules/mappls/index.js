// App's Environment Variable Imports
import { MAPPLS_API_KEY, MAPPLS_CLIENT_ID, MAPPLS_CLIENT_SECRET } from "@env";

// App's Internal Imports
import { validate_weather_location } from "../../modules";

// fetch_weather_location_by_geolocation() ----> The said function will be used to fetch weather location by `GEOLOCATION` (Latitude, Longitude) method
const fetch_weather_location_by_geolocation = async (latitude, longitude) => {
  const api = `https://apis.mappls.com/advancedmaps/v1/${MAPPLS_API_KEY}/rev_geocode?lat=${latitude}&lng=${longitude}&region=IND&lang=en`;
  const fetched_weather_location = await fetch(api);

  const weather_location = validate_weather_location(
    (await fetched_weather_location.json()).results[0].city
  );

  return weather_location;
};

// generate_authentication_token() ----> The said function will be used to generate authentication token for authorizing other API related functions
const generate_authentication_token = async () => {
  const timestamp = new Date();
  const api = "https://outpost.mappls.com/api/security/oauth/token";

  const options = {
    method: "POST",
    headers: {
      charset: "UTF-8",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: MAPPLS_CLIENT_ID,
      grant_type: "client_credentials",
      client_secret: MAPPLS_CLIENT_SECRET,
    }).toString(),
  };

  const fetched_authentication_token = await fetch(api, options);
  const authentication_token = await fetched_authentication_token.json();

  return {
    timestamp: {
      date: timestamp.getDate(),
      hours: timestamp.getHours(),
      month: timestamp.getMonth(),
      year: timestamp.getFullYear(),
      minutes: timestamp.getMinutes(),
      seconds: timestamp.getSeconds(),
      milliseconds: timestamp.getMilliseconds(),
    },
    expires_in: authentication_token.expires_in,
    authentication_token: authentication_token.access_token,
  };
};

// auto_suggest() ----> The said function will be used to auto suggest places based upon the query executed by the user
const auto_suggest = async (search_query, authentication_token) => {
  const api = `https://atlas.mappls.com/api/places/search/json?query=${search_query}&region=IND&pod=CITY`;

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${authentication_token}`,
    },
  };

  const fetched_auto_suggestion = await fetch(api, options);
  const auto_suggestion = await fetched_auto_suggestion.json();

  return auto_suggestion.suggestedLocations;
};

export {
  auto_suggest,
  generate_authentication_token,
  fetch_weather_location_by_geolocation,
};
