// React Native Component Imports
import { View, Text } from "react-native";

// App's External Imports
import { Ionicons, Feather } from "react-native-vector-icons";

// App's Internal Imports
import { convert_unix_to_standard_time } from "../../modules";
import styles from "../../assets/styles/weather/weather_parameters";

const WeatherParameters = ({
  weather_forecast: { sunset, sunrise, feels_like },
}) => {
  return (
    <View style={styles.weather_parameters}>
      <View style={styles.weather_parameter}>
        <Ionicons style={styles.weather_parameter_icon} name="thermometer" />
        <Text style={styles.weather_parameter_value}>
          {Math.round(feels_like)}° C
        </Text>
      </View>

      <View style={styles.weather_parameter}>
        <Feather style={styles.weather_parameter_icon} name="sunrise" />
        <Text style={styles.weather_parameter_value}>
          {convert_unix_to_standard_time(sunrise)}
        </Text>
      </View>

      <View style={styles.weather_parameter}>
        <Feather style={styles.weather_parameter_icon} name="sunset" />
        <Text style={styles.weather_parameter_value}>
          {convert_unix_to_standard_time(sunset)}
        </Text>
      </View>
    </View>
  );
};

export default WeatherParameters;
