// React Native Component Imports
import { FlatList, View, Text, Image } from "react-native";

// React Hook Imports
import { useEffect, useState } from "react";

// App's Internal Imports
import {
  compare_timezone,
  render_weather_icon,
  convert_unix_to_offset_time,
} from "../../modules";
import styles from "../../assets/styles/weather/hourly_forecast";

const HourlyForecast = ({ future_forecast, offset }) => {
  const [hourly_forecast, set_hourly_forecast] = useState(null);

  const filter_future_forecast = () => {
    const filtered_future_forecast = future_forecast.filter((element) => {
      if (compare_timezone(element.dt, offset) === true) {
        return element;
      }
    });

    set_hourly_forecast(filtered_future_forecast);
  };

  useEffect(() => {
    filter_future_forecast();

    return () => {
      set_hourly_forecast(null);
    };
  }, [offset]);

  const HourlyForecastItem = ({
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

        <Text style={styles.hourly_forecast_degree_symbol}>°C</Text>
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
