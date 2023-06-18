// React Native Component Imports
import { View, Text, Image } from "react-native";

// App's External Imports
import { Ionicons } from "react-native-vector-icons";

// App's Internal Imports
const compass = require("../../assets/images/compass.png");
import styles from "../../assets/styles/weather/weather_information";

const WeatherInformation = ({
  weather_forecast: {
    clouds,
    latitude,
    longitude,
    wind_gust,
    visibility,
    wind_speed,
    wind_direction,
    min_temperature,
    max_temperature,
    weather_condition,
  },
}) => {
  return (
    <View style={styles.weather_information}>
      <View style={styles.theoretical_information_container}>
        <View style={styles.theoretical_information}>
          <Text style={styles.theoretical_information_title}>Longitude</Text>
          <Text style={styles.theoretical_information_value}>{longitude}</Text>
        </View>

        <View style={styles.theoretical_information}>
          <Text style={styles.theoretical_information_title}>Latitude</Text>
          <Text style={styles.theoretical_information_value}>{latitude}</Text>
        </View>

        <View style={styles.theoretical_information}>
          <Text style={styles.theoretical_information_title}>Weather</Text>
          <Text style={styles.theoretical_information_value}>
            {weather_condition}
          </Text>
        </View>

        <View style={styles.theoretical_information}>
          <Text style={styles.theoretical_information_title}>
            Min Temperature
          </Text>
          <Text style={styles.theoretical_information_value}>
            {Math.round(min_temperature)}° C
          </Text>
        </View>

        <View style={[styles.theoretical_information, { borderBottomWidth: 0 }]}>
          <Text style={styles.theoretical_information_title}>
            Max Temperature
          </Text>
          <Text style={styles.theoretical_information_value}>
            {Math.round(max_temperature)}° C
          </Text>
        </View>
      </View>

      <View style={styles.wind_information_container}>
        <View style={styles.wind_information}>
          <View style={styles.wind_component}>
            <Text style={styles.wind_component_title}>Gust</Text>
            <Text style={styles.wind_component_value}>{wind_gust} m/s</Text>
          </View>

          <View style={styles.wind_component}>
            <Text style={styles.wind_component_title}>Speed</Text>
            <Text style={styles.wind_component_value}>{wind_speed} m/s</Text>
          </View>

          <View style={styles.wind_component}>
            <Text style={styles.wind_component_title}>Clouds</Text>
            <Text style={styles.wind_component_value}>{clouds}</Text>
          </View>

          <View style={[styles.wind_component, { borderBottomWidth: 0 }]}>
            <Text style={styles.wind_component_title}>Visibility</Text>
            <Text style={styles.wind_component_value}>{visibility}</Text>
          </View>
        </View>

        <View style={styles.wind_direction}>
          <Ionicons
            size={30}
            name="caret-up"
            style={styles.wind_direction_pointer}
          />

          <Image
            source={compass}
            style={[
              styles.wind_direction_compass,
              {
                transform: [{ rotate: `${270 - wind_direction}deg` }],
              },
            ]}
          />

          <Text style={styles.wind_direction_degree}>{wind_direction}°</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherInformation;
