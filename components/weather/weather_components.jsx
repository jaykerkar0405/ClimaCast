// React Native Component Imports
import { View, Text, Image } from "react-native";

// App's External Imports
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import ViewShot from "react-native-view-shot";
import { useTheme } from "@react-navigation/native";

// App's Internal Imports
import { render_weather_icon, determine_temperature_unit } from "../../modules";
import get_computed_style from "../../assets/styles/weather/weather_components";

const WeatherComponents = ({
  snapshot_ref,
  temperature_unit,
  is_timeline_active,
  weather_forecast: {
    pressure,
    humidity,
    wind_speed,
    temperature,
    weather_icon,
  },
}) => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);

  return (
    <ViewShot
      style={[styles.weather, is_timeline_active && { marginTop: 0 }]}
      ref={snapshot_ref}
    >
      <View style={styles.upper_panel}>
        <Image
          source={{
            uri: render_weather_icon(weather_icon),
          }}
          style={styles.weather_icon}
        />

        <Text style={styles.weather_temperature}>
          {Math.round(temperature)}
          {"  "}
        </Text>
        <Text style={styles.weather_degree_symbol}>
          {determine_temperature_unit(temperature_unit)}
        </Text>
      </View>

      <View style={styles.lower_panel}>
        <View style={styles.weather_parameter}>
          <Feather
            size={23}
            name="wind"
            style={styles.weather_parameter_icon}
          />
          <Text style={styles.weather_parameter_title}>Wind</Text>
          <Text style={styles.weather_parameter_value}>
            {Math.round(wind_speed * 3.6)} km/hr
          </Text>
        </View>

        <View style={styles.weather_parameter}>
          <Ionicons
            size={23}
            name="water"
            style={styles.weather_parameter_icon}
          />
          <Text style={styles.weather_parameter_title}>Humidity</Text>
          <Text style={styles.weather_parameter_value}>
            {Math.round(humidity)} %
          </Text>
        </View>

        <View style={styles.weather_parameter}>
          <MaterialCommunityIcons
            size={23}
            name="gauge"
            style={styles.weather_parameter_icon}
          />
          <Text style={styles.weather_parameter_title}>Pressure</Text>
          <Text style={styles.weather_parameter_value}>
            {Math.round(pressure / 1013.25)} atm
          </Text>
        </View>
      </View>
    </ViewShot>
  );
};

export default WeatherComponents;
