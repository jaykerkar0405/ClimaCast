// React Native Component Imports
import { FlatList, View, Text, Image } from "react-native";

// React Hook Imports
import { useEffect, useState } from "react";

// App's External Imports
import { useTheme } from "@react-navigation/native";

// App's Internal Imports
import {
  compare_timezone,
  render_weather_icon,
  determine_temperature_unit,
  convert_unix_to_offset_time,
} from "../../modules";
import get_computed_style from "../../assets/styles/weather/hourly_forecast";

const HourlyForecast = ({ offset, future_forecast, temperature_unit }) => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);
  const [hourly_forecast, set_hourly_forecast] = useState(null);

  const filter_future_forecast = () => {
    const filtered_future_forecast = future_forecast.filter((element) => {
      if (compare_timezone(element.dt, offset) === true) {
        return element;
      }
    });

    if (filtered_future_forecast.length > 0) {
      set_hourly_forecast(filtered_future_forecast);
    } else {
      const filtered_future_forecast = future_forecast.filter((element) => {
        if (compare_timezone(element.dt, offset + 1) === true) {
          return element;
        }
      });

      set_hourly_forecast(filtered_future_forecast);
    }
  };

  useEffect(() => {
    filter_future_forecast();

    return () => {
      set_hourly_forecast(null);
    };
  }, [offset, temperature_unit]);

  const HourlyForecastItem = ({
    temperature_unit,
    hourly_forecast: {
      unix_time,
      temperature,
      weather_icon,
      weather_condition,
    },
  }) => {
    return (
      <View style={styles.hourly_forecast}>
        <Text style={styles.hourly_forecast_time}>
          {convert_unix_to_offset_time(unix_time)}
        </Text>

        <Image
          source={{
            uri: render_weather_icon(weather_icon),
          }}
          style={styles.hourly_forecast_icon}
        />

        <Text style={styles.hourly_forecast_condition}>
          {weather_condition}
        </Text>

        <Text style={styles.hourly_forecast_temperature}>
          {Math.round(temperature)}
        </Text>

        <Text style={styles.hourly_forecast_degree_symbol}>
          {determine_temperature_unit(temperature_unit)}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      horizontal={true}
      data={hourly_forecast}
      keyExtractor={(item) => item.dt}
      showsHorizontalScrollIndicator={false}
      style={styles.hourly_forecast_container}
      renderItem={({ item }) => {
        if (convert_unix_to_offset_time(item.dt) !== "21:00") {
          return (
            <HourlyForecastItem
              temperature_unit={temperature_unit}
              hourly_forecast={{
                unix_time: item.dt,
                temperature: item.main.temp,
                weather_icon: item.weather[0].icon,
                weather_condition: item.weather[0].main,
              }}
            />
          );
        }
      }}
    />
  );
};

export default HourlyForecast;
