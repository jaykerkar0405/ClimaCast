// React Native Component Imports
import { ScrollView, RefreshControl } from "react-native";

// React Hook Imports
import { useState, useEffect, useContext } from "react";

// App's External Imports
import analytics from "@react-native-firebase/analytics";

// App's Internal Imports
import {
  Header,
  TabBar,
  Weather,
  AirQuality,
  WeatherLoader,
} from "../../components";
import {
  fetch_air_quality,
  fetch_weather_by_city,
  redirect_to_error_screen,
  fetch_weather_by_geolocation,
  fetch_hourly_weather_by_city,
  fetch_hourly_weather_by_geolocation,
  fetch_weather_location_by_geolocation,
} from "../../modules";
import { screen_height } from "../../constants";

// App's Context Imports
import { WalkThroughContext, TemperatureUnitContext } from "../../contexts";

const Main = ({ type, identifier, navigation }) => {
  const [loading, set_loading] = useState(true);
  const [refreshing, set_refreshing] = useState(false);
  const [air_quality, set_air_quality] = useState(null);
  const [active_tab, set_active_tab] = useState("weather");
  const [future_forecast, set_future_forecast] = useState(null);
  const { walk_through_status } = useContext(WalkThroughContext);
  const { temperature_unit } = useContext(TemperatureUnitContext);
  const [weather_forecast, set_weather_forecast] = useState(null);
  const [weather_location, set_weather_location] = useState(null);
  const [is_timeline_active, set_is_timeline_active] = useState(false);
  const [scroll_view_height, set_scroll_view_height] = useState(
    1.685 * screen_height
  );

  const fetch_air_quality_forecast = async (latitude, longitude) => {
    const fetched_air_quality = await fetch_air_quality(latitude, longitude);

    if (fetched_air_quality.list) {
      set_air_quality(fetched_air_quality);
    } else {
      redirect_to_error_screen(
        navigation,
        "Home",
        "We are unable to search weather forecast for the city name entered",
        "home"
      );
    }
  };

  const fetch_weather_forecast = async () => {
    if (type === "geolocation") {
      const fetched_weather_forecast = await fetch_weather_by_geolocation(
        identifier.latitude,
        identifier.longitude,
        temperature_unit
      );

      if (fetched_weather_forecast.cod === 200) {
        set_weather_forecast(fetched_weather_forecast);
        set_weather_location(
          await fetch_weather_location_by_geolocation(
            identifier.latitude,
            identifier.longitude
          )
        );

        const fetched_hourly_weather_forecast =
          await fetch_hourly_weather_by_geolocation(
            identifier.latitude,
            identifier.longitude,
            temperature_unit
          );

        if (Number(fetched_hourly_weather_forecast.cod) === 200) {
          set_future_forecast(fetched_hourly_weather_forecast);
          set_loading(false);
          fetch_air_quality_forecast(identifier.latitude, identifier.longitude);
        } else {
          redirect_to_error_screen(
            navigation,
            "Home",
            "We are unable to search weather forecast for the city name entered",
            "home"
          );
        }
      } else {
        redirect_to_error_screen(
          navigation,
          "Home",
          "We are unable to search weather forecast for the city name entered",
          "home"
        );
      }
    }

    if (type === "city") {
      const fetched_weather_forecast = await fetch_weather_by_city(
        identifier.city,
        temperature_unit
      );

      if (fetched_weather_forecast.cod === 200) {
        set_weather_forecast(fetched_weather_forecast);
        set_weather_location(
          await fetch_weather_location_by_geolocation(
            fetched_weather_forecast.coord.lat,
            fetched_weather_forecast.coord.lon
          )
        );

        const fetched_hourly_weather_forecast =
          await fetch_hourly_weather_by_city(identifier.city, temperature_unit);

        if (Number(fetched_hourly_weather_forecast.cod) === 200) {
          set_future_forecast(fetched_hourly_weather_forecast);
          set_loading(false);
          fetch_air_quality_forecast(
            fetched_weather_forecast.coord.lat,
            fetched_weather_forecast.coord.lon
          );
        } else {
          redirect_to_error_screen(
            navigation,
            "Home",
            "We are unable to search weather forecast for the city name entered",
            "home"
          );
        }
      } else {
        redirect_to_error_screen(
          navigation,
          "Home",
          "We are unable to search weather forecast for the city name entered",
          "home"
        );
      }
    }

    if (weather_location) {
      await analytics().logSearch({
        search_term: weather_location,
      });
    }
  };

  const refresh = () => {
    set_loading(true);
    fetch_weather_forecast();
  };

  useEffect(() => {
    set_loading(true);
    fetch_weather_forecast();
  }, [identifier, temperature_unit, walk_through_status]);

  useEffect(() => {
    if (active_tab === "weather") {
      set_scroll_view_height(1.685 * screen_height);
    }

    if (active_tab === "air_quality") {
      set_scroll_view_height(1.135 * screen_height);
    }
  }, [active_tab]);

  useEffect(() => {
    if (is_timeline_active) {
      set_scroll_view_height(1.93 * screen_height);
    } else {
      set_scroll_view_height(1.685 * screen_height);
    }
  }, [is_timeline_active]);

  return (
    <>
      {loading ? (
        <WeatherLoader />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={refresh} />
          }
          contentContainerStyle={{
            flexGrow: 1,
            height: scroll_view_height,
          }}
          style={{ paddingHorizontal: 15 }}
          showsVerticalScrollIndicator={false}
        >
          <Header
            weather_location={weather_location}
            weather_icon={weather_forecast.weather[0].icon}
            weather_condition={weather_forecast.weather[0].main}
          />

          <TabBar active_tab={active_tab} set_active_tab={set_active_tab} />

          {active_tab === "weather" ? (
            <Weather
              future_forecast={future_forecast}
              weather_location={weather_location}
              temperature_unit={temperature_unit}
              weather_forecast={weather_forecast}
              is_timeline_active={is_timeline_active}
              set_is_timeline_active={set_is_timeline_active}
            />
          ) : (
            <AirQuality air_quality={air_quality} />
          )}
        </ScrollView>
      )}
    </>
  );
};

export default Main;
