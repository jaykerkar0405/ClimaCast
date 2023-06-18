// React Native Component Imports
import { ScrollView, RefreshControl } from "react-native";

// React Hook Imports
import { useRef, useState, useEffect, useContext } from "react";

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
  redirect_to_error_page,
  fetch_weather_by_geolocation,
  fetch_hourly_weather_by_city,
  fetch_hourly_weather_by_geolocation,
} from "../../modules";
import { WalkThroughContext } from "../../contexts";

const Main = ({ type, identifier, navigation }) => {
  const snapshot_ref = useRef(null);
  const [loading, set_loading] = useState(true);
  const [refreshing, set_refreshing] = useState(false);
  const [air_quality, set_air_quality] = useState(null);
  const [active_tab, set_active_tab] = useState("weather");
  const [future_forecast, set_future_forecast] = useState(null);
  const { walk_through_status } = useContext(WalkThroughContext);
  const [weather_forecast, set_weather_forecast] = useState(null);
  const [scrollview_height, set_scrollview_height] = useState(1412);

  const fetch_air_quality_forecast = async (latitude, longitude) => {
    const fetched_air_quality = await fetch_air_quality(latitude, longitude);

    if (fetched_air_quality.list) {
      set_air_quality(fetched_air_quality);
    } else {
      redirect_to_error_page(
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
        identifier.longitude
      );

      if (fetched_weather_forecast.cod === 200) {
        set_weather_forecast(fetched_weather_forecast);

        const fetched_hourly_weather_forecast =
          await fetch_hourly_weather_by_geolocation(
            identifier.latitude,
            identifier.longitude
          );

        if (Number(fetched_hourly_weather_forecast.cod) === 200) {
          set_future_forecast(fetched_hourly_weather_forecast);
          set_loading(false);
          fetch_air_quality_forecast(identifier.latitude, identifier.longitude);
        } else {
          redirect_to_error_page(
            navigation,
            "Home",
            "We are unable to search weather forecast for the city name entered",
            "home"
          );
        }
      } else {
        redirect_to_error_page(
          navigation,
          "Home",
          "We are unable to search weather forecast for the city name entered",
          "home"
        );
      }
    }

    if (type === "city") {
      const fetched_weather_forecast = await fetch_weather_by_city(
        identifier.city
      );

      if (fetched_weather_forecast.cod === 200) {
        set_weather_forecast(fetched_weather_forecast);

        const fetched_hourly_weather_forecast =
          await fetch_hourly_weather_by_city(identifier.city);

        if (Number(fetched_hourly_weather_forecast.cod) === 200) {
          set_future_forecast(fetched_hourly_weather_forecast);
          set_loading(false);
          fetch_air_quality_forecast(
            fetched_weather_forecast.coord.lat,
            fetched_weather_forecast.coord.lon
          );
        } else {
          redirect_to_error_page(
            navigation,
            "Home",
            "We are unable to search weather forecast for the city name entered",
            "home"
          );
        }
      } else {
        redirect_to_error_page(
          navigation,
          "Home",
          "We are unable to search weather forecast for the city name entered",
          "home"
        );
      }
    }
  };

  const refresh = () => {
    set_loading(true);
    fetch_weather_forecast();
  };

  useEffect(() => {
    fetch_weather_forecast();
  }, [identifier, walk_through_status]);

  useEffect(() => {
    if (active_tab === "weather") {
      set_scrollview_height(1412);
    }

    if (active_tab === "air_quality") {
      set_scrollview_height(950);
    }
  }, [active_tab]);

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
            height: scrollview_height,
          }}
          style={{ paddingHorizontal: 15 }}
          showsVerticalScrollIndicator={false}
        >
          <Header
            weather_location={weather_forecast.name}
            weather_icon={weather_forecast.weather[0].icon}
            weather_condition={weather_forecast.weather[0].main}
          />

          <TabBar active_tab={active_tab} set_active_tab={set_active_tab} />

          {active_tab === "weather" ? (
            <Weather
              snapshot_ref={snapshot_ref}
              weather_forecast={weather_forecast}
              future_forecast={future_forecast}
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
