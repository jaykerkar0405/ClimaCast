// React Native Component Imports
import { View, Text, Image } from "react-native";

// App's External Imports
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "react-native-vector-icons";

// App's Internal Imports
import get_computed_style from "../../assets/styles/header";
import {
  render_weather_icon,
  render_weather_message,
  validate_weather_location,
} from "../../modules";

const Header = ({ weather_icon, weather_location, weather_condition }) => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);

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
          <Text style={styles.left_panel_title}>
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
          size={20}
          name="ios-location-sharp"
          color={colors.tertiary_text_color}
        />
        <Text style={styles.right_panel_title}>
          {validate_weather_location(weather_location)}
        </Text>
      </View>
    </View>
  );
};

export default Header;
