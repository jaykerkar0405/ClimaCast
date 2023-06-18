// React Native Component Imports
import { View, Text, Image } from "react-native";

// App's External Imports
import { Ionicons } from "react-native-vector-icons";

// App's Internal Imports
import {
  render_weather_icon,
  render_weather_message,
  validate_weather_location,
} from "../../modules";
import { theme } from "../../constants";
import styles from "../../assets/styles/header";

const Header = ({ weather_location, weather_icon, weather_condition }) => {
  return (
    <View style={styles.header}>
      <View style={styles.left_panel}>
        <View>
          <Text style={styles.left_panel_title}>
            {
              render_weather_message(weather_condition)
                .weather_message_first_line
            }
          </Text>
          <Text style={[styles.left_panel_title, { marginTop: -5 }]}>
            {
              render_weather_message(weather_condition)
                .weather_message_second_line
            }
          </Text>
        </View>

        <Image
          source={{
            uri: render_weather_icon(weather_icon),
          }}
          style={styles.weather_icon}
        />
      </View>

      <View style={styles.right_panel}>
        <Ionicons
          name="ios-location-sharp"
          size={21}
          color={theme().tertiary_text_color}
        />
        <Text style={styles.right_panel_title}>
          {validate_weather_location(weather_location)}
        </Text>
      </View>
    </View>
  );
};

export default Header;
