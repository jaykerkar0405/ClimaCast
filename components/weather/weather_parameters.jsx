// React Native Component Imports
import { View, Text } from "react-native";

// App's External Imports
import { useTheme } from "@react-navigation/native";
import { Ionicons, Feather } from "react-native-vector-icons";

// App's Internal Imports
import { convert_unix_to_standard_time } from "../../modules";
import get_computed_style from "../../assets/styles/weather/weather_parameters";

const WeatherParameters = ({
  weather_forecast: { sunset, sunrise, feels_like },
}) => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);

  return (
    <View style={styles.weather_parameters}>
      <View style={styles.weather_parameter}>
        <Ionicons style={styles.weather_parameter_icon} name="thermometer" />
        <Text style={styles.weather_parameter_title}>Feels Like</Text>
        <Text style={styles.weather_parameter_value}>
          {Math.round(feels_like)}
        </Text>
        <Text style={styles.weather_parameter_degree_symbol}>°C</Text>
      </View>

      <View style={styles.weather_parameter}>
        <Feather style={styles.weather_parameter_icon} name="sunrise" />
        <Text style={styles.weather_parameter_title}>Sunrise</Text>
        <Text style={styles.weather_parameter_value}>
          {convert_unix_to_standard_time(sunrise)}
        </Text>
      </View>

      <View style={styles.weather_parameter}>
        <Feather style={styles.weather_parameter_icon} name="sunset" />
        <Text style={styles.weather_parameter_title}>Sunset</Text>
        <Text style={styles.weather_parameter_value}>
          {convert_unix_to_standard_time(sunset)}
        </Text>
      </View>
    </View>
  );
};

export default WeatherParameters;
