// React Native Component Imports
import { View, Text } from "react-native";

// App's External Imports
import { useTheme } from "@react-navigation/native";
import { MaterialIcons } from "react-native-vector-icons";

// App's Internal Imports
import { bearing_to_direction } from "../../modules";
import get_computed_style from "../../assets/styles/weather/weather_information";

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
  const { colors } = useTheme();
  const styles = get_computed_style(colors);

  return (
    <View style={styles.weather_information}>
      <View style={styles.theoretical_information_container}>
        <View style={styles.theoretical_information}>
          <Text style={styles.theoretical_information_title}>Weather</Text>
          <Text style={styles.theoretical_information_value}>
            {weather_condition}
          </Text>
        </View>

        <View style={styles.theoretical_information}>
          <Text style={styles.theoretical_information_title}>Latitude</Text>
          <Text style={styles.theoretical_information_value}>
            {latitude.toFixed(2)}
          </Text>
        </View>

        <View style={styles.theoretical_information}>
          <Text style={styles.theoretical_information_title}>Longitude</Text>
          <Text style={styles.theoretical_information_value}>
            {longitude.toFixed(2)}
          </Text>
        </View>

        <View style={styles.theoretical_information}>
          <Text style={styles.theoretical_information_title}>
            Min Temperature
          </Text>
          <Text style={styles.theoretical_information_value}>
            {Math.round(min_temperature)}
            {"   "}
          </Text>
          <Text style={styles.theoretical_information_degree_symbol}>°C</Text>
        </View>

        <View
          style={[styles.theoretical_information, { borderBottomWidth: 0 }]}
        >
          <Text style={styles.theoretical_information_title}>
            Max Temperature
          </Text>
          <Text style={styles.theoretical_information_value}>
            {Math.round(max_temperature)}
            {"   "}
          </Text>
          <Text style={styles.theoretical_information_degree_symbol}>°C</Text>
        </View>
      </View>

      <View style={styles.wind_information_container}>
        <View style={styles.wind_information}>
          <View style={styles.wind_component}>
            <Text style={styles.wind_component_title}>Clouds</Text>
            <Text style={styles.wind_component_value}>{clouds}</Text>
          </View>

          <View style={styles.wind_component}>
            <Text style={styles.wind_component_title}>Visibility</Text>
            <Text style={styles.wind_component_value}>
              {Math.round(visibility / 1000)} km
            </Text>
          </View>

          <View style={styles.wind_component}>
            <Text style={styles.wind_component_title}>Speed</Text>
            <Text style={styles.wind_component_value}>
              {Math.round((wind_speed * 18) / 5)} km/hr
            </Text>
          </View>

          <View style={[styles.wind_component, { borderBottomWidth: 0 }]}>
            <Text style={styles.wind_component_title}>Gust</Text>
            <Text style={styles.wind_component_value}>
              {wind_gust ? `${Math.round((wind_gust * 18) / 5)} km/hr` : "--"}
            </Text>
          </View>
        </View>

        <View style={styles.wind_direction}>
          <Text style={styles.wind_direction_title}>Wind Direction</Text>
          <MaterialIcons
            size={50}
            color={colors.wind_direction_icon_color}
            name={bearing_to_direction(wind_direction).direction_icon}
          />
          <Text style={styles.wind_direction_value}>
            {wind_direction}° |{" "}
            {bearing_to_direction(wind_direction).direction_name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherInformation;
